import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex min-h-[80vh] w-20 flex-col items-center justify-between rounded-3xl bg-zinc-900 py-6">
      <div className="flex flex-col gap-8">
        <div className="rounded-2xl bg-indigo-600 p-4">
          <Home className="h-6 w-6 text-white" />
        </div>

        <BookOpen className="h-6 w-6 text-zinc-400" />
        <BarChart3 className="h-6 w-6 text-zinc-400" />
        <Settings className="h-6 w-6 text-zinc-400" />
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white">
        N
      </div>
    </aside>
  );
}