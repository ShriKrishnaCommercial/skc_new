"use client"
//@ts-ignore
import DashboardHeader from "@/components/Dashboard/header";
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';
import "animate.css"
import toast, {Toaster} from 'react-hot-toast';
import {AnimationOnScroll} from "react-animation-on-scroll";
import Image from "next/image";
import Link from "next/link";

export default function brands() {
    let brands = [
        "AMARARAJA.jpg",
        "anchor by pana.png",
        "APAR.png",
        "azbil.jpg",
        "Balluff wb.png",
        "Baur.png",
        "bharat bijlee.jpg",
        "Burkert brand.png",
        "cesyco.png",
        "CGL01.png",
        "contrinex WB.png",
        "CROMPTO LOGO.png",
        "euchner.png",
        "Flexim.png",
        "general...jpg",
        "givi misure.png",
        "HALONIXX.jpg",
        "HAVELLS IMAGE.jpg",
        "heidenian wb.png",
        "hitachi.jpg",
        "kaycee.png",
        "KEI.png",
        "krykard wb.jpg",
        "leuze wb.png",
        "megger wb.png",
        "michell_instruments.png",
        "MICRO EPSILON.png",
        "MOIST TECH LOGO.png",
        "nidec.png",
        "Nivo control.png",
        "olympus - removebg - preview.png",
        "OMC Italy.png",
        "pepperl fuchs.png",
        "POLYCAB1.png",
        "pp.png",
        "Prok Dvs.png",
        "radio detection.png",
        "Rishab.png",
        "rokade wb.png",
        "saft.png",
        "SCS.png",
        "secure.png",
        "simbott.png",
        "Spohn burkhardt.png",
        "stanley.png",
        "thermax wb.png",
        "Toshbro Control.png",
        "TR electronic.png",
        "Uniflow.png",
        "YAMUNA DENSON.jpg",
    ];
    useEffect(() => {

    }, []);
    return (
        <>
            <DashboardHeader title={"Brands"}/>
            <main className="-mt-32">
                <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">

                    <div
                        className="relative h-max overflow-hidden rounded  opacity-100">
                        <div
                            className="mx-auto max-w-7xl  pb-12 ">
                            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">

                                {
                                    (brands.map((a, i) => {
                                        return (
                                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                                <Link href={"brands/"+a}>


                                                    <div key={i}
                                                         className="col-span-1 flex animate__animated animate__fadeIn justify-center  bg-transparent p-4 animate__animated animate__fadeInUp">
                                                        <Image width="400" height="400"
                                                               className="h-[100px] w-[130px] mix-blend-multiply mx-5 object-fill"
                                                               src={"/img/brand/" + a} alt={a}/>
                                                    </div>
                                                </Link>
                                            </AnimationOnScroll>
                                        )
                                    }))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}