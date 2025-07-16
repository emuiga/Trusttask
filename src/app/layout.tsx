import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrustTask",
  description: "Effortless income from your tasking accounts. We handle the work. You get the rewards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="64x64" type="image/x-icon" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
