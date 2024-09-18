
"use client"
import { IoIosShuffle } from "react-icons/io";
import { gql, useQuery } from '@apollo/client';
import { ApolloWrapper } from "@/app/ApolloWrapper";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import Image from "next/image";
import Markdown from "react-markdown";


const query = gql`query($page: Int, $perPage: Int, $isAdult: Boolean,$asHtml: Boolean,$type: MediaType)  {
  Page(page: $page, perPage: $perPage) {
    media(isAdult: $isAdult, type: $type, ) {
      title {
        native
        userPreferred
      }
      genres
      meanScore
      description(asHtml: $asHtml)
      coverImage {
        extraLarge
      }
    }
  }
}`
function getRandomArbitrary(min: number, max: number) {
    return Math.ceil(Math.random() * (max - min) + min);
    }

export default function RandomAnime(){
    let [randomNum,changeRandomNum] = useState(getRandomArbitrary(0,18000))
    const { loading, error, data } = useQuery(query,{variables:{page:randomNum,perPage:1,isAdult:false,asHtml:false,type: "ANIME"}});
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message} (likely overfetching try again later)</p>;
    function randomize(){
      changeRandomNum(getRandomArbitrary(0,18000))

    }

    return(
        <main className=" flex flex-col md:flex-row mx-5   ">
            <Image alt="Cover Image" src={data.Page.media[0].coverImage.extraLarge} width={100} height={500} className="self-center md:self-start w-auto  min-w-[250px] max-w-[250px] rounded-3xl md:min-w-[500px] md:max-w-[500px]"/>
            
            <div className="flex flex-col ml-4 md:w-1/2 justify-between">
                <div>
                <h1 className="text-3xl md:text-subtitle font-bold">{data.Page.media[0].title.userPreferred}</h1>
                <h2 className="md:text-3xl">{data.Page.media[0].title.native}</h2>
                <div className="flex flex-wrap gap-2">
                    {data.Page.media[0].genres.map((genre: string)=>
                    <p key={genre} className="bg-slate-400 p-2 rounded-3xl  text-center">{genre}</p>
                    )}
                </div>
                </div>
                {data.Page.media[0].description ==undefined?<p>No description to show</p>:<div
                    
                    dangerouslySetInnerHTML={{__html: data.Page.media[0].description}}
                />}
                <p className="text-xl md:text-subtitle">Mean Score: {data.Page.media[0].meanScore}%</p>
                <button onClick={randomize} className="bg-slate-300 w-72 p-2 text-black justify-center rounded-3xl flex flex-row"><IoIosShuffle  className="self-center  text-subtitle"/><span className="  text-4xl self-center">Randomize</span></button>
            </div>



        
        </main>
        
    )
}