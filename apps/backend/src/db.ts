import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("MONGO_URI environment variable is not set");
}
const client = new MongoClient(uri);

export async function connectToDatabase() {
  // 必要に応じて接続を確立
  await client.connect();
  return client.db(); // デフォルトDBを返す
}
