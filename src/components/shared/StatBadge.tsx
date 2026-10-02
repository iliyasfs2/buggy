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
  const valueColor = isStreak ? "text-yellow-400" : "text-sky-400";
  const textSize = compact ? "text-sm font-bold" : "text-base font-bold";

  return (
    <div
      aria-label={label}
      className={`inline-flex items-center gap-1.5 select-none bg-transparent ${className}`}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={22}
        height={22}
        className="w-[22px] h-[22px] object-contain shrink-0 bg-transparent"
      />
      <span className={`${textSize} ${valueColor}`}>{formattedValue}</span>
    </div>
  );
}

