import type { ReactElement } from "react";
import { AppShell } from "@/components/layout/AppShell";

export default function HomePage(): ReactElement {
  return (
    <AppShell>
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight text-[#f8fafc]">
          Buggy Workspace
        </h1>
      </div>
    </AppShell>
  );
}
