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
      className={`flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800/80 border border-slate-700/60 rounded-lg hover:border-slate-600 hover:bg-slate-700/50 transition-colors select-none ${className}`}
    >
      <span className="truncate">{track}</span>
      <ChevronDown className="w-3.5 h-3.5 shrink-0 text-slate-400" />
    </button>
  );
}
