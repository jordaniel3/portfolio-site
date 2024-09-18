import { sql } from "@vercel/postgres";

export async function fetchAll(){
    const query = await sql`SELECT * FROM "100_men"`
    return query


}

export async function fetchPagination(page:string){
    const query = await sql`SELECT * FROM "100_men" LIMIT 10 OFFSET ${parseInt(page)*10}`
    return query


}