import React from "react";
import { useState, useMemo } from "react";
import { Button, Stack, Alert, AlertIcon, Center } from "@chakra-ui/react";
import type { ExLog } from "./Tools/ExcerciseType2";
import Hint from "../../components/Hint";
import { MathfieldElement } from "mathlive";
import dynamic from "next/dynamic";
import MQPostfixSolver from "../../utils/MQPostfixSolver";
import MQPostfixparser from "../../utils/MQPostfixparser";
import { convertirNotacion } from "./convertirNotacion";
import { useAction } from "../../utils/action";
import type { value } from "../../components/lvltutor/Tools/ExcerciseType";
const Mathfield = dynamic(() => import("./Tools/mathLive"), {
  ssr: false,
});

const SinglePlaceholder = ({
  exc,
  nStep,
  setCompleted,
  topic,
}: {
  exc: ExLog;
  nStep: number;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  topic: string;
}) => {
  const [latex, setLatex] = useState("");
  const [error, setError] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [isCorrectValue, setIsCorrectvalue] = useState(false);
  const [Values, setValues] = useState<Array<any>>([]);
  const [hints, setHints] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const action = useAction();
  const [_, setLastHint] = useState(false);
  //console.log(exc.steps[nStep].hints)
  interface values {
    values: Array<value>;
  }
  const evaluation: {
    input1: string;
    answer: values;
    values: Array<value>;
  } = {
    input1: "",
    answer: { values: [] },
    values: [],
  };
  function evaluar(_, Values) {
    setFirstTime(!firstTime);
    //console.log("Valor Latex ",latex, "Value ", Values);

    let c = MQPostfixSolver(MQPostfixparser(convertirNotacion(Values)), evaluation.answer);
    //console.log("Entrada usuario Evaluada: ",c)
    const answer = exc.steps[nStep].answers[0].answer;
    //console.log("Respuesta:", answer)
    let a = MQPostfixparser(answer[0]);

    let b = MQPostfixSolver(a, evaluation.answer);
    let response = false;
    //console.log(b)
    if (b == c) {
      //console.log("true");
      setIsCorrectvalue(true);
      setCompleted(true);
      response = true;
    } else {
      setError(true);
      setHints(hints + 1);
    }
    setAttempts(attempts + 1);
    action({
      verbName: "tryStep",
      stepID: "" + exc.steps[nStep].stepId,
      contentID: exc.code,
      topicID: topic,
      result: response ? 1 : 0,
      kcsIDs: exc.steps[nStep].KCs,
      extra: {
        response: [Values],
        attempts: attempts,
        hints: hints,
      },
    });
  }

  function modify(latex, prompsValues) {
    //console.log(latex)
    //console.log(prompsValues);

    //console.log(b)
    setLatex(latex);
    setValues(prompsValues.a);
    //console.log("Evaluar:", b, "Latex ", latex ,"Valores ", prompsValues)
  }
  const mfe = useMemo(() => new MathfieldElement(), []);

  //
  return (
    <>
      <Center>
        <Mathfield
          readOnly={true}
          mfe={mfe}
          value={`\\large ${exc.steps[nStep].displayResult[0]} \\quad`}
          onChange={modify}
        ></Mathfield>
      </Center>
      <Stack spacing={4} m={2} direction="row" justifyContent={"center"}>
        <Button colorScheme="blue" size="sm" onClick={() => evaluar(latex, Values)}>
          {" "}
          enviar
        </Button>
        <Hint
          hints={exc.steps[nStep].hints}
          contentId={exc.code}
          topicId={exc.type}
          stepId={exc.steps[nStep].stepId}
          matchingError={exc.steps[nStep].matchingError}
          response={[latex]}
          error={error}
          setError={setError}
          hintCount={hints}
          setHints={setHints}
          setLastHint={setLastHint}
        ></Hint>
      </Stack>

      {firstTime ? null : !isCorrectValue ? (
        <Alert status="error">
          <AlertIcon />
          Tu respuesta no es la esperada intentalo denuevo.
        </Alert>
      ) : (
        <Alert status="success">
          <AlertIcon />
          {exc.steps[nStep].correctMsg}
        </Alert>
      )}
    </>
  );
};

export default SinglePlaceholder;
