import Image from "next/image";
import { didactGothic, neueMontreal } from "./ui/fonts";

export default function Home() {
  return (
    <main className={`   flex-col items-center  snap-y snap-mandatory h-screen w-screen overflow-y-scroll  justify-between p-10 xl:p-24 `}>


      <div className=" snap-start  h-screen snap-always self-start pt-24">
        <h1 className={`font-bold text-[3rem]/tight xl:text-title/[10rem] ${neueMontreal} `}>HELLO,<br/>
        I&apos;M <b className=" bg-clip-text   snap-always text-transparent bg-gradient-to-r from-[#C1DC1E] from-20% via-[#1EBEAB]   to-[#9AC9E0]">JORDAN</b></h1>
      <h2 className="leading-tight xl:text-subtitle/tight">A FRONTEND WEB & MOBILE DEVELOPER</h2>
      </div>


      <div className=" flex flex-col pt-[25vh] items-center h-screen snap-start snap-always  ">
        <div className=" flex flex-col items-center w-[75vw]">
          <p className="text-[4rem]"><b>BSc Computing 2.1</b></p>
        <p className={`${didactGothic.className} text-[2rem]`}>Coventry University  2020-2024</p>
        <p className={`${didactGothic.className} align-middle text-center text-2xl`}>Enthusiastic software engineer with a deep interest for crafting code in C#, Kotlin, and JavaScript. Equipped with a  strong foundation in computer science, a passion for problem-solving and a desire to keep learning. Ready to bring  creativity, energy, and boundless positivity to any team I work with while delivering solutions to the best of my ability.</p>
        </div>
        
      </div>
      <div className="flex flex-col items-center h-screen snap-start snap-always pt-20">
        <h2 className={`text-subtitle font-bold `}>Skills</h2>
      <Image alt='skills' src="/skills.svg" width={800} height={500}/>
      </div>


      <div className="flex flex-col pt-20 items-center h-screen snap-start snap-always">
        <h2 className={`text-subtitle font-bold `}>Projects</h2>
      </div>


      <div className="snap-start snap-always h-screen">
        <h2 className={`text-subtitle font-bold `}>Get in Touch!</h2>
      </div>
      
      
    </main>
  );
}
