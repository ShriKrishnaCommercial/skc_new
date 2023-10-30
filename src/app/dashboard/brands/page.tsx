"use client"
//@ts-ignore
import DashboardHeader from "@/components/Dashboard/header";
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';
import "animate.css"

import Image from "next/image";


export default function brands() {
    const [id, setId] = useState();
    const [loading, setloading] = useState(false);
    const move_right = (key: Number) => {

        if (parseInt(key.toString()) < brand.length - 1) {
            var tbrand = brand;
            //@ts-ignore
            const current = tbrand[key]
            //@ts-ignore
            const next_key = tbrand[key + 1]
            //@ts-ignore
            const tmepbck = tbrand[key]
            //@ts-ignore
            tbrand[key + 1] = current;
            //@ts-ignore
            tbrand[key] = next_key;
            setBrands([...tbrand])
            update()
        }

    }
    const move_left = (key: Number) => {

        if (parseInt(key.toString()) < brand.length - 1) {
            var tbrand = brand;
            //@ts-ignore
            const current = tbrand[key]
            //@ts-ignore
            const next_key = tbrand[key - 1]
            //@ts-ignore
            const tmepbck = tbrand[key]
            //@ts-ignore
            tbrand[key - 1] = current;
            //@ts-ignore
            tbrand[key] = next_key;
            setBrands([...tbrand])
            update()
        }

    }
    const move_down = (key: Number) => {
        // move down block
        const hideafter = (brand.length - 1) - 3
        if ((parseInt(key.toString()) < brand.length - 1) && (parseInt(key.toString()) < hideafter)) {
            var tbrand = brand;
            //@ts-ignore
            const current = tbrand[key]
            //@ts-ignore
            const next_key = tbrand[key + 4]
            //@ts-ignore
            const tmepbck = tbrand[key]
            //@ts-ignore
            tbrand[key + 4] = current;
            //@ts-ignore
            tbrand[key] = next_key;
            setBrands([...tbrand])
            update()
        }

    }
    const move_up = (key: Number) => {
        // move down block
        const hidebefore = 3
        if ((parseInt(key.toString()) < brand.length - 1) && (parseInt(key.toString()) > hidebefore)) {
            var tbrand = brand;
            //@ts-ignore
            const current = tbrand[key]
            //@ts-ignore
            const next_key = tbrand[key - 4]
            //@ts-ignore
            const tmepbck = tbrand[key]
            //@ts-ignore
            tbrand[key - 4] = current;
            //@ts-ignore
            tbrand[key] = next_key;
            setBrands([...tbrand])
            update()
        }

    }

    const deletefromarray = (key: Number) => {
        var tbrand = brand;
        tbrand.splice(parseInt(key.toString()), 1);
        setBrands([...tbrand])
        update();


    }
    const update = () => {
        setloading(true)
        const options = {
            method: 'PUT',
            url: '/api/brands/' + id,
            headers: {'Content-Type': 'application/json'},
            data: {
                brands: brand
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setloading(false)
            console.log("updated")
        }).catch(function (error) {
            console.error(error);
        });
    }
    let [brand, setBrands] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            url: '/api/brands',
            headers: {'Content-Type': 'application/json'}
        };
        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data))
            var n = data[0]["brands"]
            setBrands(n)
            setId(data[0]["_id"])
        }).catch(function (error) {
            console.error(error);
        });
    }, []);
    // @ts-ignore
    const uploadbrand = (event) => {
        const form = new FormData();
        const file = event.target.files[0];
        form.append("brand", file);
        const options = {
            method: 'POST',
            url: '/api/brands/addimage',
            headers: {
                'Content-Type': 'multipart/form-data;',
            },
            data: form
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            var tbrand = brand;
            // @ts-ignore
            tbrand.push(JSON.parse(JSON.stringify(response.data))["message"])
            setBrands([...tbrand])
            update();
        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <>

            <DashboardHeader title={"Brands"}/>
            <main className="-mt-32">
                <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">

                    <div
                        className="relative h-max overflow-hidden rounded  opacity-100">
                        Add new Brands <br/>


                        <input type="file" onInput={uploadbrand}/>
                        <div
                            className="mx-auto max-w-7xl  pb-12 ">
                            {
                                loading ? <a>Updating</a> : <a></a>
                            }
                            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">


                                {brand.map((E, i) => {
                                    return (
                                        <div className="group">
                                            <div className="relative">


                                                <div className="flex">
                                                    <div className="hidden group-hover:block mt-16" onClick={() => {
                                                        move_left(i)
                                                    }}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
                                                                fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        {/* up */}
                                                        <div className="hidden group-hover:block ml-20" onClick={() => {
                                                            move_up(i)
                                                        }}>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
                                                                    fill="currentColor"/>
                                                            </svg>
                                                        </div>

                                                        <Image width="400" height="400" key={i}
                                                               className="h-[100px] w-[130px] mix-blend-multiply mx-5 object-fill"
                                                               src={"/img/brand/" + E} alt={E}/>
                                                        {/*    down */}

                                                        <div className="flex">


                                                            <div className="hidden group-hover:block ml-20 "
                                                                 onClick={() => {
                                                                     move_down(i)
                                                                 }}>
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                     fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                                                        fill="currentColor"/>
                                                                </svg>

                                                            </div>
                                                            <button
                                                                onClick={() => {
                                                                    console.log(i)
                                                                    deletefromarray(i)
                                                                }}
                                                                type="button"
                                                                className="hidden group-hover:block rounded z-10 bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>


                                                    </div>
                                                    <div className="hidden group-hover:block mt-16" onClick={() => {
                                                        move_right(i)
                                                    }}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                                                                fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}