import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";
import {descriptions, firstName, lastName, intrests, picture} from ".prisma/client";

export type fish = {
    firstname: firstName,
    lastname: lastName
    desciption:descriptions
    pictrue: picture
    intrests:intrests[]
}

export async function GET(request:NextRequest) {
    return NextResponse.json(GetFish)
}

export async function GetFish() {
    let firstname = await prisma.firstName.findMany({
    })
    let lastName = await prisma.lastName.findMany({
    })
    let description = await prisma.descriptions.findMany({
    })
    let intrests = await prisma.intrests.findMany({
    })
    let pictures = await prisma.picture.findMany({
    })
    let finalFish:fish = { } as fish
    if(firstname != undefined && lastName != undefined && description != undefined) {
        finalFish.firstname = firstname[randomIntFromInterval(0,firstname.length-1)];
        finalFish.lastname = lastName[randomIntFromInterval(0,lastName.length-1)];
        finalFish.desciption = description[randomIntFromInterval(0,description.length-1)];
        finalFish.intrests = randomIntrests(intrests)
        finalFish.pictrue = pictures[randomIntFromInterval(0,pictures.length-1)];
        return  finalFish
    }
}

function randomIntrests(intrests:intrests[]) {
    let retVal:intrests[] = []
    for (let i = 0; i < 5; i++) {
        retVal.push(intrests[randomIntFromInterval(0,intrests.length-1)])
    }
    return retVal
}


export function randomIntFromInterval(min:number, max:number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}