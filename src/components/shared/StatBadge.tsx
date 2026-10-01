"use client";

import type { ReactElement } from "react";
import { Flame, Coins } from "lucide-react";

export type StatBadgeVariant = "streak" | "byte";

export interface StatBadgeProps {
  variant: StatBadgeVariant;
  value: number;
  compact?: boolean;
  className?: string;
}

export function StatBadge({
  variant,
  value,
  compact = false,
  className = ""
}: StatBadgeProps): ReactElement {
  const isStreak = variant === "streak";
  const label = isStreak ? `Streak: ${value} days` : `Balance: ${value.toLocaleString()} bytes`;
  const formattedValue = isStreak ? value.toString() : value.toLocaleString();

  const basePadding = compact ? "px-2 py-1" : "px-2.5 py-1";

  return (
    <div
      aria-label={label}
      className={`inline-flex items-center gap-1.5 rounded-full select-none bg-slate-800/80 border border-slate-700/60 ${basePadding} ${className}`}
    >
      {isStreak ? (
        <Flame className="w-3.5 h-3.5 text-orange-400 shrink-0" />
      ) : (
        <Coins className="w-3.5 h-3.5 text-amber-400 shrink-0" />
      )}
      <span className="text-xs font-semibold text-slate-100">{formattedValue}</span>
    </div>
  );
}
