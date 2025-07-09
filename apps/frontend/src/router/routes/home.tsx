import { createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./root";
import { HomePage } from "../../components/home/HomePage";

export const Route = createRoute({
  path: "/home",
  getParentRoute: () => RootRoute,
  component: HomePage,
});
