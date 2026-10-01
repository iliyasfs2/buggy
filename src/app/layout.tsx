import type { Metadata } from "next";
import type { ReactNode, ReactElement } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buggy",
  description: "Client-side developer learning and simulation platform"
};

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
