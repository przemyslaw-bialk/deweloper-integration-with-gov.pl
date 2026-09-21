import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SDIZPC",
  description: "Sprzedaż, doradztwo i zarządzanie - Piotr Cywiński",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
