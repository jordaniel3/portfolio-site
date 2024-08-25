import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { neueMontreal } from "./ui/fonts";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordan Akinpelu",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      
      <body className={`${inter.className} bg-[#030708] text-[#eee]  ` }>
        
        {children}
        
        </body>
    </html>
  );
}
