"use server"
import { DOMWindow } from "jsdom";
import { Athlete } from "./Models/Athlete";
import { db } from '@vercel/postgres';
import {JSDOM} from 'jsdom'




export async function getHTML(event:string, group:string, sex:string, year:string, area:string = "all regions") {
    
    let html;
    let gender = (sex === "Men") ? "M" : "W"; // Translates the gender selected text into power of 10 variable
    let age = (() => {
        switch (group) {
            case "Under 20": return "U20";
            case "Under 17": return "U17";
            case "Under 15": return "U15";
            case "Under 13": return "U13";
            default: return "All";
        }
    })(); // Translates the age selected text into power of 10 variable

    let region = (() => {
        switch (area) {
            case "East": return "66";
            case "East Midlands": return "65";
            case "England": return "91";
            case "London": return "67";
            case "North East": return "61";
            case "N Ireland": return "94";
            case "North West": return "63";
            case "Scotland": return "92";
            case "South East": return "68";
            case "South West": return "69";
            case "Wales": return "93";
            case "West Midlands": return "64";
            case "Yorkshire": return "62";
            default: return null;
        }
    })(); // Translates the region selected text into power of 10 variable

    html = (region !== null) ? 
        `https://www.thepowerof10.info/rankings/rankinglist.aspx?event=${event}&agegroup=${age}&sex=${gender}&year=${year}&areaid=${region}` : 
        `https://www.thepowerof10.info/rankings/rankinglist.aspx?event=${event}&agegroup=${age}&sex=${gender}&year=${year}`;

    const response = await fetch(html);
    const outerhtml = await JSDOM.fromURL(html).then(function(dom:JSDOM){
        return(dom.window.document.querySelector('body'))})
    
    return [outerhtml,
        {
            gender:gender,
            age:age,
            event:event,
            season:year
        }];
}

export async function getAthletes (html: any[]){
    let records = html[0].querySelectorAll(".rlr,.rlra")
    let athleteList:Athlete[]= []
    for (let record of records){
        if(record.childNodes[6].firstChild?.textContent){
            let name:string[] = record.childNodes[6].firstChild?.textContent.split(" ")
            athleteList.push(new Athlete(record.childNodes[0].textContent!,name[0],name[1],record.childNodes[4].textContent!,
                record.childNodes[10].textContent!,record.childNodes[1].textContent!,
                record.childNodes[11].textContent!,record.childNodes[12].textContent!,
                record.childNodes[9].textContent!
            ))

        }
    }
    
    return [athleteList,html[1]]
}

export async function saveAthletesToDB(){
    let result = await getHTML("100","","woMen","2023","")
    let athleteList = await getAthletes(result)
    const client = await db.connect();
    const insertedAthletes = await Promise.all(
            athleteList[0].map(
              (athlete:Athlete) => client.sql`
                INSERT INTO "100_women" (rank,season,first_name,last_name,gender,age_group,performance,
                pb,event,coach,club,perf_date)
                VALUES (${athlete.rank},${athleteList[1].season}, ${athlete.firstName}, ${athlete.lastName}, ${athleteList[1].gender}, ${athleteList[1].age}, ${athlete.sb}, ${athlete.pb},
                 ${athleteList[1].event}, ${athlete.coach}, ${athlete.club}, ${athlete.date})
              `,
            ),
          );
          return insertedAthletes
}