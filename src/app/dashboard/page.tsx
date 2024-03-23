"use client"
import DashboardHeader from "@/components/Dashboard/header";
// import AnimatedNumbers from "react-animated-numbers";
import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});
import {getCookie} from "cookies-next";
import {jwtDecode} from "jwt-decode";
import Link from "next/link";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export default function dashboard() {
    const [count, setCount] = useState();
    var arr = [];
    const [stats, setStats] = useState<any[]>([]);
    const [people, setPeople] = useState([]);

    const router = useRouter();

    const token = getCookie("jwt");
    if(token == undefined){
        router.push("/dashboard/login");
        toast.error("Token Expired !", {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true
        });
    } else{
    const decodedToken = jwtDecode(token);
        // @ts-ignore
    if(decodedToken.role != 'ADMIN'){
        toast.error("Wrong Token", {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true
        })
    }
    }







    useEffect(() => {
        axios.get('/api/dashboard/counts', {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+token
            }
        }).then(res => {
            console.log(res.data.allCounts);

            setStats([
                // @ts-ignore
                {name: 'Products', value: res.data.allCounts.products},
                // @ts-ignore
                {name: 'Products Category', value: res.data.allCounts.productsCategory},
                // @ts-ignore
                {name: 'Brands', value: res.data.allCounts.brands},
                // @ts-ignore
                {name: 'CVs', value: res.data.allCounts.cvs, }
            ])

        })
            .catch(err => console.error(err))

    }, []);






    // useEffect(() => {
    //     axios.get('/api/dashboard/cvs/list', {
    //         headers: {
    //             'Content-Type' : 'application/json',
    //             'Authorization' : 'Bearer '+token
    //         }
    //     }).then(res => {
    //         setPeople(res.data.cvs)
    //         console.log(res.data)
    //     })
    //         .catch(err => console.error(err))
    // }, []);

    function classNames() {
        // return classes.filter(Boolean).join(' ')
    }

    // @ts-ignore
    return (
        <>
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
                                            // @ts-ignore
                                            key={stat.name}
                                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
                                        >

                                            <dt className="text-sm font-medium leading-6 text-gray-500">
                                                {stat.name}
                                            </dt>
                                            {/*<dd*/}
                                            {/*    className={stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700 ' + 'text-xs font-medium'}*/}
                                            {/*>*/}
                                            {/*    {stat.change}*/}
                                            {/*</dd>*/}
                                            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                                                <AnimatedNumbers
                                                    includeComma
                                                    // @ts-ignore
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
                                {/*                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.firs_name + ' ' + person.last_name }</p>*/}
                                {/*                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div className="hidden sm:flex sm:flex-col sm:items-end">*/}
                                {/*                <p className="text-sm leading-6 text-gray-900">{String(person.country).toUpperCase()}</p>*/}
                                {/*                    <div className="mt-1 flex items-center gap-x-1.5">*/}
                                {/*                        /!* <p className="text-xs leading-5 text-gray-500"><Link href={`./public/cv/${person.file}`}>{person.file}</Link></p> *!/*/}
                                {/*                        <p className="text-xs leading-5 text-gray-500"><a href={person.file} download>{person.file}</a></p>*/}

                                {/*                        /!*to ask regarding link path in docker*!/*/}
                                {/*                        /!*<p className="text-xs leading-5 text-gray-500"><Link href={`file:///Users/mihirsanjaysawant/projects/skc_new/public/cv/${person.file}`}>{person.file}</Link></p>*!/*/}
                                {/*                        /!*<p className="text-xs leading-5 text-gray-500"><Link href={`file:///hostname/public/cv/${person.file}`}>{person.file}</Link></p>*!/*/}

                                {/*                    </div>*/}
                                {/*            </div>*/}
                                {/*        </li>*/}
                                {/*    ))}*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>

                </main>
        </>
    )
}
