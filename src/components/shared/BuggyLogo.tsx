"use client";

import type { ReactElement } from "react";
import Image from "next/image";

export interface BuggyLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function BuggyLogo({
  className = "h-9 w-auto object-contain",
  width = 240,
  height = 88
}: BuggyLogoProps): ReactElement {
  return (
    <Image
      src="/icons/buggy-logo.png"
      alt="Buggy"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
