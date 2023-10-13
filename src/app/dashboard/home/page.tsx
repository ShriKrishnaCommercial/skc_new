"use client"
//@ts-ignore
import DashboardHeader from "@/components/Dashboard/header";
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';

import toast, {Toaster} from 'react-hot-toast';

export default function homeedit() {


    const [about, setaboutus] = useState();
    const [features, set_features] = useState([]);
    useEffect(() => {
        toast("Wow so easy!")
        const options = {
            method: 'GET',
            url: '/api/home',
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            const data = JSON.parse(JSON.stringify(response.data))
            setaboutus(data[0].about_us);
            set_features(data[0].why_choose_us);


        }).catch(function (error) {
            console.error(error);
        });

    }, []);

    const update = () => {
        const options = {
            method: 'POST',
            url: '/api/home',
            headers: {'Content-Type': 'application/json'},
            data: {
                about_us: about, why_choose_us: features
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }
    return (
        <>
            <DashboardHeader title={"Home"}/>
            <main className="-mt-32">
                <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">

                    <div
                        className="relative h-max overflow-hidden rounded  opacity-100">
                        <div
                            className="mx-auto max-w-7xl  pb-12 ">
                            <>
                                <b>About us section</b>
                                <img src="/dashboard/about_us.png" className="md:w-1/2 w-full" alt={"about us"}/>

                                <div>
                                    <label htmlFor="comment"
                                           className="block text-sm font-medium leading-6 text-gray-900">Change
                                        about section</label>
                                    <div className="mt-2">

                                    <textarea rows={4} name="comment" id="comment" value={about}
                                              //@ts-ignore
                                              onInput={e => setaboutus(e.target.value)}
                                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </textarea>

                                    </div>
                                </div>

                            </>
                            <>
                                <div className="mt-10"/>
                                <b>Why Choose us section</b>
                                <img src="/dashboard/why_choose_us.png" className="md:w-1/2 w-full" alt={"about us"}/>

                                <div className="grid grid-cols-2 gap-4">

                                    {features.map((feature, i) => (

                                        <div key={feature["name"]}>
                                            <label form="title"
                                                   className="block text-sm font-medium leading-6 text-gray-900">title</label>
                                            <div className="mt-2">
                                                <input type="text" name="title" id="title"
                                                       //@ts-ignore
                                                       defaultValue={feature.name}

                                                       onInput={(e) => {
                                                           //@ts-ignore
                                                           features[i].name = e.target.value

                                                       }}
                                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       placeholder="title"/>
                                            </div>
                                            <div>
                                                <label htmlFor="comment"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Description
                                                </label>
                                                <div className="mt-2">
                                                    <textarea
                                                        rows={4}
                                                        name="comment"
                                                        id="comment"
                                                        onInput={(e) => {
                                                            //@ts-ignore
                                                            features[i].description = e.target.value

                                                        }}
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        //@ts-ignore
                                                        defaultValue={feature.description}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </>
                            <>
                                <div className="mt-10"/>
                                <b>New's letter</b>
                                <img src="/dashboard/newsletter.png" className="md:w-1/2 w-full" alt={"about us"}/>
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