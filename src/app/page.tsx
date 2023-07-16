import Image from 'next/image'
import {Suspense} from "react";
import {ProfileLoading} from "@/app/components/profile/ProfileLoading";
import {Profile} from "@/app/components/profile/Profile";
import ProfileLoader from "@/app/components/profile/profileLoader";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={"grid grid-cols-1 justify-items-center"}>
        <div className={"flex flex-row"}>
            <h1 className={"text-5xl text-blue-300 font-bold"}>Only</h1>
            <h1 className={"text-5xl font-bold text-blue-900"}>Fish</h1>
        </div>
        <Profile></Profile>
        <Link href={"/termsofservice"}>terms of service</Link>
    </div>
  )
}
