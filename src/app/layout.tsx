import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Note Taker",
  description: "Capture your thoughts, organize your ideas, and access them anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-primary antialiased">{children}</body>
    </html>
  );
}
