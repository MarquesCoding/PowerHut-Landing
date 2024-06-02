// @ts-nocheck
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";


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
        <meta content="https://www.powerhut.pro/logo-white.png" property="og:image"/>
        <meta
            content="Want to play games friends, but don't have a huge budget? We offer the Latest Intel & AMD CPUs at competitive prices."
            property="og:description"/>
        <meta content="summary_large_image" property="twitter:card"/>
        <meta content="https://powerhut.pro" property="twitter:url"/>
        <meta content="PowerHut | Game Hosting" property="twitter:title"/>
        <meta
            content="Want to play games friends, but don't have a huge budget? We offer the Latest Intel & AMD CPUs at competitive prices."
            property="twitter:description"/>
        <meta content="https://www.powerhut.pro/logo-white.png" property="twitter:image"/>
        <meta content="#FF4D14" data-react-helmet="true" name="theme-color"/>
        <body className={inter.className}>{children}</body>
        <script>
            window.dataLayer = window.dataLayer || [];
            {/* @ts-ignore */}
            function gtag(){dataLayer.push(arguments)}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            gtag('js', new Date());

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            gtag('config', 'AW-16590765741');
        </script>
        </html>
    );
}
