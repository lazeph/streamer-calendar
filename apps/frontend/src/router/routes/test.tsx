import { createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./root";

function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">テスト画面</h1>
          <p className="text-gray-700 mb-4">
            これはテスト画面です。ルーティングが正常に動作していることを確認できます。
          </p>
          <div className="bg-yellow-100 border border-yellow-400 rounded p-4">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">
              テスト情報
            </h2>
            <ul className="text-yellow-700 space-y-1">
              <li>• 現在のURL: /test</li>
              <li>• ルーティング: 正常に動作中</li>
              <li>• コンポーネント: TestPage</li>
              <li>• 作成日時: {new Date().toLocaleString()}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createRoute({
  path: "/test",
  getParentRoute: () => RootRoute,
  component: TestPage,
});
