import { MongoClient } from "mongodb";

export async function connectDatabase(databaseUrl: string) {
  const client = await MongoClient.connect(databaseUrl);
  return client;
}

export async function insertDocument(
  client: MongoClient,
  collection: string,
  document: any
) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(
  client: MongoClient,
  collection: string,
  sort: { [key: string]: any } = {},
  filter: { [key: string]: any } = {}
) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return documents;
}
