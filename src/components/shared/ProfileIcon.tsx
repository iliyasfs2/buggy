"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import type { LucideProps } from "lucide-react";

export function ProfileIcon({ className = "" }: LucideProps): ReactElement {
  return (
    <Image
      src="/icons/profile.png"
      alt="Profile navigation icon"
      width={28}
      height={28}
      className={`shrink-0 object-contain ${className}`}
      priority
    />
  );
}
