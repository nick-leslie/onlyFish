"use client"
import {fish, GetFish, randomIntFromInterval} from "@/app/api/fish/route";
import Image from "next/image";
import heartIcon from "../../../../public/Heart.svg"
import IconHeart from "@/app/components/Heart";
import Catch from "@/app/components/catch";
import Release from "@/app/components/Release";
import {useState} from "react";
export async function Profile() {
    let fish = await GetFish();

    if(fish != undefined) {
        return (
            <div className={"profile text-white font-bold flex shadow-2xl bg-blue-400 shadow-blue700 flex-col border-2 object-fill h-full rounded-lg justify-items-center w-1/3 mt-5 ml-8 mr-8 mb-8 "}>
                <div></div>
                <div className={"grid basis-1/2"}>
                    <Image className={"justify-self-center object-fill h-fit rounded-lg w-100 my-5 mx-2"} alt={"sexy sexy fish profile"} width={700} height={900} src={fish.pictrue.url}></Image>
                </div>
                <div className={""}>
                    <div className={"flex flex-row"}>
                        <h1 className={"mx-3 font-bold text-5xl"}>
                            {fish.firstname.name}
                        </h1>
                        <h1 className={"text-5xl font-bold place-self-end"}>
                            {fish.lastname.name}
                        </h1>
                        <h1 className={"mx-5 place-self-end font-bold text-3xl "}>{randomIntFromInterval(20,100)}</h1>
                    </div>
                    <div className={"flex flex-row"}>
                    <h1 className={"mx-3 font-bold  text-3xl place-self-end"}>{fish.firstname.gender == "MALE" ? "man" : "woman"}</h1>
                    </div>
                </div>
                {/*<div className={"grid mt-10 mb-5"}>*/}
                {/*    <div className={"flex flex-row"}>*/}
                {/*        {fish.intrests.map((intrest,index) => {*/}
                {/*            return(*/}
                {/*                <h1 key={intrest + intrest.intrests} className={"flex basis-full"}>{intrest.intrests}</h1>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*</div>*/}
                <h1 className={"mx-5 text-xl my-5 tracking-wide"}>
                    {fish.desciption.description}
                </h1>
                <div className={"flex flex-row items-stretch my-3"}>
                        <div className={"grid mx-2 basis-full justify-items-center"}>
                            <button className={"p-4 h-50 w-50 shadow-xl shadow-indigo-500/40 bg-blue-700 rounded-full delay-100 duration-700 hover:p-8 transition-all"}>
                                <div className={"grid justify-items-center"}>
                                    <Catch  height={70} width={70}></Catch>
                                </div>
                            </button>
                        </div>
                        <div className={"grid mx-2 basis-full justify-items-center"}>
                            <button className={"p-4 h-50 w-50 bg-red-700 shadow-xl shadow-red-500/40 rounded-full delay-100 duration-700 hover:p-8 transition-all"}>
                                <div className={"grid justify-items-center"}>
                                    <Release width={70} height={70}></Release>
                                </div>
                            </button>
                        </div>
                </div>
            </div>
        )
    }
}

export function randomAge() {
    let chunk = randomIntFromInterval(1,10);
    if(chunk < 30) {
        console.log("chunk 1")
        return randomIntFromInterval(18,32)
    } else if (chunk >= 30 && chunk < 60) {
        console.log("chunk 2")
        return randomIntFromInterval(32,47)
    } else if (chunk >= 60 && chunk < 90) {
        console.log("chunk 3")
        return randomIntFromInterval(47,70)
    } else {
        console.log("old")
        return randomIntFromInterval(70,169);
    }
}