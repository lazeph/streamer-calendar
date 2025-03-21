import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

export async function connectToDatabase() {
  // 必要に応じて接続を確立
  await client.connect();
  return client.db(); // デフォルトDBを返す
}
