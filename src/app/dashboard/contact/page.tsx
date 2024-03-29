"use client"
//@ts-ignore
import DashboardHeader from "@/components/Dashboard/header";
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';

import toast, {Toaster} from 'react-hot-toast';
import {getCookie} from "cookies-next";
import {jwtDecode} from "jwt-decode";

export default function homeedit() {
    let token : any = null;
    try{
        token = getCookie("jwt");
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
        if(token == undefined) {
            // @ts-ignore
            router.push("/dashboard/login");
            toast.error("Token Expired !", {
                position: 'top-right',
                // @ts-ignore
                autoClose: 3000,
                closeOnClick: true
            });
        }
    }catch (e){
        // @ts-ignore
        console.error(e.message);
    }

    const [dataa, setdata] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: '/api/contactus',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+token
            }
        };
        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data))
            var n = data
            setdata(n)
        }).catch(function (error) {
            console.error(error);
        });

    }, []);


    return (
        <>
            <DashboardHeader title={"Contact us form data"}/>
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
                                            A list of all the contact data submitted through contact form.
                                        </p>
                                    </div>

                                </div>
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle">
                                            <table className="min-w-full border-separate border-spacing-0">
                                                <thead>
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                                    >
                                                        Email
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                                    >
                                                        Phone Number
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                                    >
                                                        Message
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                                                    >

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {dataa.map((person, personIdx) => (
                                                    // @ts-ignore
                                                    <tr key={person.first_name}>
                                                        <td
                                                            className={
                                                                personIdx !== dataa.length - 1 ? 'border-b border-gray-200 ' : '' +
                                                                    'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                                                            }
                                                        >
                                                            {/*@ts-ignore*/}
                                                            {person.first_name + " " + person.last_name} ({person.company})
                                                        </td>
                                                        <td
                                                            className={
                                                                personIdx !== dataa.length - 1 ? 'border-b border-gray-200 ' : '' +
                                                                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                                                            }
                                                        >
                                                            {/*@ts-ignore*/}
                                                            {person.email}
                                                        </td>
                                                        <td
                                                            className={
                                                                personIdx !== dataa.length - 1 ? 'border-b border-gray-200 ' : '' +
                                                                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                                                            }
                                                        >
                                                            {/*@ts-ignore*/}
                                                            {person.pno}
                                                        </td>
                                                        <td
                                                            className={
                                                                personIdx !== dataa.length - 1 ? 'border-b border-gray-200 +' : '' +
                                                                    'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                                                            }
                                                        >
                                                            {/*@ts-ignore*/}
                                                            {person.message}
                                                        </td>
                                                        <td
                                                            className={
                                                                personIdx !== dataa.length - 1 ? 'border-b border-gray-200 ' : '' +
                                                                    'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                                                            }
                                                        >
                                                            <a href="#"
                                                               className="text-indigo-600 hover:text-indigo-900">
                                                                {/*@ts-ignore*/}
                                                                Edit<span className="sr-only">, {person.name}</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
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