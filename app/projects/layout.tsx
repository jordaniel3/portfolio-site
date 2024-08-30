'use client';

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Tooltip } from 'react-tooltip'

export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
  const bool = useSelector((state: RootState) => state.UI)
    return (
      <div className="flex flex-row " >
        <nav className={`md:w-64   z-[1000] ${bool == true ? "md:flex" :"hidden"} `}>
            <ul className="flex flex-col  h-screen space-y-5">
                <Link href="/projects/hoverPickerPage"><li className="Hover-Picker border-white px-5 border-2 py-4 rounded-xl">Hover Select(Framer Motion)</li></Link>
                <Link href="/projects/RandomAnime"><li className="Random-Anime-element  border-white px-5 border-2 py-4 rounded-xl" >Random Anime Picker(GraphQL)</li></Link>
                
                
            </ul>
        </nav>
        <div className="w-full" >
          {children}
          </div>
          <Tooltip anchorSelect=".Random-Anime-element" place="right">A Random Anime Picker that uses the Anilist's GraphQL API </Tooltip>
          <Tooltip anchorSelect=".Hover-Picker" place="right">A Hover selector component animated with framer motion </Tooltip>
      </div>
    )
  }

  