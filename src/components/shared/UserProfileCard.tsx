"use client";

import type { ReactElement } from "react";

export interface UserProfileCardProps {
  avatarInitials: string;
  username: string;
  rank: string;
  className?: string;
}

export function UserProfileCard({
  avatarInitials,
  username,
  rank,
  className = ""
}: UserProfileCardProps): ReactElement {
  return (
    <div className={`flex items-center gap-3 px-1 py-1 select-none ${className}`}>
      <div className="w-8 h-8 rounded-full bg-slate-800 border border-[#24324a] flex items-center justify-center text-xs font-bold text-slate-100 shrink-0">
        {avatarInitials}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-semibold text-slate-100 truncate">
          {username}
        </span>
        <span className="text-[11px] text-slate-400 truncate">
          {rank}
        </span>
      </div>
    </div>
  );
}

