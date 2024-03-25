'use client'
import React, {useEffect, useState} from "react";
import '../app/globals.css'
import Image from "next/image";
import {ToastContainer} from "react-toastify";
import axios from "axios";
// const mongoose = require('mongoose');
export default function Header() {
    let [position, set_positon] = useState(0);


    function scroll() {
        set_positon(window.scrollY)
    }

    async function componentDidMount() {

        const response = await fetch('https://geolocation-db.com/json/');
        const data = await response.json();
        data['url'] = window.location.href

        var options = {
            method: 'POST',
            url: '/va',
            headers: {'Content-Type': 'application/json'},
            data:data
        };

        axios.request(options).then(function (response) {
            // console.log(response.data);
        }).catch(function (error) {
            // console.error(error);
        });


    }

    componentDidMount()

    useEffect(() => {
        window.addEventListener('scroll', scroll)

    }, [])
    return (
        <header>
            <div className="relative bg-transparent z-10 ">
                <div
                    className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <Image width="400" height="400" className="h-8 w-auto sm:h-10"
                                   src="/logo.png"
                                   alt=""/>
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-expanded="false">
                            <span className="sr-only">Open menu</span>

                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">

                        {/*<div className="relative">*/}

                        {/*    <button type="button"*/}
                        {/*            className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
                        {/*            aria-expanded="false">*/}
                        {/*        <span>Solutions</span>*/}

                        {/*        <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"*/}
                        {/*             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"*/}
                        {/*             aria-hidden="true">*/}
                        {/*            <path fillRule="evenodd"*/}
                        {/*                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
                        {/*                  clipRule="evenodd"/>*/}
                        {/*        </svg>*/}
                        {/*    </button>*/}


                        {/*    <div*/}
                        {/*        className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">*/}
                        {/*        <div*/}
                        {/*            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">*/}
                        {/*            <div*/}
                        {/*                className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">*/}
                        {/*                <a href="#"*/}
                        {/*                   className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">*/}
                        {/*                    <div*/}
                        {/*                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">*/}

                        {/*                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                             fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
                        {/*                             aria-hidden="true">*/}
                        {/*                            <path strokeLinecap="round" strokeLinejoin="round"*/}
                        {/*                                  strokeWidth="2"*/}
                        {/*                                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>*/}
                        {/*                        </svg>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="ml-4">*/}
                        {/*                        <p className="text-base font-medium text-gray-900">Inbox</p>*/}
                        {/*                        <p className="mt-1 text-sm text-gray-500">Get a better*/}
                        {/*                            understanding of where your traffic is coming from.</p>*/}
                        {/*                    </div>*/}
                        {/*                </a>*/}

                        {/*                <a href="#"*/}
                        {/*                   className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">*/}
                        {/*                    <div*/}
                        {/*                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">*/}

                        {/*                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                             fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
                        {/*                             aria-hidden="true">*/}
                        {/*                            <path strokeLinecap="round" strokeLinejoin="round"*/}
                        {/*                                  strokeWidth="2"*/}
                        {/*                                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>*/}
                        {/*                        </svg>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="ml-4">*/}
                        {/*                        <p className="text-base font-medium text-gray-900">Messaging</p>*/}
                        {/*                        <p className="mt-1 text-sm text-gray-500">Speak directly to your*/}
                        {/*                            customers in a more meaningful way.</p>*/}
                        {/*                    </div>*/}
                        {/*                </a>*/}

                        {/*                <a href="#"*/}
                        {/*                   className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">*/}
                        {/*                    <div*/}
                        {/*                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">*/}

                        {/*                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                             fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
                        {/*                             aria-hidden="true">*/}
                        {/*                            <path strokeLinecap="round" strokeLinejoin="round"*/}
                        {/*                                  strokeWidth="2"*/}
                        {/*                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>*/}
                        {/*                        </svg>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="ml-4">*/}
                        {/*                        <p className="text-base font-medium text-gray-900">Live Chat</p>*/}
                        {/*                        <p className="mt-1 text-sm text-gray-500">Your*/}
                        {/*                            customers&#039; data will be safe and secure.</p>*/}
                        {/*                    </div>*/}
                        {/*                </a>*/}

                        {/*                <a href="#"*/}
                        {/*                   className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">*/}
                        {/*                    <div*/}
                        {/*                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">*/}

                        {/*                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                             fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
                        {/*                             aria-hidden="true">*/}
                        {/*                            <path strokeLinecap="round" strokeLinejoin="round"*/}
                        {/*                                  strokeWidth="2"*/}
                        {/*                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                        {/*                        </svg>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="ml-4">*/}
                        {/*                        <p className="text-base font-medium text-gray-900">Knowledge*/}
                        {/*                            Base</p>*/}
                        {/*                        <p className="mt-1 text-sm text-gray-500">Connect with*/}
                        {/*                            third-party tools that you&#039;re already using.</p>*/}
                        {/*                    </div>*/}
                        {/*                </a>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <a href="/"
                           className="text-base font-medium text-gray-500 hover:text-gray-900"> Home </a>
                        <a href="/about"
                           className="text-base font-medium text-gray-500 hover:text-gray-900"> About us </a>
                        <a href='/products'>

                            <button type="button"
                                    className="text-gray-500 group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    aria-expanded="false">
                                <span>Products</span>

                                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </a>
                        <a href="/brands"
                           className="text-base font-medium text-gray-500 hover:text-gray-900"> Brands </a>
                        <a href="/clients"
                           className="text-base font-medium text-gray-500 hover:text-gray-900"> Clients </a>

                        <a href="/career"
                           className="text-base font-medium text-gray-500 hover:text-gray-900"> Career </a>
                        <a href="/contact"
                           className="text-base font-medium text-gray-500 hover:text-gray-900"> Contact Us </a>
                        {/*<a href="/blog"*/}
                        {/*   className="text-base font-medium text-gray-500 hover:text-gray-900"> Blog </a>*/}
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                        <a href="#"
                           className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-primary to-orange-800 0 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
                            Contact Us </a>
                    </div>
                </div>


                {/*<div className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">*/}
                {/*    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">*/}
                {/*        <div className="pt-5 pb-6 px-5">*/}
                {/*            <div className="flex items-center justify-between">*/}
                {/*                <div>*/}
                {/*                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg" alt="Workflow">*/}
                {/*                </div>*/}
                {/*                <div className="-mr-2">*/}
                {/*                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">*/}
                {/*                        <span className="sr-only">Close menu</span>*/}
                {/*                        <!-- Heroicon name: outline/x -->*/}
                {/*                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />*/}
                {/*                        </svg>*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="mt-6">*/}
                {/*                <nav className="grid grid-cols-1 gap-7">*/}
                {/*                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">*/}
                {/*                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">*/}
                {/*                            <!-- Heroicon name: outline/inbox -->*/}
                {/*                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />*/}
                {/*                            </svg>*/}
                {/*                        </div>*/}
                {/*                        <div className="ml-4 text-base font-medium text-gray-900">Inbox</div>*/}
                {/*                    </a>*/}

                {/*                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">*/}
                {/*                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">*/}
                {/*                            <!-- Heroicon name: outline/annotation -->*/}
                {/*                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />*/}
                {/*                            </svg>*/}
                {/*                        </div>*/}
                {/*                        <div className="ml-4 text-base font-medium text-gray-900">Messaging</div>*/}
                {/*                    </a>*/}

                {/*                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">*/}
                {/*                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">*/}
                {/*                            <!-- Heroicon name: outline/chat-alt-2 -->*/}
                {/*                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />*/}
                {/*                            </svg>*/}
                {/*                        </div>*/}
                {/*                        <div className="ml-4 text-base font-medium text-gray-900">Live Chat</div>*/}
                {/*                    </a>*/}

                {/*                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">*/}
                {/*                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">*/}
                {/*                            <!-- Heroicon name: outline/question-mark-circle -->*/}
                {/*                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />*/}
                {/*                            </svg>*/}
                {/*                        </div>*/}
                {/*                        <div className="ml-4 text-base font-medium text-gray-900">Knowledge Base</div>*/}
                {/*                    </a>*/}
                {/*                </nav>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="py-6 px-5">*/}
                {/*            <div className="grid grid-cols-2 gap-4">*/}
                {/*                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>*/}
                {/*                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Partners </a>*/}
                {/*                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Company </a>*/}
                {/*            </div>*/}
                {/*            <div className="mt-6">*/}
                {/*                <a href="#" className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"> Sign up </a>*/}
                {/*                <p className="mt-6 text-center text-base font-medium text-gray-500">*/}
                {/*                    Existing customer?*/}
                {/*                    <a href="#" className="text-gray-900"> Sign in </a>*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <ToastContainer


            />
            {/* Same as */}
            <ToastContainer/>
        </header>


        // <div>
        //     <nav
        //         className={" shadow fixed top-0 z-50 w-full transition-all duration-200 " + (position >= 300 ? 'bg-white text-black' : 'backdrop-blur-sm bg-white/30s text-white')}
        //         onScroll={scroll}>
        //         <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        //             <div className="flex justify-between h-16">
        //                 <div className="flex">
        //                     <div className="flex-shrink-0 flex items-center">
        //                         <img className="block lg:hidden h-8 w-auto"
        //                              src="/logo.png" alt="Workflow" style={{
        //                             filter: position <= 300 ? "brightness(0) invert(1)" : ""
        //                         }}/>
        //                         <img className="hidden lg:block h-8 w-auto"
        //                              src="/logo.png"
        //                              alt="Workflow" style={{
        //                             filter: position <= 300 ? "brightness(0) invert(1)" : ""
        //                         }}/>
        //                     </div>
        //                     <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
        //
        //                         <a href="#"
        //                            className="border-indigo-500  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Dashboard </a>
        //                         <a href="#"
        //                            className="border-transparent  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Team </a>
        //                         <a href="#"
        //                            className="border-transparent  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Projects </a>
        //                         <a href="#"
        //                            className="border-transparent  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Calendar </a>
        //                     </div>
        //                 </div>
        //                 <div className="hidden sm:ml-6 sm:flex sm:items-center">
        //                     <button type="button"
        //                             className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        //                         <span className="sr-only">View notifications</span>
        //
        //                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
        //                              viewBox="0 0 24 24"
        //                              stroke="currentColor" aria-hidden="true">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        //                                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
        //                         </svg>
        //                     </button>
        //
        //
        //                     <div className="ml-3 relative">
        //                         <div>
        //                             <button type="button"
        //                                     className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                                     id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        //                                 <span className="sr-only">Open user menu</span>
        //                                 <img className="h-8 w-8 rounded-full"
        //                                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        //                                      alt=""/>
        //                             </button>
        //                         </div>
        //
        //
        //                     </div>
        //                 </div>
        //
        //                 <div className="-mr-2 flex items-center sm:hidden">
        //
        //                     <button type="button"
        //                             className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        //                             aria-controls="mobile-menu" aria-expanded="false">
        //                         <span className="sr-only">Open main menu</span>
        //
        //                         <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
        //                              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        //                                   d="M4 6h16M4 12h16M4 18h16"/>
        //                         </svg>
        //
        //                         <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
        //                              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        //                                   d="M6 18L18 6M6 6l12 12"/>
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //
        //
        //         {/*<div className="sm:hidden" id="mobile-menu">*/}
        //         {/*    <div className="pt-2 pb-3 space-y-1">*/}
        //
        //         {/*        <a href="#"*/}
        //         {/*           className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Dashboard</a>*/}
        //         {/*        <a href="#"*/}
        //         {/*           className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Team</a>*/}
        //         {/*        <a href="#"*/}
        //         {/*           className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Projects</a>*/}
        //         {/*        <a href="#"*/}
        //         {/*           className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Calendar</a>*/}
        //         {/*    </div>*/}
        //         {/*    <div className="pt-4 pb-3 border-t border-gray-200">*/}
        //         {/*        <div className="flex items-center px-4">*/}
        //         {/*            <div className="flex-shrink-0">*/}
        //
        //         {/*                <img className="h-10 w-10 rounded-full"*/}
        //         {/*                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
        //         {/*                     alt=""/>*/}
        //         {/*            </div>*/}
        //         {/*            <div className="ml-3">*/}
        //         {/*                <div className="text-base font-medium text-gray-800">Tom Cook</div>*/}
        //         {/*                <div className="text-sm font-medium text-gray-500">tom@example.com</div>*/}
        //         {/*            </div>*/}
        //         {/*            <button type="button"*/}
        //         {/*                    className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
        //         {/*                <span className="sr-only">View notifications</span>*/}
        //
        //         {/*                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
        //         {/*                     stroke="currentColor" aria-hidden="true">*/}
        //         {/*                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
        //         {/*                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>*/}
        //         {/*                </svg>*/}
        //         {/*            </button>*/}
        //         {/*        </div>*/}
        //         {/*        <div className="mt-3 space-y-1">*/}
        //         {/*            <a href="#"*/}
        //         {/*               className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Your*/}
        //         {/*                Profile</a>*/}
        //         {/*            <a href="#"*/}
        //         {/*               className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Settings</a>*/}
        //         {/*            <a href="#"*/}
        //         {/*               className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign*/}
        //         {/*                out</a>*/}
        //         {/*        </div>*/}
        //         {/*    </div>*/}
        //         {/*</div>*/}
        //
        //
        //     </nav>
        //
        // </div>
    )
}