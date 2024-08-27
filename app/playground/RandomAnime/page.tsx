
"use client"
import { IoIosShuffle } from "react-icons/io";
import { gql, useQuery } from '@apollo/client';
import { ApolloWrapper } from "@/app/ApolloWrapper";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";


const query = gql`query($page: Int, $perPage: Int, $isAdult: Boolean,$asHtml: Boolean)  {
  Page(page: $page, perPage: $perPage) {
    media(isAdult: $isAdult) {
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
    let [randomNum,useRandomNum] = useState(getRandomArbitrary(0,90000))
    const { loading, error, data } = useQuery(query,{variables:{page:randomNum,perPage:1,isAdult:false,asHtml:false}});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return(
        <main className=" flex flex-row mx-5  ">
            <img alt="Cover Image" src={data.Page.media[0].coverImage.extraLarge} width={300} height={100} className="self-start w-auto rounded-3xl md:min-w-[500px] max-w-[500px]"/>
            <div className="flex flex-col ml-4 w-1/2 justify-between">
                <div>
                <h1 className="text-subtitle font-bold">{data.Page.media[0].title.userPreferred}</h1>
                <h2 className="text-3xl">{data.Page.media[0].title.native}</h2>
                <div className="flex flex-row gap-2">
                    {data.Page.media[0].genres.map((genre: string)=>
                    <p className="bg-slate-400 p-2 rounded-3xl w-[120px] text-center">{genre}</p>
                    )}
                </div>
                </div>
                <p className="mt-16">{data.Page.media[0].description}</p>
                <p className="text-subtitle">Mean Score: {data.Page.media[0].meanScore}%</p>
                <button onClick={()=>useRandomNum(getRandomArbitrary(0,90000))} className="bg-slate-300 w-72 p-2 text-black justify-center rounded-3xl flex flex-row"><IoIosShuffle  className="self-center  text-subtitle"/><span className="  text-4xl self-center">Randomize</span></button>
            </div>



        
        </main>
        
    )
}