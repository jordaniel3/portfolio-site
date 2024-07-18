"use client";
import Image from "next/image";
import { didactGothic, neueMontreal } from "./ui/fonts";
import { TracingBeam } from "./ui/tracingBeam";
import { SparklesCore } from "./ui/sparkles";
import React, { LegacyRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SubmitButton } from "./ui/submitButton";
import { motion } from "framer-motion";
import { Console } from "console";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(true);

  const sendEmail = (e: { preventDefault: () => void }) => {
    console.log('sent')
    e.preventDefault();

    emailjs
      .sendForm("Contact_me", "template_d6i5phr", form.current!, {
        publicKey: "IuKKYZ7ZIO6fkHO8Y",
      })
      .then(
        () => {
          console.log("SUCCESS!", form.current);
          setSubmitted(!submitted)
          
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert('Something went wrong')
        }
      );
  };
  return (
    <main className={` p-10 md:p-1 `}>
      
      <TracingBeam className="px-1 ">
        <div className=" md:snap-start md:ml-6 md:h-screen md:snap-always self-start pt-24">
          <h1
            className={`font-bold text-[3rem]/tight md:text-title/[10rem] ${neueMontreal} `}
          >
            HELLO,
            <br />
            I&apos;M{" "}
            <b className=" bg-clip-text text-transparent bg-gradient-to-r from-[#C1DC1E] from-20% via-[#1EBEAB]   to-[#9AC9E0]">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jordan-akinpelu-270686149/"
              >
                JORDAN
              </a>
            </b>
          </h1>
          <h2 className="leading-tight md:text-subtitle/tight">
            A FRONTEND WEB & MOBILE DEVELOPER
          </h2>
        </div>

        <div className=" flex flex-col pt-[25vh] items-center md:h-screen snap-start snap-always  ">
          <div className=" flex flex-col items-center md:w-[60vw]">
            <p id="About" className="md:text-[4rem]">
              <b>BSc Computing 2.1</b>
            </p>
            <p className={`${didactGothic.className} md:text-[2rem]`}>
              Coventry University 2020-2024
            </p>
            <p
              className={`${didactGothic.className} align-middle text-center md:text-2xl`}
            >
              Enthusiastic software engineer with a deep interest for crafting
              code in C#, Kotlin, and JavaScript. Equipped with a strong
              foundation in computer science, a passion for problem-solving and
              a desire to keep learning. Ready to bring creativity, energy, and
              boundless positivity to any team I work with while delivering
              solutions to the best of my ability.
            </p>
          </div>
        </div>

        <div className="flex z-10 flex-col items-center md:h-screen snap-start snap-always pt-20">
          <h2 id="Skills" className={`md:text-subtitle font-bold `}>Skills</h2>
          <Image alt="skills" src="/skills.svg" width={800} height={500} />
        </div>

        <div className="flex flex-col pt-20 items-center md:h-screen snap-start snap-always">
          <h2 id="Projects" className={`md:text-subtitle font-bold `}>Projects</h2>
        </div>

        <div className="flex flex-col pt-20 items-center snap-start snap-always ">
          <h2 id='Contact'  className={`md:text-subtitle font-bold `}>Get in Touch!</h2>
          {submitted ? (
            <form
              className="flex flex-col w-full md:w-1/2  items-center"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="self-start">Your Name:</label>
              <input
                name="fullName"
                required
                className="w-full  my-2 h-11 bg-transparent border-2 rounded-2xl p-2 border-[#e2ecf04e] "
                placeholder=" Enter Your Name"
              />

              <label className="self-start">Your Email:</label>

              <input
                name="email"
                required
                className="w-full  my-2 h-11 bg-transparent border-2 rounded-2xl p-2 border-[#e2ecf04e]"
                placeholder=" Enter Your Email"
              />

              <label className="self-start">Your Message:</label>
              <textarea
                name="message"
                required
                className="w-full my-2 h-[8rem] bg-transparent border-2 rounded-2xl p-2 border-[#e2ecf04e]"
                placeholder=" Send Me A Message!"
              />

              <motion.input
                className="bg-[#1F6486] w-[90%] rounded-2xl h-11 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="submit"
                
              />
            </form>
          ) : (
            <div className=" flex flex-col items-center mt-5">
              <motion.svg
                className="w-[165px] h-[165px] md:w-[266px] md:h-[266px] mb-3"
              >
                <motion.circle
                  stroke="#eee"
                  strokeWidth={3}
                  fill="transparent"
                  cx={26.59}
                  cy={26.59}
                  r={24}
                  className="transform scale-[3] md:scale-[5]"
                  
                  initial={{ pathLength: 0, opacity: 0, }}
                animate={{ pathLength: 1, opacity: 1, }}
                transition={{
                  pathLength: {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0,
                  },
                  opacity: { duration: 0.01 },
                }}
                />
                <motion.path
                 stroke="#eee"
                 strokeWidth={3}
                 fill="transparent"
                 className="transform scale-[3] md:scale-[5]"
                initial={{ pathLength: 0, opacity: 0, }}
                animate={{ pathLength: 1, opacity: 1, }}
                transition={{
                  pathLength: {
                    delay: 0.8,
                    type: "spring",
                    duration: 1.5,
                    bounce: 0,
                  },
                  opacity: { duration: 0.1 },
                  
                }}
                d="M12.29 26.59l10.98 10.42 17.49-18.23"/>
              </motion.svg>
              <p>Thank you for your message!</p>
            </div>
          )}
        </div>
        <footer className="flex flex-col pt-20 items-center  snap-start snap-always mt-48">
          <p>This website was created using Next.Js, ReactJS and Tailwind</p>
        </footer>
      </TracingBeam>
    </main>
  );
}
