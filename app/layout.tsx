import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Book Journal",
  description: "Book reviews page",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
