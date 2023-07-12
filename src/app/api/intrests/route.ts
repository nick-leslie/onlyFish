import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";

type intrestRequest = {
    intrests: string[]
}

export async function POST(request:NextRequest) {
    let requestData:intrestRequest = await  request.json()
    await prisma.intrests.createMany({
        data:requestData.intrests.map((intrest) => {
            return {
                intrests:intrest
            }
        })
    })
    return NextResponse.json("added intrests")
}