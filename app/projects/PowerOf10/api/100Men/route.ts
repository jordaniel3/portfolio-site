import { NextRequest, NextResponse } from "next/server";
import { fetchAll, fetchPagination } from "./dbfetch";


export async function GET(req: NextRequest) {
    const {searchParams} = req.nextUrl
    const page = searchParams.get('page')
    var data:any = {}
    if(page){
        data = await fetchPagination(page) 
    }else{
        data = await fetchAll()
    }
    
    return NextResponse.json({
        data:data.rows
    })
}