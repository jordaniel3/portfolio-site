'use client';

import Link from "next/link";

export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
  
    return (
      <div className="flex flex-row " >
        <nav className=" md:w-64 ">
            <ul className="flex flex-col  h-screen space-y-5">
                <Link href="/playground/hoverPickerPage"><li className=" border-white px-5 border-2 py-4 rounded-xl">Hover Select(Framer Motion)</li></Link>
                <Link href="/playground/RandomAnime"><li className=" border-white px-5 border-2 py-4 rounded-xl">Random Anime Picker(GraphQL)</li></Link>
                
                
            </ul>
        </nav>
        <div className="w-full" >{children}</div>
        
      </div>
    )
  }

  