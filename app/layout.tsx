import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { neueMontreal } from "./ui/fonts";
import { SparklesCore } from "./ui/sparkles";

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
    <html lang="en" >
      
      <body className={`${inter.className} bg-[#030708] text-[#eee]` }>
      <div className="w-full select-none fixed top-8 z-0 h-full ">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full z-0 select-none"
          particleColor="#FFFFFF"
        />
      </div>
      <nav className="flex flex-row-reverse z-10">
          <ul  >
            <li className={`inline-block mx-10 md:text-nav ${neueMontreal} font-normal`}><a href="#About">About</a></li>
            <li className={`inline-block mx-10 md:text-nav ${neueMontreal} font-normal`}><a href="#Skills">Skills</a></li>
            <li className={`inline-block mx-10 md:text-nav ${neueMontreal} font-normal`}><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
        {children}
        
        </body>
    </html>
  );
}
