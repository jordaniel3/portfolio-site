import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { neueMontreal } from "./ui/fonts";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { ApolloWrapper } from "./ApolloWrapper";

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
      <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full z-[-1000] select-none fixed pointer-events-none "
          particleColor="#FFFFFF"
        />
      <nav className="flex flex-row-reverse z-10 justify-between">
        
          <ul  >
            <li className={`inline-block mx-10 md:text-nav ${neueMontreal} font-normal`}><Link href="/">Home</Link></li>
            <li className={`inline-block mx-10 md:text-nav ${neueMontreal} font-normal`}><Link href="/playground/hoverPickerPage">Playground</Link></li>
          </ul>
          <button><IoMdMenu className="ml-5 text-[3rem]"/></button>
        </nav>
        <ApolloWrapper>
        {children}
        </ApolloWrapper>
        </body>
    </html>
  );
}
