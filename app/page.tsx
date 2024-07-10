import Image from "next/image";
import { didactGothic, neueMontreal } from "./ui/fonts";
import { TracingBeam } from "./ui/tracingBeam";
import { SparklesCore } from "./ui/sparkles";

export default function Home() {
  return (
    <main className={` p-10 md:p-1 `}>
      <div className="w-full fixed inset-0 h-full">
          <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        </div>
      <TracingBeam className="px-1">
        
      

      <div className=" md:snap-start ml-6 md:h-screen md:snap-always self-start pt-24">
        <h1 className={`font-bold text-[3rem]/tight md:text-title/[10rem] ${neueMontreal} `}>HELLO,<br/>
        I&apos;M <b className=" bg-clip-text text-transparent bg-gradient-to-r from-[#C1DC1E] from-20% via-[#1EBEAB]   to-[#9AC9E0]">JORDAN</b></h1>
      <h2 className="leading-tight md:text-subtitle/tight">A FRONTEND WEB & MOBILE DEVELOPER</h2>
      </div>


      <div className=" flex flex-col pt-[25vh] items-center md:h-screen snap-start snap-always  ">
        <div className=" flex flex-col items-center w-[60vw]">
          <p className="md:text-[4rem]"><b>BSc Computing 2.1</b></p>
        <p className={`${didactGothic.className} md:text-[2rem]`}>Coventry University  2020-2024</p>
        <p className={`${didactGothic.className} align-middle text-center md:text-2xl`}>Enthusiastic software engineer with a deep interest for crafting code in C#, Kotlin, and JavaScript. Equipped with a  strong foundation in computer science, a passion for problem-solving and a desire to keep learning. Ready to bring  creativity, energy, and boundless positivity to any team I work with while delivering solutions to the best of my ability.</p>
        </div>
        
      </div>
      <div className="flex flex-col items-center md:h-screen snap-start snap-always pt-20">
        <h2 className={`md:text-subtitle font-bold `}>Skills</h2>
      <Image alt='skills' src="/skills.svg" width={800} height={500}/>
      </div>


      <div className="flex flex-col pt-20 items-center md:h-screen snap-start snap-always">
        <h2 className={`md:text-subtitle font-bold `}>Projects</h2>
      </div>


      <div className="flex flex-col pt-20 items-center md:h-screen snap-start snap-always my-2 h-11">
        <h2 className={`md:text-subtitle font-bold `}>Get in Touch!</h2>
        <form className="flex flex-col w-full md:w-1/3  items-center">
        <label className="self-start">
          Your Name:</label>
          <input className="w-full my-2 h-11 bg-transparent border-2 rounded-2xl p-2 border-[#e2ecf04e] " placeholder=" Enter Your Name"/>
        
          
          <label className="self-start">
            Your Email:
            </label>
            <input className="w-full  my-2 h-11 bg-transparent border-2 rounded-2xl p-2 border-[#e2ecf04e]" placeholder=" Enter Your Email"/>
          
          
          <label className="self-start">
            Your Message:
            </label>
            <textarea className="w-full my-2 h-[8rem] bg-transparent border-2 rounded-2xl p-2 border-[#e2ecf04e]" placeholder=" Send Me A Message!"/>
          
          
          <input className="bg-[#1F6486] md:w-1/3 rounded-2xl " type="submit"/>
        </form>
      </div>
      
      </TracingBeam>
    </main>
  );
}
