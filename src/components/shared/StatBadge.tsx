"use client";

import type { ReactElement } from "react";
import Image from "next/image";

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

  const iconSrc = isStreak ? "/icons/streak.png" : "/icons/byte.png";
  const iconAlt = isStreak ? "Streak icon" : "Byte icon";

  return (
    <div
      aria-label={label}
      className={`inline-flex items-center gap-1.5 select-none bg-transparent ${className}`}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={18}
        height={18}
        className="w-[24px] h-[24px] object-contain shrink-0 bg-transparent"
      />
      <span className="text-xs font-semibold text-slate-100">{formattedValue}</span>
    </div>
  );
}
