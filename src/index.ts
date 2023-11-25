import { TypeSafeQueryDocumentCommand } from "typesafe-dynamodb/lib/query-document-command";

interface Person {
  email: string;
}

const queryperson = TypeSafeQueryDocumentCommand<Person>();

const command = new queryperson({
  TableName: "",
  IndexName: "gsi2",
  KeyConditionExpression: `GSI2PK = :pk`,
  ExpressionAttributeValues: {
    ":pk": "pk",
  },
});
