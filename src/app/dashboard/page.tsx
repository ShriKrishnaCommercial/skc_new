"use client"
import DashboardHeader from "@/components/Dashboard/header";
// import AnimatedNumbers from "react-animated-numbers";
import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import axios from "axios";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});
export default function dashboard() {
    const [count, setCount] = useState({
        product: 0, subProduct: 0, brand: 0
    });

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('/api/dashboard/counts', {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+sessionStorage.getItem("jwt")
            }
        }).then(res => {
            setCount(res.data.allCounts)
            console.log(count)
        })
            .catch(err => console.error(err))
    }, []);

    const stats = [
        // {name: 'Blogs', value: '$405,091.00', change: '+4.75%', changeType: 'positive'},
        {name: 'Products', value: count.product, change: '+54.02%', changeType: 'negative'},
        {name: 'Products Category', value: count.subProduct, change: '-1.39%', changeType: 'positive'},
        // {name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative'},
    ]
    axios.get('/api/dashboard/cvs/list', {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer '+sessionStorage.getItem("jwt")
        }
    }).then(res => setPeople(res.data.cvs))
        .catch(err => console.error(err))

    function classNames() {
        // return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <DashboardHeader title={"Dashboard"}/>
                <main className="-mt-32">
                    <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">

                        <div
                            className="relative h-max overflow-hidden rounded  opacity-75">
                            <div
                                className="mx-auto max-w-7xl  pb-12 ">
                                <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
                                    {stats.map((stat) => (
                                        <div
                                            key={stat.name}
                                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
                                        >
                                            <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>
                                            <dd
                                                className={stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700 ' + 'text-xs font-medium'}
                                            >
                                                {stat.change}
                                            </dd>
                                            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                                                <AnimatedNumbers
                                                    includeComma
                                                    animateToNumber={stat.value}
                                                    fontStyle={{fontSize: 40, fontWeight: "black"}}
                                                    locale="en-US"
                                                    configs={[
                                                        {mass: 1, tension: 220, friction: 100},
                                                        {mass: 1, tension: 180, friction: 130},
                                                        {mass: 1, tension: 280, friction: 90},
                                                        {mass: 1, tension: 180, friction: 135},
                                                        {mass: 1, tension: 260, friction: 100},
                                                        {mass: 1, tension: 210, friction: 180},
                                                    ]}
                                                ></AnimatedNumbers>
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                                {/*<ul role="list" className="divide-y divide-gray-100">*/}
                                {/*    {people.map((person) => (*/}
                                {/*        <li key={person._id} className="flex justify-between gap-x-6 py-5">*/}
                                {/*            <div className="flex gap-x-4">*/}
                                {/*                /!*<img className="h-12 w-12 flex-none rounded-full bg-gray-50"*!/*/}
                                {/*                /!*     src={person.imageUrl} alt=""/>*!/*/}
                                {/*                <div className="min-w-0 flex-auto">*/}
                                {/*                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.first_name}</p>*/}
                                {/*                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            /!*<div className="hidden sm:flex sm:flex-col sm:items-end">*!/*/}
                                {/*            /!*    <p className="text-sm leading-6 text-gray-900">{person.role}</p>*!/*/}
                                {/*            /!*    {person.lastSeen ? (*!/*/}
                                {/*            /!*        <p className="mt-1 text-xs leading-5 text-gray-500">*!/*/}
                                {/*            /!*            Last seen <time*!/*/}
                                {/*            /!*            dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>*!/*/}
                                {/*            /!*        </p>*!/*/}
                                {/*            /!*    ) : (*!/*/}
                                {/*            /!*        <div className="mt-1 flex items-center gap-x-1.5">*!/*/}
                                {/*            /!*            <div className="flex-none rounded-full bg-emerald-500/20 p-1">*!/*/}
                                {/*            /!*                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>*!/*/}
                                {/*            /!*            </div>*!/*/}
                                {/*            /!*            <p className="text-xs leading-5 text-gray-500">Online</p>*!/*/}
                                {/*            /!*        </div>*!/*/}
                                {/*            /!*    )}*!/*/}
                                {/*            /!*</div>*!/*/}
                                {/*        </li>*/}
                                {/*    ))}*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}
