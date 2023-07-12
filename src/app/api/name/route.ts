import {NextRequest, NextResponse} from "next/server";
import {genderEnum} from "@prisma/client";
import {prisma} from "@/app/api/db";

type nameRequest = {
    isFirst:boolean,
    names:string[],
    gender?:genderEnum
}

export async function POST(request:NextRequest) {

    let names:nameRequest = await request.json()
    if(names.isFirst) {
        if(names.gender != undefined) {
            let gender = names.gender
            let namesCreation = await prisma.firstName.createMany({
                data: names.names.map((name) => {
                    return {
                        name:name,
                        gender:gender
                    }
                })
            })
            return NextResponse.json(namesCreation)
        }
    } else {
        console.log("test")
        console.log(names.names)
        let namesCreation = await prisma.lastName.createMany({
            data: names.names.map((name) => {
                return {
                    name:name
                }
            })
        })
        return NextResponse.json(namesCreation)
    }
    return NextResponse.json("demo")
}