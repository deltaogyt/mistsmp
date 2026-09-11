import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "MistSMP Store | Official Minecraft Store",
  description: "Official MistSMP Minecraft Survival SMP store. Purchase ranks, coins, crate keys and bundles.",
  openGraph: { title: "MistSMP Store", description: "Official Survival SMP store", type: "website" }
};
export const viewport: Viewport = { themeColor: "#071426" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
