// apps/backend/src/index.ts

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { connectToDatabase } from "./db";

const app = new Hono();

// 接続確認用の ping エンドポイント
app.get("/ping", async (c) => {
  const db = await connectToDatabase();
  const status = await db.command({ serverStatus: 1 });
  return c.json({ status: "ok", time: status.localTime });
});

// サーバー起動
serve({
  fetch: app.fetch,
  port: Number(process.env.PORT || 8787),
});
