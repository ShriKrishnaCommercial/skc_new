"use client"
import clsx from "clsx";
import Image from "next/image";
import DashboardHeader from "@/components/Dashboard/header";
import {useEffect, useState} from "react";
import axios from "axios";

export default function homeedit(){

    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get("/api/leaders/all")
            .then(resp => {
                setPeople(resp.data);
            })
            .catch(err => console.error(err));
    }, []);


    return(
        <>
            <DashboardHeader title={"Leaders"}/>

            <div className="rounded-lg bg-white px-1 py-6 shadow grid md:grid-cols-4 grid-cols-2 gap-4  mt-10  ">
                {people.map((e, i) => {
                    return (
                        <div key={i}>
                            <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                                <div
                                    className={clsx(
                                        'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                                        [
                                            'border-blue-300',
                                            'border-indigo-300',
                                            'border-sky-300',
                                        ][i % 3]
                                    )}
                                />
                                <div
                                    className="absolute inset-0 bg-indigo-50"
                                    style={{clipPath: `url(#${e._id}-${i % 3})`}}
                                >
                                    <Image
                                        className="transition duration-300 group-hover:scale-110"
                                        src={e.imageUrl}
                                        alt=""
                                        layout="fill"
                                        objectFit="auto"
                                        priority
                                        sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    />
                                </div>
                            </div>
                            <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                                {e.name}
                            </h3>
                            <p className="mt-1 text-base tracking-tight text-slate-500">
                                {e.role}
                            </p>
                        </div>
                    )
                })
                }
            </div>

        </>
    )
}