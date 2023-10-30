'use client'
import DashboardHeader from "@/components/Dashboard/header";
import React, {useState} from "react";
import axios from "axios";
import Link from "next/link";

export default function Products() {
    const [projects, setproduxt] = useState([])
    useState((e) => {
        const options = {
            method: 'GET',
            url: '/api/product',
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data))
            var n = data
            setproduxt(n)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className="min-h-full">
            <DashboardHeader title={"Products"}/>
            <main className="-mt-32">
                <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">
                    <div
                        className="relative h-max overflow-hidden rounded  opacity-75">
                        <div
                            className="mx-auto max-w-7xl  pb-12 ">
                            <div>
                                <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2>
                                <ul role="list"
                                    className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                                    {projects.map((project) => (
                                        <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
                                            <div
                                                className={
                                                    'bg-indigo-600 flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                                                }
                                            >
                                                {project.name[0]}
                                            </div>
                                            <div
                                                className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                                    <Link href={"products/" + project.name}
                                                       className="font-medium text-gray-900 hover:text-gray-600">
                                                        {project.name}
                                                    </Link>
                                                    <p className="text-gray-500">{project.members} Members</p>
                                                </div>
                                                <div className="flex-shrink-0 pr-2">
                                                    <button
                                                        type="button"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="sr-only">Open options</span>

                                                    </button>

                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}