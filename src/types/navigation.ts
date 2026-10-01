import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import type { TabId } from "@/store/useNavStore";

export interface NavItemConfig {
  id: TabId;
  label: string;
  icon: ComponentType<LucideProps>;
  badgeCount?: number;
}

export interface UserProfileSummary {
  name: string;
  handle: string;
  rank: string;
  avatarText: string;
}
