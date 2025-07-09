import { createRoute, redirect } from "@tanstack/react-router";
import { Route as RootRoute } from "./root";

export const Route = createRoute({
  path: "/",
  getParentRoute: () => RootRoute,
  // 初期アクセスで /home にリダイレクト
  beforeLoad: () => {
    throw redirect({
      to: "/home",
    });
  },
  component: () => null, // 表示されない
});
