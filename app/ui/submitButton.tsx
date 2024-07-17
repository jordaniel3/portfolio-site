"use client";
import React from "react";
import { motion } from "framer-motion";

export const SubmitButton = () => (
  <button className="bg-[#1F6486] w-full rounded-2xl h-11 overflow-hidden" >
      <motion.a
      className="rounded-[50%] bg-red-500 text-title  flex items-center justify-center "
      initial={{ opacity: 1 , scale:1}}
      whileHover={{ opacity: 1, scale:5,backgroundColor:"#C1DC1E", }}
      transition={{ ease: "easeOut", duration: 0.5, }}>link</motion.a>
  </button>
      
  )
