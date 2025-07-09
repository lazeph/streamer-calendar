import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <div className="pt-16">
        {/* ツールバー */}
        <div className="bg-gray-100 px-4 py-2 border-b flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-200 rounded"
            >
              {isSidebarOpen ? "◀" : "▶"}
            </button>
            <div className="ml-4 flex space-x-2">
              <button className="px-3 py-1 bg-white rounded border hover:bg-gray-50">
                今日
              </button>
              <button className="px-3 py-1 bg-white rounded border hover:bg-gray-50">
                月
              </button>
              <button className="px-3 py-1 bg-white rounded border hover:bg-gray-50">
                週
              </button>
              <button className="px-3 py-1 bg-white rounded border hover:bg-gray-50">
                日
              </button>
            </div>
          </div>
          <Link
            to="/test"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            テスト画面へ
          </Link>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* サイドバー */}
          <aside
            className={`bg-white border-r w-64 transform transition-transform duration-300 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-4">
              <h2 className="font-bold text-gray-700 mb-4">フィルター</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="filter1" className="mr-2" />
                  <label htmlFor="filter1">カテゴリ1</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="filter2" className="mr-2" />
                  <label htmlFor="filter2">カテゴリ2</label>
                </div>
              </div>
            </div>
          </aside>

          {/* メインコンテンツ */}
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-[70%] mx-auto">
              {/* カレンダーのプレースホルダー */}
              <div className="bg-white rounded-lg shadow-lg p-4 h-[70vh] border">
                <div className="h-full flex flex-col">
                  {/* カレンダーのヘッダー */}
                  <div className="grid grid-cols-7 gap-1 border-b pb-2">
                    {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                      <div key={day} className="text-center font-bold">
                        {day}
                      </div>
                    ))}
                  </div>
                  {/* カレンダーの日付セル */}
                  <div className="grid grid-cols-7 gap-1 flex-1">
                    {Array.from({ length: 35 }).map((_, index) => (
                      <div
                        key={index}
                        className="border p-2 hover:bg-gray-50 min-h-[100px] overflow-hidden"
                      >
                        <span className="text-sm font-medium">{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
