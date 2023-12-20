import "@/assets/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { inter } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "My Technical Test",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-gray-50`}>
        {children}
      </body>
    </html>
  );
}
