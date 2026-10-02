"use client";

import type { ReactElement } from "react";
import { ChevronDown } from "lucide-react";

export interface TrackPillProps {
  track: string;
  onSwitch?: () => void;
  className?: string;
}

export function TrackPill({
  track,
  onSwitch,
  className = ""
}: TrackPillProps): ReactElement {
  return (
    <button
      type="button"
      aria-label="Switch active track"
      onClick={onSwitch}
      className={`flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-[#f3f0f7] bg-[#2c1f42] border border-[#3f2d5c] rounded-lg hover:border-purple-800 hover:bg-[#34254e] transition-colors select-none ${className}`}
    >
      <span className="truncate">{track}</span>
      <ChevronDown className="w-3.5 h-3.5 shrink-0 text-slate-300" />
    </button>
  );
}

