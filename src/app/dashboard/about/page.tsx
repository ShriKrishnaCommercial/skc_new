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

    try{
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




    const update = () => {
        const options = {
            method: 'PUT',
            url: '/api/about/',
            headers: {'Content-Type': 'application/json'},
            data: {
                aboutus: headerline,
                know_who_we: about,
                state: stats[1].value,
                clients: stats[2].value,
                values: values
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    let [stats, setstats] = useState([
        {label: 'Established in 2010', value: new Date().getFullYear() - 2010 + "+ Years in Business"},
        {label: 'States', value: '15+'},
        {label: 'Clients', value: '200+'},
    ]);
    let [headerline, setHeaderline] = useState("We are a dedicated team committed to providing innovative solutions and exceptional experiences. With a passion for excellence, we aim to exceed expectations and create lasting value for our customers.");
    let [about, setaboutus] = useState("M/S SHRI KRISHNA COMMERCIAL was established in 2010, The Company was formed with a vision of becoming specialists in the Industrial sector with a motive to pioneer in Electrical, Instrumentation, Mechanical and safety solution. Over the years, Shri Krishna Commercial has emerged as a one-stop solution for many Industrial, Electrical, Instrumentation and Mechanical products with the core value of the company's growth in line with its employees’. In sync with the idea of becoming a leading one-stop electrical product solution, we have tied up with leading OEM’s of various unique and innovative segments. Since its inception, M/S Shri Krishna commercial has grown many folds to become one of the most trusted aggregators and channel partners with more than 35+ OEMs serving more than 119+ customers. We've branched our services to 8+ states of India (both in Private and Government sectors) and are working tirelessly towards expanding our base over Pan India. We envisioned on becoming the most reliable, sustainable and competitive company for industrial business solution globally.");
    let [values, setvalues] = useState("Our values drive us forward, guiding our actions to prioritize integrity, collaboration, and continuous growth. We embrace diversity and are devoted to delivering excellence in all we do.")

    useEffect(() => {
        const options = {
            method: 'GET',
            url: '/api/about',
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            const data = JSON.parse(JSON.stringify(response.data));
            if (data != null) {
                let newArr = [...stats]; // copying the old datas array
                newArr[1].value = data[0]["state"] + "+"
                newArr[2].value = data[0]["clients"] + "+"
                setstats(newArr);
                setHeaderline(data[0]["aboutus"])
                setaboutus(data[0]["know_who_we"])
                setvalues(data[0]["values"])
            }


        }).catch(function (error) {
            console.error(error);
        });

    }, []);


    return (
        <>
            <DashboardHeader title={"About"}/>
            <main className="-mt-32">
                <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">

                    <div
                        className="relative h-max overflow-hidden rounded  opacity-100">
                        <div
                            className="mx-auto max-w-7xl  pb-12 ">
                            <>
                                <b>About us section</b>
                                <img src="/dashboard/about_page_header.png" className="md:w-1/2 w-full"
                                     alt={"about us"}/>

                                <div>
                                    <label htmlFor="comment"
                                           className="block text-sm font-medium leading-6 text-gray-900">Change
                                        about section</label>
                                    <div className="mt-2">
                                    <textarea rows={2} name="comment" id="comment" value={headerline}
                                        //@ts-ignore
                                              onInput={e => setHeaderline(e.target.value)}
                                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </textarea>

                                    </div>
                                </div>

                            </>

                            <>
                                <div className="mt-10"/>
                                <b>Know who we are section</b>
                                <img src="/dashboard/about_edit_kw.png" className="md:w-1/2 w-full" alt={"about us"}/>
                                <div>
                                    <label htmlFor="comment"
                                           className="block text-sm font-medium leading-6 text-gray-900">Change
                                        about section</label>
                                    <div className="mt-2">
                                    <textarea rows={2} name="comment" id="comment" value={about}
                                        //@ts-ignore
                                              onInput={e => setaboutus(e.target.value)}
                                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </textarea>

                                    </div>
                                </div>
                            </>
                            <>
                                <div className="mt-10"/>
                                <b>our values section</b>
                                <img src="/dashboard/about_edit_values.png" className="md:w-1/2 w-full"
                                     alt={"about us"}/>
                                <div>
                                    <label htmlFor="comment"
                                           className="block text-sm font-medium leading-6 text-gray-900">Change
                                        Our values section</label>
                                    <div className="mt-2">
                                    <textarea rows={2} name="comment" id="comment" value={values}
                                        //@ts-ignore
                                              onInput={e => setvalues(e.target.value)}
                                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </textarea>

                                    </div>
                                </div>
                            </>
                            <>
                                <div className="mt-10"/>
                                <b>Stats</b>
                                <img src="/dashboard/stats_about_edit.png" className="md:w-1/2 w-full"
                                     alt={"about us"}/>
                                <div>
                                    <label htmlFor="comment"
                                           className="block text-sm font-medium leading-6 text-gray-900">Change
                                        stat values section</label>
                                    <div className="mt-5">
                                        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="state"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    States
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="number"
                                                        name="state"
                                                        id="state"
                                                        onChange={(e) => {
                                                            let newArr = [...stats]; // copying the old datas array
                                                            newArr[1].value = e.target.value
                                                            setstats(newArr);
                                                        }}
                                                        value={parseInt(stats[1].value)}
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder="states number"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="client"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Clients
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="number"
                                                        name="client"
                                                        onChange={(e) => {
                                                            let newArr = [...stats]; // copying the old datas array
                                                            newArr[2].value = e.target.value
                                                            setstats(newArr);
                                                        }}
                                                        value={parseInt(stats[2].value)}
                                                        id="client"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder="clients total"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>

                        </div>
                        <button onClick={update}
                                type="button"
                                className="rounded-md bg-indigo-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </main>

        </>
    )
}