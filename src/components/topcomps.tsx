'use client'
import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";

export default function TopComps() {
    let brands = [
        "1200px-BHEL_logo.svg.webp",
        "ADANI.png",
        "Aditya_Birla_Group_Logo.svg.png",
        "amalgam_steel.png",
        "Atomic-Minerals-Directorate-for-Exploration-Research-AMD.jpg",
        "BHUSAN POWE AND STEEL.jpg",
        "DAE.png",
        "DVC.jpg",
        "FSNL.png",
        "GRSE.png",
        "HEC.png",
        "HINDALCO.jpg",
        "Hindustan_Copper_logo.svg.png",
        "IIT_Guwahati_Logo.svg.png",
        "INDIAN RAILWAY.jpg",
        "Indian_Oil_Logo.svg.png",
        "JCAPCPL.jpg",
        // "JINDAL.jpg",
        // "JSL WB.png",
        // "JSW WB.png",
        // "jusco.png",
        // "LINDE.jpg",
        // "Metalsa.png",
        // "nmdcs 01.png",
        // "NSPCL.png",
        // "NTPC.jpg",
        // "NUVOCO.jpg",
        // "opgc.png",
        // "pgcil.jpg",
        // "runaya.png",
        // "RUNGTA.jpg",
        // "SAIL.png",
        // "ta precision tube.png",
        // "tata auto comp.jpg",
        // "TATA Autocomp.png",
        // "TATA BEARING.png",
        // "TATA BLUESCOPE.png",
        // "TATA GROUP.png",
        // "TATA NOAMUNDI.png",
        // "tata power WB.png",
        // "tata steel.jpg",
        // "tata steel growth shop.jpg",
        // "tata wiron.png",
        // "THRIVENI.jpg",
        // "TINPLATE.jpg",
        // "TRF.png",
        // "TSPL.png",
        // "UBL_Logo.jpg",
        // "UCIL WB.png",

    ];
    return (

        <>
            <div className="">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Trusted
                        by many clients</p>


                    <Marquee>
                        <div className="flex mt-3">
                            {
                                (brands.map((a, i) => {
                                    return (
                                        <div key={i}
                                             className="col-span-1 flex justify-center  bg-transparent">
                                            <Image width="400" height="400"
                                                   className="h-[80px] w-[100px] mx-5 object-fill mix-blend-multiply"
                                                   src={"/img/client/" + a} alt={a}/>
                                        </div>
                                    )
                                }))
                            }
                        </div>

                    </Marquee>


                </div>
            </div>

        </>
    )
}