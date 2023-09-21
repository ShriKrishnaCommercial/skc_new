/* This example requires Tailwind CSS v2.0+ */


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";
import "animate.css"
export default function Example() {
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
    ];
    return (
        <>
            <Header/>

            <div className="bg-white ">
                <div className="bg-white animate__animated animate__fadeIn">
                    <div className="max-w-7xl mx-auto py-6 px-4  sm:px-6 lg:px-8">
                        <div className="text-center">

                            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                Our Brands
                            </p>
                            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                                we proudly showcase the valued partnerships that have fueled our success
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                        Trusted by over 30+ businesses
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">

                        {
                            (brands.map((a, i) => {
                                return (
                                    <div key={i}
                                         className="col-span-1 flex justify-center  bg-gray-100 p-4 animate__animated animate__fadeInUp">
                                        <Image width="400" height="400"
                                               className="h-[100px] w-[130px] mx-5 object-fill mix-blend-multiply"
                                               src={"/img/brand/" + a} alt={a}/>
                                    </div>
                                )
                            }))
                        }

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
