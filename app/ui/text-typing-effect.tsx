"use client";
import { useEffect, useState } from "react";
import { animate, delay, motion, stagger, useAnimate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "../utils/cn";
import RedoAnimText from "./RetypeText";
import { neueMontreal } from "./fonts";

const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };
  export function CursorBlinker() {
    return (
      <motion.div
        variants={cursorVariants}
        animate="blinking"
        className="inline-block w-4 h-4 md:h-[2rem] translate-y-0 bg-slate-50"
      />
    );
  }
export function HeaderType({words,delay=0,className}: {words: string,delay?:number,className?:string}){
  const typeText:string = words
  const count = useMotionValue(0)
  const rounded = useTransform(count,(latest: number)=>Math.round(latest))
  const displayText = useTransform(rounded, (latest)=>typeText.slice(0,latest))

  useEffect(() => {
    const controls = animate(count, typeText.length, {
      type: "tween",
      duration: 0.7,
      ease: "easeInOut",
      delay:delay
    });
    return controls.stop;
  }, []);


  return(<span className="">
    <motion.span className={className}>{displayText}</motion.span>
  </span>
);
}

export default function TypingText() {
  const [isDone,setIsDone] = useState(false)
  const [isDone2,setIsDone2] = useState(false)
  setTimeout(() => {
    setIsDone(true);
            }, 1000);
  setTimeout(() => {
    setIsDone2(true);
            }, 2500);
    
  return (
    <span className="inline ">
    <HeaderType className={`font-bold  text-[3rem]/tight md:text-title/[10rem] ${neueMontreal} `} words="HELLO,"/>{isDone? <br/> : null}
    <HeaderType className={`font-bold text-[3rem]/tight md:text-title/[10rem] ${neueMontreal} `} words="I'M " delay={1}/>
    <b className=" inline-block bg-clip-text  text-transparent bg-gradient-to-r from-[#C1DC1E] from-20% via-[#1EBEAB]   to-[#9AC9E0]">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/jordan-akinpelu-270686149/"
      >
        <HeaderType className={`font-bold text-[3rem]/tight md:text-title/[10rem] ${neueMontreal} `} words="JORDAN" delay={1.5}/>
      </a>
    </b>{isDone2? <span><br/> <RedoAnimText/></span>: null}
    
    <CursorBlinker />

    
    </span>
    
  );
}