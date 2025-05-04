import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";

const font = Zilla_Slab({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Lohit | Full-Stack Developer in Bangalore | Next.js, Spring Boot, Python",
  description:
    "Portfolio of Lohit, a full-stack developer based in Bangalore, India — skilled in Next.js, Spring Boot, Python, and open-source contributions. Explore projects and get in touch!",
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
