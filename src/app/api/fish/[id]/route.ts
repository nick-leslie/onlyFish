import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";
import {descriptions, firstName, lastName, intrests, picture} from ".prisma/client";
import {randomIntFromInterval} from "@/app/random";
import {GetFish} from "@/app/api/fish/[id]/GetFish";
export const fetchCache = 'force-no-store';
export type fish = {
    firstname: firstName,
    lastname: lastName
    desciption:descriptions
    pictrue: picture
    intrests:intrests[]
}

export async function GET(request:NextRequest) {
    console.log("got fish")
    let fish = await GetFish();
    if(fish != undefined) {
        return NextResponse.json(fish)
    }
}



function randomIntrests(intrests:intrests[]) {
    let retVal:intrests[] = []
    for (let i = 0; i < 5; i++) {
        retVal.push(intrests[randomIntFromInterval(0,intrests.length-1)])
    }
    return retVal
}


