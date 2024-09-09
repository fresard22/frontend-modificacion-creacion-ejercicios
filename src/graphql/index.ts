/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import * as graphql from "./graphql";

const documents = {
  '\n      query currentUser {\n        currentUser {\n          id\n          email\n          name\n          role\n          picture\n          tags\n          projects {\n            id\n            code\n            label\n          }\n          groups {\n            id\n            code\n            label\n            tags\n          }\n        }\n        project(code: "NivPreAlg") {\n          id\n          code\n          label\n        }\n      }\n    ':
    graphql.CurrentUserDocument,
  "\n      query LastExercise($code: String!) {\n        contentByCode(code: $code) {\n          json\n        }\n      }\n    ":
    graphql.LastExerciseDocument,
  "\n      query potatoquery($code: String!) {\n        contentByCode(code: $code) {\n          id\n          code\n          description\n          label\n          json\n          kcs {\n            code\n          }\n        }\n      }\n    ":
    graphql.PotatoqueryDocument,
  "\n      query ProjectData($input: ContentSelectionInput!) {\n        contentSelection {\n          contentSelected(input: $input) {\n            contentResult {\n              P {\n                id\n                code\n                json\n                kcs {\n                  code\n                }\n                description\n                label\n              }\n              Msg {\n                label\n                text\n              }\n              Order\n              Preferred\n            }\n            model\n            newP\n            PU\n            pAVGsim\n            pAVGdif\n            tableSim {\n              contentCode\n              sim\n              diff\n              probSuccessAvg\n              probSuccessMult\n            }\n            tableDifEasy {\n              contentCode\n              sim\n              diff\n              probSuccessAvg\n              probSuccessMult\n            }\n            tableDifHarder {\n              contentCode\n              sim\n              diff\n              probSuccessAvg\n              probSuccessMult\n            }\n            topicCompletedMsg {\n              label\n              text\n            }\n          }\n        }\n      }\n    ":
    graphql.ProjectDataDocument,
  '\n      query data {\n        topicByCode(code: "WPFrac") {\n          content {\n            id\n            code\n            description\n            label\n            json\n            kcs {\n              code\n            }\n          }\n        }\n      }\n    ':
    graphql.DataDocument,
  "\n      mutation Action($data: ActionInput!) {\n        action(data: $data)\n      }\n    ":
    graphql.ActionDocument,
  '\n      mutation updateModelState($input: UpdateModelStateInput!) {\n        updateModelState(input: $input)\n      }\n      # fetchPolicy: "no-cache" # Agregamos la política de caché utilizando un comentario GraphQL\n    ':
    graphql.UpdateModelStateDocument,
};

export function gql(
  source: '\n      query currentUser {\n        currentUser {\n          id\n          email\n          name\n          role\n          picture\n          tags\n          projects {\n            id\n            code\n            label\n          }\n          groups {\n            id\n            code\n            label\n            tags\n          }\n        }\n        project(code: "NivPreAlg") {\n          id\n          code\n          label\n        }\n      }\n    ',
): typeof documents['\n      query currentUser {\n        currentUser {\n          id\n          email\n          name\n          role\n          picture\n          tags\n          projects {\n            id\n            code\n            label\n          }\n          groups {\n            id\n            code\n            label\n            tags\n          }\n        }\n        project(code: "NivPreAlg") {\n          id\n          code\n          label\n        }\n      }\n    '];
export function gql(
  source: "\n      query LastExercise($code: String!) {\n        contentByCode(code: $code) {\n          json\n        }\n      }\n    ",
): typeof documents["\n      query LastExercise($code: String!) {\n        contentByCode(code: $code) {\n          json\n        }\n      }\n    "];
export function gql(
  source: "\n      query potatoquery($code: String!) {\n        contentByCode(code: $code) {\n          id\n          code\n          description\n          label\n          json\n          kcs {\n            code\n          }\n        }\n      }\n    ",
): typeof documents["\n      query potatoquery($code: String!) {\n        contentByCode(code: $code) {\n          id\n          code\n          description\n          label\n          json\n          kcs {\n            code\n          }\n        }\n      }\n    "];
export function gql(
  source: "\n      query ProjectData($input: ContentSelectionInput!) {\n        contentSelection {\n          contentSelected(input: $input) {\n            contentResult {\n              P {\n                id\n                code\n                json\n                kcs {\n                  code\n                }\n                description\n                label\n              }\n              Msg {\n                label\n                text\n              }\n              Order\n              Preferred\n            }\n            model\n            newP\n            PU\n            pAVGsim\n            pAVGdif\n            tableSim {\n              contentCode\n              sim\n              diff\n              probSuccessAvg\n              probSuccessMult\n            }\n            tableDifEasy {\n              contentCode\n              sim\n              diff\n              probSuccessAvg\n              probSuccessMult\n            }\n            tableDifHarder {\n              contentCode\n              sim\n              diff\n              probSuccessAvg\n              probSuccessMult\n            }\n            topicCompletedMsg {\n              label\n              text\n            }\n          }\n        }\n      }\n    ",
): typeof documents["\n      query ProjectData($input: ContentSelectionInput!) {\n        contentSelection {\n          contentSelected(input: $input) {\n            contentResult {\n              P {\n                id\n                code\n                json\n                kcs {\n                  code\n                }\n                description\n                label\n              }\n              Msg {\n                label\n                text\n              }\n              Order\n              Preferred\n            }\n            model\n            newP\n            PU\n            pAVGsim\n            pAVGdif\n            tableSim {\n              contentCode\n              sim\n              diff\n              probSuccessAvg\n              probSuccessMult\n            }\n            tableDifEasy {\n              contentCode\n              sim\n              diff\n              probSuccessAvg\n              probSuccessMult\n            }\n            tableDifHarder {\n              contentCode\n              sim\n              diff\n              probSuccessAvg\n              probSuccessMult\n            }\n            topicCompletedMsg {\n              label\n              text\n            }\n          }\n        }\n      }\n    "];
export function gql(
  source: '\n      query data {\n        topicByCode(code: "WPFrac") {\n          content {\n            id\n            code\n            description\n            label\n            json\n            kcs {\n              code\n            }\n          }\n        }\n      }\n    ',
): typeof documents['\n      query data {\n        topicByCode(code: "WPFrac") {\n          content {\n            id\n            code\n            description\n            label\n            json\n            kcs {\n              code\n            }\n          }\n        }\n      }\n    '];
export function gql(
  source: "\n      mutation Action($data: ActionInput!) {\n        action(data: $data)\n      }\n    ",
): typeof documents["\n      mutation Action($data: ActionInput!) {\n        action(data: $data)\n      }\n    "];
export function gql(
  source: '\n      mutation updateModelState($input: UpdateModelStateInput!) {\n        updateModelState(input: $input)\n      }\n      # fetchPolicy: "no-cache" # Agregamos la política de caché utilizando un comentario GraphQL\n    ',
): typeof documents['\n      mutation updateModelState($input: UpdateModelStateInput!) {\n        updateModelState(input: $input)\n      }\n      # fetchPolicy: "no-cache" # Agregamos la política de caché utilizando un comentario GraphQL\n    '];

export function gql(source: string): DocumentNode | string;
export function gql(source: string) {
  return (documents as any)[source] || source;
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

export * from "rq-gql";
export * from "./graphql";
