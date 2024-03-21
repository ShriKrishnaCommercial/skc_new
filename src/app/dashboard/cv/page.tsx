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

export default function cvedit() {

    const token = getCookie("jwt");
    const decodedToken = jwtDecode(token);
    if(decodedToken.role != 'ADMIN'){
        toast.error("Wrong Token", {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true
        })
    }

    const [people, setPeople] = useState([]);

    if(token == undefined){
        router.push("/dashboard/login");
        toast.error("Token Expired !", {
            position: 'top-right',
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

            <ul role="list" className="divide-y divide-gray-100">
                {people.map((person) => (
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

                                {/*to ask regarding link path in docker*/}
                                {/*<p className="text-xs leading-5 text-gray-500"><Link href={`file:///Users/mihirsanjaysawant/projects/skc_new/public/cv/${person.file}`}>{person.file}</Link></p>*/}
                                {/*<p className="text-xs leading-5 text-gray-500"><Link href={`file:///hostname/public/cv/${person.file}`}>{person.file}</Link></p>*/}

                            </div>
                        </div>
                    </li>
                ))}
            </ul>


        </>
    )
}


