import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Intercom from "@intercom/messenger-js-sdk";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PowerHut | Game Hosting",
  description: "A Game Hosting Company that cares about raw performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <meta content="https://powerhut.pro" property="og:url"/>
        <meta content="website" property="og:type"/>
        <meta content="PowerHut.pro" property="og:site_name"/>
        <meta content="PowerHut | Game Hosting" property="og:title"/>
        <meta content="en" property="og:locale"/>
        <meta
            content="Want to play games friends, but don't have a huge budget? We offer the Latest Intel & AMD CPUs at competitive prices."
            property="og:description"/>
        <meta content="summary_large_image" property="twitter:card"/>
        <meta content="https://powerhut.pro" property="twitter:url"/>
        <meta content="PowerHut | Game Hosting" property="twitter:title"/>
        <meta
            content="Want to play games friends, but don't have a huge budget? We offer the Latest Intel & AMD CPUs at competitive prices."
            property="twitter:description"/>
        <meta content="#FF4D14" data-react-helmet="true" name="theme-color"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
              rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
