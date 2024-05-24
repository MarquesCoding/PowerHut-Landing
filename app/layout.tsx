import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PowerHut | Game Hosting Company",
  description: "A Game Hosting Company that cares about raw performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <meta content="PowerHut" property="og:title"/>
        <meta content="Raw Power Hosting" property="og:description"/>
        <meta content="https://powerhut.pro" property="og:url"/>
        <meta content="https://www.powerhut.pro/logo-white.png" property="og:image"/>
        <meta content="#FF4D14" data-react-helmet="true" name="theme-color"/>
      <body className={inter.className}>{children}</body>
      </html>
  );
}
