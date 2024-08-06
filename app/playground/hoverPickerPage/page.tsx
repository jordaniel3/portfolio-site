'use client'
import { motion } from "framer-motion";
import { MouseEventHandler, useState } from "react";

 function HoverPickerItem({
  imageSrc,
  className,
  objectPosition,
  onHover
}: {
  imageSrc: string;
  className?: string;
  objectPosition: string;
  onHover: MouseEventHandler<HTMLDivElement> | undefined
}) {
  return (
    <motion.div
      className={`overflow-hidden blur-[4px] relative grow h-full float-left ${className} basis-1/2 grayscale-[1] z-0`}
      whileHover={{filter:"blur(0)",overflow:"visible",zIndex:1}}
      onMouseEnter={onHover}
    >
      <motion.img
        className=" h-full  object-cover inline"
        src={imageSrc}
        alt="Photo"
        style={{ objectPosition: objectPosition }}
        whileHover={{scale:1.1}}
        
      />
      
    </motion.div>
  );
}

function HoverPicker({ children }: { children: React.ReactNode }) {

    
  return (
  
  <div className="h-full flex">
    {children}
    
    </div>

  )
}

export default function HoverPickerPage() {
    const [hovering,setHovering]=useState("Hover an Image")
  return (
    <main className="  ">
        
      <h1>Hover Picker</h1>
      <div className="h-screen">
        <HoverPicker>
          <HoverPickerItem
            imageSrc="/hoverPicker/bmx.jpeg"
            objectPosition="20% 20%"
            onHover={()=>setHovering("BMX")}
          />
          <HoverPickerItem
            imageSrc="/hoverPicker/skate.jpeg"
            objectPosition="40% 20%"
            onHover={()=>setHovering("Skate")}
          />
          <HoverPickerItem
            imageSrc="/hoverPicker/scooter.jpeg"
            objectPosition="60% 20%"
            onHover={()=>setHovering("Scooter")}
          />
          <HoverPickerItem
            imageSrc="/hoverPicker/snowboarding.jpeg"
            objectPosition="20% 20%"
            onHover={()=>setHovering("Snowboarding")}
          />
          <HoverPickerItem
            imageSrc="/hoverPicker/surf.jpeg"
            objectPosition="50% 20%"
            onHover={()=>setHovering("Surfing")}
          />
        </HoverPicker>
      </div>

    </main>
  );
}
