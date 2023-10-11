/* This example requires Tailwind CSS v2.0+ */

'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";
import "animate.css"
import {Dialog} from "@headlessui/react";
import { AnimationOnScroll } from 'react-animation-on-scroll';



export default function Example() {
    let brands = [
        "957-Webp.net-resizeimage (10).jpg",
        "777-Webp.net-resizeimage (12).jpg",
        "479-Webp.net-resizeimage (14).jpg",
        "941-tata wiron.png",
        "690-ta precision tube.png",
        "911-TATA NOAMUNDI.png",
        "697-tata power WB.png",
        "414-maithon Power Limited.jpg",
        "581-TSLPL.jpg",
        "749-NINL.png",
        "335-HCL.jpg",
        "180-JINDAL.jpg",
        "460-ADANI.png",
        "330-SAIL.png",
        "266-NTPC.jpg",
        "246-NALCO.png",
        "110-NSPCL.png",
        "249-UCIL WB.png",
        "703-NMDC.png",
        "336-EMIL.png",
        "262-HINDALCO WB.png",
        "144-ALUMINA.png",
        "442-VEDANTA.png",
        "517-TINPLATE.jpg",
        "121-tatabluescope.png",
        "212-TSDPL WB.png",
        "232-TATA Autocomp.png",
        "701-TRF.png",
        "245-LINDE.jpg",
        "981-JCAPCPL.jpg",
        "943-RUNGTA.jpg",
        "404-L&T.jpg",
        "417-NUVOCO.jpg",
        "237-TATA BEARING.png",
        "173-DVC.jpg",
        "354-HCL.jpg",
        "878-DAE WB.png",
        "608-INDIAN RAILWAY.jpg",
        "660-OPGC WB.png",
        "558-HEC.png",
        "982-BPPL.jpg",
        "142-THRIVENI.jpg",
        "199-ASHIANA.jpg",
        "689-SRINATH HOMES.jpg",
        "583-MADHUSUDAN.jpg"

    ];
    return (
        <>
            <Header/>

            <div className="bg-white mt-20">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">

                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Clients
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                commodo. Elit sunt amet
                                fugiat veniam occaecat fugiat aliqua.
                            </p>

                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                        Trusted by over {brands.length}+ businesses
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">

                        {
                            (brands.map((a, i) => {
                                return (
                                    <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <div key={i}
                                         className="col-span-1 flex animate__animated animate__fadeIn justify-center  bg-transparent p-4 animate__animated animate__fadeInUp">
                                        <Image width="400" height="400"
                                               className="h-[100px] w-[130px] mix-blend-multiply mx-5 object-fill"
                                               src={"/img/client/" + a} alt={a}/>
                                    </div>
                                    </AnimationOnScroll>
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
