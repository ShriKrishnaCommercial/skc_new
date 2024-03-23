"use client"
//@ts-ignore
import DashboardHeader from "@/components/Dashboard/header";
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';

import toast, {Toaster} from 'react-hot-toast';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {EventInfo} from "framer-motion";
import {getCookie} from "cookies-next";
import {jwtDecode} from "jwt-decode";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export default function cvedit() {

    const token = getCookie("jwt");
    // @ts-ignore
    const decodedToken = jwtDecode(token);
    // @ts-ignore
    if(decodedToken.role != 'ADMIN'){
        toast.error("Wrong Token", {
            position: 'top-right',
            // @ts-ignore
            autoClose: 3000,
            closeOnClick: true
        })
    }

    const [people, setPeople] = useState([]);
    const [query, setQuery] = useState("");

    const [searchParams] = useState(["firs_name", "email", "last_name"])
    // @ts-ignore
    function searchCvs(items){
        // @ts-ignore
        return items.filter((item) => {
            return searchParams.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        // return with matching params like first and last name or email
                        .indexOf(query.toLowerCase()) > -1
                );
            });
        });
    }


    if(token == undefined){
        // @ts-ignore
        router.push("/dashboard/login");
        toast.error("Token Expired !", {
            position: 'top-right',
            // @ts-ignore
            autoClose: 3000,
            closeOnClick: true
        });

    }

    useEffect(() => {
        axios.get('/api/dashboard/cvs/list', {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+token
            }
        }).then(res => {
            setPeople(res.data.cvs)
            console.log(res.data)
        })
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            <DashboardHeader title={"CVs List"}/>

            <div className="-mt-30">
                <div>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </div>
                        <input type="text" name="search" id="search"
                               className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               placeholder="search..."
                               value={query}
                               onChange={(e) => setQuery(e.target.value)}/>
                    </div>
                </div>
            </div>

            <ul role="list" className="divide-y divide-gray-100">
                {searchCvs(people).map((person: any) => (
                    <li key={person._id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                            {/*<img className="h-12 w-12 flex-none rounded-full bg-gray-50"*/}
                            {/*     src={person.imageUrl} alt=""/>*/}
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.firs_name + ' ' + person.last_name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">{String(person.country).toUpperCase()}</p>
                            <div className="mt-1 flex items-center gap-x-1.5">
                                {/* <p className="text-xs leading-5 text-gray-500"><Link href={`./public/cv/${person.file}`}>{person.file}</Link></p> */}
                                <p className="text-xs leading-5 text-gray-500"><a href={person.file}
                                                                                  download>{person.file}</a></p>

                            </div>
                        </div>
                    </li>
                ))}
            </ul>


        </>
    )
}


