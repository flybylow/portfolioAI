import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ward | Making Tech Human",
  description: "AI and blockchain UX leadership portfolio showcasing how I transform complex technology into intuitive experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 