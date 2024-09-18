"use client"

import { useEffect, useState } from "react"
import { QueryResult } from "@vercel/postgres"


export default function PowerOf10(){
    var [endpoint,changeEndpoint] = useState("Men's 100 Metres 2023 Rankings")
    var [data,changeData] = useState<any[]>()
    var [page,setPage] = useState(0)
    var [loading,setLoading] = useState(false)


    useEffect(()=>{
        setLoading(true)
        async function getData(){
            let response 
        switch(endpoint){
            case "Men's 200 Metres 2023 Rankings":
                response = await fetch(`http://localhost:3000/projects/PowerOf10/api/200Men?page=${page}`)
                const jsonM200 = await response.json()
                changeData(jsonM200.data.rows)
                setLoading(false)
            break;
            case "Women's 100 Metres 2023 Rankings":
                response = await fetch(`http://localhost:3000/projects/PowerOf10/api/100Women?page=${page}`)
                const jsonW100 = await response.json()
                changeData(jsonW100.data.rows)
                setLoading(false)
            break;
            case "Women's 200 Metres 2023 Rankings":
                response = await fetch(`http://localhost:3000/projects/PowerOf10/api/200Women?page=${page}`)
                const jsonW200 = await response.json()
                changeData(jsonW200.data.rows)
                setLoading(false)
            break;
            default:"Men's 100 Metres 2023 Rankings"
                response = await fetch(`http://localhost:3000/projects/PowerOf10/api/100Men?page=${page}`)
                const jsonM100 = await response.json()
                changeData(jsonM100.data.rows)
                setLoading(false)
        }}
        getData()
    },[endpoint,page])
    return(
        <main className="flex flex-col mx-[200px] mb-20">
            
            <p>Raw endpoints (JSON)</p>
            <a href="PowerOf10/api/100Men" className="underline">/api/100Men </a>
            <a href="PowerOf10/api/200Men" className="underline">/api/200Men</a>
            <a href="PowerOf10/api/100Women" className="underline">/api/100Women</a>
            <a href="PowerOf10/api/200Women" className="underline">/api/200Women</a>

            <h2 className=" text-2xl mt-10">Pick an Endpoint</h2>
            <div>
            <button onClick={()=>changeEndpoint("Men's 100 Metres 2023 Rankings")} className="m-5 bg-lime-500 p-2">Men&apos;s 100m 2023  </button>
            <button onClick={()=>changeEndpoint("Men's 200 Metres 2023 Rankings")} className="m-5 bg-lime-500 p-2">Men&apos;s 200m 2023 </button>
            <button onClick={()=>changeEndpoint("Women's 100 Metres 2023 Rankings")} className="m-5 bg-lime-500 p-2">Women&apos;s 100m 2023  </button>
            <button onClick={()=>changeEndpoint("Women's 200 Metres 2023 Rankings")} className="m-5 bg-lime-500 p-2">Women&apos;s 200m 2023 </button>
                

            </div>
            <h1>{endpoint}</h1>
            {loading?<p>Loading...</p>:<div>
             {data?.map((athlete,id)=>
                <Athlete athlete={athlete} key={id}/>)}    
            </div>}
            <div className="flex flex-row self-center mt-10">
                <button className="p-2 bg-lime-500 w-50 h-50 mx-5" onClick={()=>{
                    if(page>0){
                        setPage(page--)
                    }
                }}>Prev</button>
                <button className="p-2 bg-lime-500 w-50 h-50 mx-5">{page+1}</button>
                <button className="p-2 bg-lime-500 w-50 h-50 mx-5" onClick={()=>{
                    if(page<100){
                        setPage(page++)
                    }
                }}>Next</button>
            </div>
            
            
        </main>
    )
}
function Athlete({athlete}:{athlete:any}){
    return(
        <div className={`w-full flex flex-row  outline-2 outline-gray-100 outline -outline-offset-1 p-5 `}>
            <div className="flex flex-col w-1/4">
                <p>Rank: {athlete.rank}</p>
                <p>Personal Best: {athlete.pb}</p>

            </div>
            <div className="flex flex-col w-1/2 place-items-center">
                <p>Name: {athlete.firstname} {athlete.lastname}</p>
                <p>Club: {athlete.club}</p>
                <p>Coach: {athlete.coach}</p>

            </div>
            <div className="flex flex-col w-1/4 place-items-end">
                <p>Perf: {athlete.performance}</p>
                <p>Date: {athlete.perf_date}</p>

            </div>
        </div>
    )
}