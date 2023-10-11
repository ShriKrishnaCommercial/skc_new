"use client"
import Image from 'next/image'
import React, {useEffect, useRef, useState} from "react";
import Header from "@/components/Header";
import './../globals.css'
// @ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Marquee from "react-fast-marquee";
import 'animate.css';
import Head from "next/head";
import Footer from "@/components/Footer";
import {useAnimation, motion, useScroll} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Testimonials} from "@/components/testimonial";
import TopComps from "@/components/topcomps";


export default function Home() {
    let headers = useRef(null);
    const {scrollYProgress} = useScroll();
    const animationControl = useAnimation();
    let data = [
        {
            'img': '/assets/img/electrical.jpg',
            'title': 'Electrical',
            'msg': 'We have wide range of electrical products'
        },
        {
            'img': '/assets/img/mechanical.jpg',
            'title': 'Mechanical',
            'msg': 'We have wide range of mechanical products'
        }, {
            'img': '/assets/img/instrumental.jpg',
            'title': 'Instrumental',
            'msg': 'We have wide range of instrumental products'
        }
    ];

    function handleChangeComplete(color: any) {
        console.log(color)
        // this.setState({ background: color.hex });
    };
    let [current_color, set_color] = useState('#C3a6a0')

    function color_change() {
        console.log(current_color);
    }


    let splide1 = useRef(null);
    let [current_image, set_current_image] = useState(0);


    useEffect(() => {
        // @ts-ignore


        // @ts-ignore
        splide1.current.splide.on('move', (n) => {
            set_current_image(n)
        })
    }, [])
    return (
        <div>
            {/*<input type="color" value={current_color} onChange={e => set_color(e.target.value)} onInput={color_change}/>*/}


            <div className="bg-white">
                <Header/>
                <main>
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
                        {/*<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">*/}
                        <div>


                            <Splide className=" z-20" ref={splide1} aria-label="My Favorite Images" options={{
                                autoplay: true,
                                type: 'fade',
                                interval: 2000,
                                arrows: false,
                                rewind: true,
                                pauseOnHover: false,
                            }
                            }>
                                {
                                    (data.map((d, i) => {
                                        return (
                                            <SplideSlide key={i}>
                                                <div
                                                    className="relative w-full md:h-[450px] shadow-xl sm:overflow-hidden">
                                                    <div className="absolute inset-0">
                                                        <Image width="400" height="400"
                                                               className="h-full w-full object-cover"
                                                               src={d.img}
                                                               alt="People working on laptops"/>
                                                        <div
                                                            className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"
                                                            ref={headers} style={{
                                                            background: current_color
                                                        }}></div>
                                                    </div>

                                                    <div
                                                        className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                                        <h1 className={"text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl " + (current_image == i ? 'animate__animated animate__flipInX' : '')}>
                                                            <span
                                                                className="block md:w-[80%] mx-auto text-center text-white">{d.msg}</span>
                                                            {/*<span className="block text-indigo-200">customer support</span>*/}
                                                        </h1>
                                                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">{d.title}</p>
                                                        <div
                                                            className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                                            <a href="#"
                                                               className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"> Know
                                                                More </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SplideSlide>
                                        )
                                    }))
                                }

                            </Splide>
                        </div>
                    </div>


                   <TopComps/>

                    <div className="relative pt-16 pb-32 overflow-hidden ">
                        <div aria-hidden="true"
                             className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"></div>
                        <div className="relative">
                            <div
                                className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                                    <div>
                                        <div>
                                    <span
                                        className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600"
                                        style={{
                                            background: current_color
                                        }}>

                                  <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                      d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                                      fill="currentColor"/><path
                                      d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                                      fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd"
                                                                 d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                                                                 fill="currentColor"/></svg>
                                    </span>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">ABOUT
                                                US</h2>
                                            <p className="mt-4 text-lg text-gray-500">In our quest for excellence, Shri
                                                Krishna Commercial was formed in 2010 with objective of becoming
                                                specialisation in Electrical, Mechanical and Instrumentation products
                                                line. Since then Shri Krishna Commercial has grown many folds to become
                                                one of the best most sought after and reputed aggregators and traders
                                                with presence in in Jharkhand, West Bengal, Orissa and Chhattisgarh and
                                                other parts of India. In pursuance to our vision of becoming a leading
                                                one stop industrial supplies services and solutions we have collaborated
                                                and tied up with leading manufacturers and OEMs of various Electrical,
                                                Mechanical, Instrumentaion equipments, spares, fittings and supplies.
                                                While we have expanded our footprints to Four States, we are tirelessly
                                                working towards pan India abroad.

                                            </p>
                                            <div className="mt-6">
                                                <a href="#"
                                                   className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                                                   style={{
                                                       background: current_color
                                                   }}>Read
                                                    More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 border-t border-gray-200 pt-6">
                                        <blockquote>
                                            <div>
                                                <p className="text-sm text-gray-500">&ldquo;We find your service
                                                    satisfactory, and supply delivery is on time.&rdquo;</p>
                                            </div>
                                            <footer className="mt-3">
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex-shrink-0">
                                                        <Image width="400" height="400" className="h-6 w-6 rounded-full"
                                                               src="/assets/img/others/avatar.png"
                                                               alt=""/>
                                                    </div>
                                                    <div className="text-sm font-medium text-gray-700">DEEPAK SHARMA,
                                                        Sr Executive Materials,Tata Autocomp
                                                    </div>
                                                </div>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>


                                <div className="mt-12 sm:mt-16 lg:mt-0">
                                    <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                        <Image width="400" height="400"
                                               className="md:h-[500px] md:w-[600px] md:mt-[100px] h-[300px] w-[350px] left-0 rounded-xl   lg:absolute lg:left-0  "
                                               src="/assets/img/others/reading.png"
                                               alt="about"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-24">
                            <div
                                className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                                <div
                                    className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                    <div>
                                        <div>
                                    <span
                                        className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600"
                                        style={{
                                            background: current_color
                                        }}>

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                    </svg>
                                    </span>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">OUR
                                                VALUES</h2>
                                            <p className="mt-4 text-lg text-gray-500">Shri Krishna Commercial is a
                                                one-stop place for all the products and solutions in the Industrial
                                                Electrical, Instrumentation and Mechanical products.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                    <div className="pr-4  sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                        <Image width="400" height="400"
                                               className="md:h-[400px] md:w-[400px] md:mt-[100px] h-[300px] w-[350px]  rounded-xl    "
                                               src="/assets/img/others/values.png"
                                               alt="about"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gradient-to-r from-purple-800 to-indigo-700" style={{
                        background: current_color
                    }}>
                        <div
                            className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight">Why choose us</h2>
                            <p className="mt-4 max-w-3xl text-lg text-black">Our business stands out with a
                                customer-centric focus, delivering not just products/services, but an exceptional
                                experience that fosters lasting relationships.</p>
                            <div
                                className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                                <div>
                                    <div>
                                    <span
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                                    </svg>
                                    </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white">Our Team</h3>
                                        <p className="mt-2 text-sm text-black">Our team is full of competent and
                                            efficient team members who have good knowledge and technical skills in
                                            electrical, instrumentation and mechanical products.</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                    <span
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                    </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white">Well established base</h3>
                                        <p className="mt-2 text-sm text-black">We have a Long history of over the
                                            years catering to the demands of our customers for all sorts of High Quality
                                            electrical, instrumentation and mechanical products.</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                    <span
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                    </svg>
                                    </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white">Wide customer base</h3>
                                        <p className="mt-2 text-sm text-black">Being in the Industry for years we
                                            have a wide customer base in different sectors such as Construction
                                            Industry, Public Sector and Private Sector.</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                    <span
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                    </svg>
                                    </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white">Quality assured</h3>
                                        <p className="mt-2 text-sm text-black">We are engaged in supply and service
                                            of best quality electrical, instrumentation and mechanical products to our
                                            clients. We have highly reliable principals, OEMs and other service teams ,
                                            who provide us with a quality-assured range of products & services.</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                    <span
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                    </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white">Customer Convenience </h3>
                                        <p className="mt-2 text-sm text-black">We realize that our continued
                                            success is dependent on maximizing value for our customers and prompt and
                                            accurate delivery.</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                    <span
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                                    </svg>
                                    </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white">Industry expertise</h3>
                                        <p className="mt-2 text-sm text-black">With 10 years of experience, we have
                                            built our knowledge base in the industry, which is highly beneficial to us
                                            as well as our clients business.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="relative bg-gray-900">
                        <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                            <div className="h-full w-full xl:grid xl:grid-cols-2">
                                <div className="h-full xl:relative xl:col-start-2">
                                    <Image width="400" height="400"
                                           className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                                           src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                           alt="People working on laptops"/>
                                    <div aria-hidden="true"
                                         className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                                <h2 className="text-sm font-semibold tracking-wide uppercase">
                                    <span
                                        className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Valuable Metrics</span>
                                </h2>
                                <p className="mt-3 text-3xl font-extrabold text-white">Get actionable data that will
                                    help grow your business</p>
                                {/*<p className="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus*/}
                                {/*    bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra*/}
                                {/*    eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet*/}
                                {/*    amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p>*/}
                                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                                    <p>
                                        <span className="block text-2xl font-bold text-white">30+</span>
                                        <span className="mt-1 block text-sm text-gray-300"><span
                                            className="font-medium text-white">Companies</span> trust our company.</span>
                                    </p>

                                    <p>
                                        <span className="block text-2xl font-bold text-white">6+</span>
                                        <span className="mt-1 block text-sm text-gray-300"><span
                                            className="font-medium text-white">States in India</span> where we do business.</span>
                                    </p>

                                    <p>
                                        <span className="block text-2xl font-bold text-white">98%</span>
                                        <span className="mt-1 block text-sm text-gray-300"><span
                                            className="font-medium text-white">Customer satisfaction</span> .</span>
                                    </p>

                                    <p>
                                        <span className="block text-2xl font-bold text-white">40+</span>
                                        <span className="mt-1 block text-sm text-gray-300"><span
                                            className="font-medium text-white">Clients</span> .</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>
                <Testimonials/>
                <Footer/>


            </div>

        </div>
    )
}

