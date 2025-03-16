import type { Metadata } from "next";
import { Permanent_Marker  } from "next/font/google";
import "./globals.css";

const font = Permanent_Marker ({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Lohit | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
