import {prisma} from "@/app/api/db";
import {randomIntFromInterval} from "@/app/random";
import {fish} from "@/app/api/fish/[id]/route";

export async function GetFish() {
    let firstname = await prisma.firstName.findMany({
    })
    let lastName = await prisma.lastName.findMany({
    })
    let description = await prisma.descriptions.findMany({
    })
    let pictures = await prisma.picture.findMany({
    })
    let finalFish:fish = { } as fish
    if(firstname != undefined && lastName != undefined && description != undefined) {
        finalFish.firstname = firstname[randomIntFromInterval(0,firstname.length-1)];
        finalFish.lastname = lastName[randomIntFromInterval(0,lastName.length-1)];
        finalFish.desciption = description[randomIntFromInterval(0,description.length-1)];
        finalFish.intrests = []
        finalFish.pictrue = pictures[randomIntFromInterval(0,pictures.length-1)];
        return  finalFish
    }
}