"use client";
import Image from "next/image";
import { didactGothic, neueMontreal } from "./ui/fonts";
import { TracingBeam } from "./ui/tracingBeam";
import { SparklesCore } from "./ui/sparkles";
import React, { LegacyRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import { Console } from "console";
import TypingText from "./ui/text-typing-effect";
import RedoAnimText from "./ui/RetypeText";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(true)
  const content = [
    {
      title: "Athletics Ranking App (C# and Kotlin versions)",
      description:
      <a target="_blank" href="https://github.coventry.ac.uk/akinpelud/DissertationAPP/tree/main">
      <ul>
      <li>• Developed using .NET MAUI for C# version and Jetpack Compose for Kotlin Version</li>
      <li>• UI built using XAML with data bindings(C# Version)</li>
      <li>• Navigated DOM tree to parse HTML elements and present them within the app.</li>
      <li>• Leveraged Firebase authentication to handle user log in flow.</li>
      <li>• Used Firebase Cloud Storage to save user resources.</li>
      <li>• Created following the MVVM software architecture.</li>
      <li>• Handled athlete data and presented them as graphs using additional libraries.</li>
      </ul>
      </a>
      ,
      content: (<a target="_blank" href="https://github.coventry.ac.uk/akinpelud/DissertationAPP/tree/main">
        <Image
            src="/po10app.png"
            width={300}
            height={300}
            className="h-full w-full absolute object-contain"
            alt="linear board demo"
          /></a>
      ),
    },
    {
      title: "Home Business Locator App (React Native)",
      description:
      <ul>
      <li>• Developed using Javascript and Typescript</li>
      <li>• UI prototype created using Figma</li>
      <li>• Firebase utilised to handle NoSQL database, cloud storage and authentication</li>
      <li>• Redux used to handle application state and UI changes</li>
      <li>• Github used for version control</li>
      <li>• Built using Expo Framework</li>
      </ul>,
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/bfapp.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "RESTful API",
      description:
      <a target="_blank" href="https://github.com/jordaniel3/WEB-API/blob/main/README.md">
      <ul>
      <li>• Full OAS documentaion</li>
      <li>• Data stored in a SQL database</li>
      <li>• Built using Koa for nodejs</li>
      <li>• Implemented E-tags, conditional headers, caching</li>
      <li>• JWT Token authentication with security logging</li>
      <li>• Tests written using Supertest</li>
      <li>• Third Party Api Integration</li>
      </ul>
      </a>,
      content: (
        <a target="_blank" href="https://github.com/jordaniel3/WEB-API/blob/main/README.md">
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Web API Github link + demo
        </div>
        </a>
        
      ),
    }
  ];

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
    <main className={` p-10 md:p-1 overflow-hidden h-auto absolute m-auto left-0 right-0 `}>
     
      
      <Analytics/>
      <SpeedInsights/>
      <Image alt="logo" src="/logo.svg" className="absolute right-[-5vw] 2xl:right-[5vw]  opacity-70" width={1000} height={1000} />
      
      <TracingBeam className="px-1 pt-2">
        <motion.div className=" md:snap-start md:ml-6 md:h-screen md:snap-always self-start pt-24 ">
          <TypingText/><br/>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            delay:3.5
          }} >
          <a target="_blank" href="https://github.com/jordaniel3">
          <Image alt="github logo" src="/github.png" width={50} height={50} className="inline mr-2"/>
          </a>
          <a target="_blank" href="https://github.com/jordaniel3/WEB-API/blob/main/README.md">
          <Image alt="linkedin logo" src="/linkedin.png" width={60} height={60} className="inline" />  </a>
          </motion.div>
          
        </motion.div>

        <div className="flex flex-col pt-[25vh] items-center md:h-screen snap-start snap-always">
        <h2 id="About" className={`text-2xl md:text-subtitle font-bold mb-10`}>&#47;&#47;About Me</h2>
        <div className=" md:grid md:grid-cols-2  gap-6 ">
          <Image alt="Jordan in Chamonix" src="/mountains.jpeg" width={800} height={500} />
          <div className=" flex flex-col items-center  justify-center">
            
            <p
              className={`${neueMontreal.className}    md:text-2xl `}
            >
              Hello,  I’m Jordan! A software developer and technical analyst from London, specialising in JavaScript and C# (but I do have experience with other languages too!). I’m extremely passionate about what I do and have tons of fun doing it. As an avid learner, using the resources around me to quickly grasp new concepts is second nature to me and motivates to keep improving.
            </p>
            
          </div>
          
        </div>
        </div>
        <div className="flex z-10 flex-col items-center md:h-screen snap-start snap-always pt-20">
          <h2 id="Skills" className={`text-2xl md:text-subtitle font-bold mb-10 `}>&#47;&#47;Skills</h2>
          <Image alt="Jordan's skills" src="/skills.svg" width={800} height={500} />
        </div>

        <div className="flex flex-col pt-20 items-center md:h-screen snap-start snap-always">
          <h2 id="Projects" className={`text-2xl md:text-subtitle font-bold mb-10`}>&#47;&#47;Projects</h2>
          <StickyScroll content={content}/>
        </div>

        <div className="flex flex-col pt-20 items-center snap-start snap-always ">
          <h2 id='Contact'  className={`text-2xl md:text-subtitle font-bold mb-10`}>&#47;&#47;Get in Touch!</h2>
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
