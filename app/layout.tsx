"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { neueMontreal } from "./ui/fonts";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { ApolloWrapper } from "./ApolloWrapper";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {RootState, store} from './redux/store';
import { Providers } from "./redux/provider";
import uiSlice, { toggleProjectMenu } from "./redux/uiSlice";
const inter = Inter({ subsets: ["latin"] });



 const metadata: Metadata = {
  title: "Jordan Akinpelu",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  const path:string = usePathname()
  
  return (
    <html lang="en" className="">
      <Providers>
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
            <li className={`inline-block mx-10 md:text-nav ${neueMontreal} font-normal`}><Link href="/projects/hoverPickerPage">Projects</Link></li>
          </ul>
          {path.includes("/projects/")? <MenuButton />:null}
          
        </nav>
        
        <ApolloWrapper>
        {children}
        </ApolloWrapper>
       
        </body>
         </Providers>
    </html>
  );
}

function MenuButton(){
  
  const dispatch = useDispatch()
  function toggleMenu(){
    dispatch(toggleProjectMenu())
  }
  return(
    <button onClick={toggleMenu}><IoMdMenu className="ml-5 text-[2rem] md:text-[3rem]"/></button>
  )
}