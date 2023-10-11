'use client'
import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";

export default function TopComps() {
    let brands = [
        '100-dynabrade.png',
        '131-brand-15.jpg',
        '133-flir.png',
        '142-brand-11.jpg',
        '154-ANCHOR.jpg',
        '157-rishabh.png',
        '171-brand-6.jpg',
        '180-brand-3.jpg',
        '198-contrinex.png',
        '225-Balluff wb.png',
        '235-contrinex WB.png',
        '251-anchor by pana.png',
        '275-radio detection.png',
        '286-brand-9.jpg',
        '287-ador.png',
        '289-brand-1.jpg',
        '309-dembla1.png',
        '343-Untitled design.png',
        '353-HALONIXX.jpg',
        '356-saft.png',
        '359-brand-13.jpg',
        '366-HOLLYSYS0.png',
        '417-stanley-removebg-preview.png',
        '432-HIKVISION 1.png',
        '436-image-5.png',
        '505-POLYCAB1.png',
        '511-radio detection.png',
        '524-dowell.png',
        '545-SCS.png',
        '553-halonix0.png',
        '562-teknic.jpg',
        '563-givi misure.png',
        '568-Burkert brand.png',
    ]
    return (

        <>
            <div className="">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Trusted
                        by many clients</p>


                    <Marquee>
                        <div className="flex ">
                            {
                                (brands.map((a, i) => {
                                    return (
                                        <div key={i}
                                             className="col-span-1 flex justify-center  bg-transparent">
                                            <Image width="400" height="400"
                                                   className="h-[100px] w-[130px] mx-5 object-fill mix-blend-multiply"
                                                   src={"/img/brand/" + a} alt={a}/>
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