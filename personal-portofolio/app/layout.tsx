"use clients";

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Navigation from '@/components/Navigation';
import Home from "@/components/Home";
import Page from "./page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Made by Azfa Radhiyya Hakim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Page />
      </body> 
    </html>
  );
}