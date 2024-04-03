"use client"
import clsx from "clsx";
import Image from "next/image";
import DashboardHeader from "@/components/Dashboard/header";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function homeedit(){

    const [people, setPeople] = useState([]);
    const[leader, setLeader] = useState({});
    const[updateId, setUpdateId] = useState('');
    const[updateId2, setUpdateId2] = useState('');
    const[updateName, setUpdateName] = useState('');
    const[updateRole, setUpdateRole] = useState('');
    useEffect(() => {
        axios.get("/api/leaders/all")
            .then(resp => {
                setPeople(resp.data);
            })
            .catch(err => console.error(err));
    }, []);

    async function updateLeader(id: string){
        var options = {
            method: "PUT",
            url: "/dashboard/leader/"+id,
            headers: {"Content-Type":"application/json"},
            data: {
                name : updateName,
                role: updateRole
            }
        }

        axios.request(options).then(resp =>{
            console.log(resp.data);
            setUpdateName('');
            setUpdateRole('');
            setUpdateId('');
            setUpdateId2('');
        })
            .catch(err => console.error(err.message))
    }


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
                            {/*<h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">*/}
                            {/*    {e.name}*/}
                            {/*</h3>*/}
                            <div className="mt-2">
                                <input
                                    type="text"
                                    onChange={event => {
                                        setUpdateId(e._id);
                                        setUpdateName(event.target.value);
                                    }}
                                    value={
                                        updateId === e._id ? updateName : e.name
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Leader Name"
                                />
                            </div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={
                                        updateId2 === e._id ? updateRole : e.role
                                    }
                                    onChange={event => {
                                        setUpdateId2(e._id);
                                        setUpdateRole(event.target.value);
                                    }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Leader Role"
                                />
                            </div>
                            <button
                                onClick={o  => {
                                    updateLeader(e._id);
                                    }
                                }
                                type="button"
                                className="rounded-md bg-indigo-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                className="rounded-md bg-indigo-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Change Photo
                            </button>
                        </div>
                    )
                })
                }
            </div>

        </>
    )
}