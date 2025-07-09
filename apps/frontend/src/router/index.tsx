import {
  createRouter,
  RouterProvider,
  createBrowserHistory,
} from "@tanstack/react-router";

import { Route as RootRoute } from "./routes/root";
import { Route as HomeRoute } from "./routes/home";
import { Route as RedirectRoute } from "./routes/redirect";
import { Route as TestRoute } from "./routes/test";

// addChildren を使えるのは Route オブジェクトに対してのみ！
const routeTree = RootRoute.addChildren([HomeRoute, RedirectRoute, TestRoute]);

const router = createRouter({
  routeTree,
  history: createBrowserHistory(), // ✅ これで /home などの URL になる
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
