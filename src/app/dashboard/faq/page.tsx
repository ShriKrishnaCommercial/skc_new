"use client"
//@ts-ignore
import DashboardHeader from "@/components/Dashboard/header";
// import { Dialog } from '@headlessui/react'
import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
// import toast, {Toaster} from 'react-hot-toast';
// import {CKEditor} from "@ckeditor/ckeditor5-react";
// import {EventInfo} from "framer-motion";
// import {getCookie} from "cookies-next";
// import {jwtDecode} from "jwt-decode";


export default function dynamicfaq() {
    const [endproducts, setEndproducts] = useState([])
    // let token : any = null;
    // try{
    //     token = getCookie("jwt");
    //     // @ts-ignore
    //     const decodedToken = jwtDecode(token);
    //     // @ts-ignore
    //     if(decodedToken.role != 'ADMIN'){
    //         toast.error("Wrong Token", {
    //             position: 'top-right',
    //             // @ts-ignore
    //             autoClose: 3000,
    //             closeOnClick: true
    //         })
    //     }
    //     if(token == undefined) {
    //         // @ts-ignore
    //         router.push("/dashboard/login");
    //         toast.error("Token Expired !", {
    //             position: 'top-right',
    //             // @ts-ignore
    //             autoClose: 3000,
    //             closeOnClick: true
    //         });
    //     }
    // }catch (e){
    //     // @ts-ignore
    //     console.error(e.message);
    // }

    const [people, setPeople] = useState([]);
    const [query, setQuery] = useState("");


    const [searchParams] = useState(["name"])
    let [isOpen, setIsOpen] = useState(false)

    // @ts-ignore
    function searchCvs(items) {
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




    useEffect(() => {

        axios.get('/api/endproduct', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '
            }
        }).then(res => {
            setEndproducts(res.data)

        })
            .catch(err => console.error(err))
    }, []);

    return (
        <>

            <DashboardHeader title={"FAQ List"}/>
            <main className="-mt-32">
                <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">

                    <div
                        className="relative h-max overflow-hidden rounded  opacity-100">
                        <div
                            className="mx-auto max-w-7xl  pb-12 ">
                            <div className="px-4 sm:px-6 lg:px-8">
                                <div className="sm:flex sm:items-center">
                                    <div className="sm:flex-auto">
                                        <h1 className="text-base font-semibold leading-6 text-gray-900">Data</h1>
                                        <p className="mt-2 text-sm text-gray-700">
                                            A list of products so you can add FAQs
                                        </p>
                                    </div>

                                </div>
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle">
                                            <div className="-mt-30">
                                                <div>
                                                    <div className="relative mt-2 rounded-md shadow-sm">
                                                        <div
                                                            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            {/*<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>*/}
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                      d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                                                                      fill="currentColor"/>
                                                            </svg>
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
                                                {searchCvs(endproducts).map((person: any) => (
                                                    <Link key={person._id} href={"/dashboard/faq/" + person._id}
                                                    >
                                                        <li key={person._id}
                                                            className="flex justify-between gap-x-6 py-5">
                                                            <div className="flex gap-x-4">
                                                                {/*<img className="h-12 w-12 flex-none rounded-full bg-gray-50"*/}
                                                                {/*     src={person.imageUrl} alt=""/>*/}
                                                                <div className="min-w-0 flex-auto">
                                                                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.partner}</p>
                                                                </div>
                                                            </div>
                                                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                                                {/*<p className="text-sm leading-6 text-gray-900">{String(person.country).toUpperCase()}</p>*/}
                                                                <div className="mt-1 flex items-center gap-x-1.5">
                                                                    {/* <p className="text-xs leading-5 text-gray-500"><Link href={`./public/cv/${person.file}`}>{person.file}</Link></p> */}
                                                                    {/*<p className="text-xs leading-5 text-gray-500"><a*/}
                                                                    {/*    href={person.file}*/}
                                                                    {/*    download>{person.file}</a></p>*/}

                                                                </div>
                                                            </div>
                                                        </li>
                                                    </Link>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>


        </>
    )
}


