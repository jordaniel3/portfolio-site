import { sql } from "@vercel/postgres";

export async function fetchAll(){
    const query = await sql`SELECT * FROM "200_women"`
    console.log(query.rowCount)
    return query


}
export async function fetchPagination(page:string){
    const query = await sql`SELECT * FROM "200_women" LIMIT 10 OFFSET ${parseInt(page)*10}`
    return query


}