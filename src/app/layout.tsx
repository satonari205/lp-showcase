import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LP制作物(見本)",
  description: "LP制作物(見本)です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
