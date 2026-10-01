import type { ReactElement } from "react";
import Link from "next/link";

export default function NotFound(): ReactElement {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-100 p-4">
      <h2 className="text-xl font-bold mb-2">Page Not Found</h2>
      <Link
        href="/"
        className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
