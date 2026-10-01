"use client";

import type { ReactElement } from "react";
import {
  useNavStore,
  selectActiveTab,
  selectCurrentTrack,
  selectStreakCount,
  selectByteBalance,
  selectSetActiveTab
} from "@/store/useNavStore";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { TrackPill, StatBadge, UserProfileCard, BuggyLogo } from "@/components/shared";

export interface DesktopSidebarProps {
  className?: string;
}

export function DesktopSidebar({ className = "" }: DesktopSidebarProps): ReactElement {
  const activeTab = useNavStore(selectActiveTab);
  const currentTrack = useNavStore(selectCurrentTrack);
  const streakCount = useNavStore(selectStreakCount);
  const byteBalance = useNavStore(selectByteBalance);
  const setActiveTab = useNavStore(selectSetActiveTab);

  return (
    <aside
      role="navigation"
      aria-label="Desktop Navigation"
      className={`hidden md:flex flex-col w-64 h-screen fixed inset-y-0 left-0 bg-slate-900 border-r-2 border-slate-700/80 z-40 select-none p-4 justify-between ${className}`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center px-4">
          <BuggyLogo className="h-11 w-auto object-contain" />
        </div>

        <TrackPill track={currentTrack} />

        <nav aria-label="Main Sections" className="flex flex-col gap-2">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full gap-4 px-4 py-3.5 text-lg font-medium transition-colors rounded-xl ${
                  isActive
                    ? "bg-blue-950/50 text-blue-500 border border-blue-500/30"
                    : "text-white hover:text-white hover:bg-slate-800/80 border border-transparent"
                }`}
              >
                <Icon
                  className={`w-7 h-7 shrink-0 ${
                    isActive ? "text-blue-500" : "text-white"
                  }`}
                />
                <span>{item.label}</span>
                {item.badgeCount !== undefined && item.badgeCount > 0 && (
                  <span
                    className={`ml-auto px-2 py-0.5 text-xs font-semibold rounded ${
                      isActive
                        ? "bg-blue-900/40 text-blue-300 border border-blue-500/30"
                        : "bg-slate-800 text-slate-100 border border-slate-700/60"
                    }`}
                  >
                    {item.badgeCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-3 pt-4 border-t-2 border-slate-700/80">
        <div className="flex items-center justify-between p-2.5 bg-slate-800/50 border border-slate-700/60 rounded-lg">
          <StatBadge variant="streak" value={streakCount} compact />
          <StatBadge variant="byte" value={byteBalance} compact />
        </div>

        <UserProfileCard
          avatarInitials="BG"
          username="dev_architect"
          rank="Lvl 14 • Senior"
        />
      </div>
    </aside>
  );
}
