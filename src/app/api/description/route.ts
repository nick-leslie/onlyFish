import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";

type intrestRequest = {
    descriptions: string[]
}


export async function POST(request:NextRequest) {
    let requestData:intrestRequest = await  request.json()
    await prisma.descriptions.createMany({
        data:requestData.descriptions.map((descriptions) => {
            return {
                description:descriptions
            }
        })
    })
    return NextResponse.json("added descriptions")
}