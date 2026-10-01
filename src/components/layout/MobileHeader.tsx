"use client";

import type { ReactElement } from "react";
import {
  useNavStore,
  selectStreakCount,
  selectByteBalance
} from "@/store/useNavStore";
import { StatBadge, BuggyLogo } from "@/components/shared";

export interface MobileHeaderProps {
  className?: string;
}

export function MobileHeader({ className = "" }: MobileHeaderProps): ReactElement {
  const streakCount = useNavStore(selectStreakCount);
  const byteBalance = useNavStore(selectByteBalance);

  return (
    <header
      role="banner"
      className={`flex md:hidden sticky top-0 z-30 h-14 w-full items-center justify-between px-4 bg-slate-900 border-b-2 border-slate-700/80 select-none ${className}`}
    >
      <div className="flex items-center">
        <BuggyLogo className="h-7 w-auto object-contain" />
      </div>

      <div className="flex items-center gap-2">
        <StatBadge variant="streak" value={streakCount} />
        <StatBadge variant="byte" value={byteBalance} />
      </div>
    </header>
  );
}
