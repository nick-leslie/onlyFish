import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";

type pictureRequest = {
    urls: string[]
}


export async function POST(request:NextRequest) {
    let requestData:pictureRequest = await  request.json()
    await prisma.picture.createMany({
        data:requestData.urls.map((url) => {
            return {
                url:url
            }
        })
    })
    return NextResponse.json("added pictures")
}