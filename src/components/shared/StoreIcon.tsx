"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import type { LucideProps } from "lucide-react";

export function StoreIcon({ className = "" }: LucideProps): ReactElement {
  return (
    <Image
      src="/icons/store.png"
      alt="Store navigation icon"
      width={28}
      height={28}
      className={`shrink-0 object-contain ${className}`}
      priority
    />
  );
}
