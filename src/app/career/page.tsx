'use client'
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import {Employees} from "@/components/Employee";

import {useState} from "react";
import axios from "axios";

import toast, {Toaster} from 'react-hot-toast';
import {useRouter} from "next/navigation";
export default function Contact() {
    const [file, setfile] = useState("");
    const [first_name, setfn] = useState("")
    const [ln, setln] = useState("")
    const [em, setem] = useState("")
    const [cun, setcun] = useState("")
    const [Street_address, setStreet_address] = useState("")

    const router = useRouter();

    const token = sessionStorage.getItem("jwt");

    if(!token){
        router.push("/dashboard/login");
        toast.error("Session Expired !", {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true
        });
    }

    const submit = () => {
        const form = new FormData();
        form.append("cv", file);
        form.append("firs_name", first_name);
        form.append("last_name", ln);
        form.append("email", em);
        form.append("country", cun);
        form.append("Street_address", Street_address);




        const options = {
            method: 'POST',
            url: '/api/addcv',
            headers: {
                'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
                'Authorization' : 'Bearer '+token
            },
            data: form
        };

        axios.request(options).then(function (response) {

            toast.success("Submitted Successfully", {
                position: 'top-right',
                autoClose: 3000,
                closeOnClick: true
            })
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <>
            <Header/>
            <div className="bg-white">

                <div className="relative pb-32 bg-gray-900">
                    <div className="absolute inset-0">
                        <Image className="w-full h-full object-cover"
                               width="400"
                               height='400'
                               src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                               alt=""/>
                        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Career</h1>
                        <p className="mt-6 max-w-3xl text-xl text-gray-300">SHRI KRISHNA COMMERCIAL emphasizes the
                            importance of its people as a key to its success, fostering long-term relationships and
                            nurturing talents in a family-oriented, respectful work environment.
                        </p>
                    </div>
                </div>


                <section className="-mt-32 w-[90%] mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                         aria-labelledby="contact-heading">
                    <h2 className="sr-only" id="contact-heading">Contact us</h2>
                    <div className="">
                        <div className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div
                                    className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                                            fill="currentColor"/>
                                        <path
                                            d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                                            fill="currentColor"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                                              fill="currentColor"/>
                                    </svg>
                                </div>
                                At SHRI KRISHNA COMMERCIAL, we strongly believe that our people are our greatest asset.
                                As much as we build brands, we also build careers. The success of SHRI KRISHNA
                                COMMERCIAL is a direct result of the commitment and talents of our people who work with
                                us, and we are committed to attracting, developing and retaining these people. We work
                                in a family environment and value a long term and stable relationship with all members
                                of the family. Life at SHRI KRISHNA COMMERCIAL is not only work, it is also about the
                                relationship we build over the years by work and other engagement activities. We nurture
                                talents consistently as philosophically we believe that talented professionals are the
                                most valuable resources for significant growth. To foster an environment of trust,
                                community and open communication, we have established a Managing with Respect
                                philosophy. All are responsible for practicing the five principles of Managing with
                                Respect.
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="tel:+91-9031512370"
                                   className="text-base font-medium text-primary hover:text-primary">Call
                                    us<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>


                    </div>
                </section>
                {/*<section className="mt-10 w-[90%] mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"*/}
                {/*         aria-labelledby="contact-heading">*/}
                {/*    <h2 className="sr-only" id="contact-heading">Contact us</h2>*/}
                {/*    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">*/}
                {/*        <div className="flex flex-col bg-white rounded-2xl shadow-xl">*/}
                {/*            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">*/}
                {/*                <div*/}
                {/*                    className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">*/}

                {/*                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
                {/*                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                {/*                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>*/}
                {/*                    </svg>*/}
                {/*                </div>*/}
                {/*                Fast Growing company*/}
                {/*                We are at an inflection point*/}
                {/*                to achieve accelerated*/}
                {/*            </div>*/}
                {/*            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">*/}
                {/*                <a href="tel:+91-9031512370"*/}
                {/*                   className="text-base font-medium text-primary hover:text-primary">Call*/}
                {/*                    us<span aria-hidden="true"> &rarr;</span></a>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="flex flex-col bg-white rounded-2xl shadow-xl">*/}
                {/*            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">*/}
                {/*                <div*/}
                {/*                    className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">*/}

                {/*                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
                {/*                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                {/*                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>*/}
                {/*                    </svg>*/}
                {/*                </div>*/}
                {/*                <h3 className="text-xl font-medium text-gray-900">Registered office</h3>*/}
                {/*                <p className="mt-4 text-base text-gray-500">Marwari Para Road, Chowk Bazar, Jugsalai,*/}
                {/*                    Jamshedpur-831006, Jharkhand, India.</p>*/}
                {/*            </div>*/}
                {/*            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">*/}
                {/*                <a href="#" className="text-base font-medium text-primary hover:text-primary">Get*/}
                {/*                    Directions<span aria-hidden="true"> &rarr;</span></a>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="flex flex-col bg-white rounded-2xl shadow-xl">*/}
                {/*            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">*/}
                {/*                <div*/}
                {/*                    className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">*/}

                {/*                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
                {/*                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                {/*                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                {/*                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>*/}
                {/*                    </svg>*/}
                {/*                </div>*/}
                {/*                <h3 className="text-xl font-medium text-gray-900">Warehouse/Godown</h3>*/}
                {/*                <p className="mt-4 text-base text-gray-500">Shiv Ghat Road, Near S.T John, Jugsalai,*/}
                {/*                    Jamshedpur- 831006</p>*/}
                {/*            </div>*/}
                {/*            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">*/}
                {/*                <a href="#" className="text-base font-medium text-primary hover:text-primary">Get*/}
                {/*                    Directions<span aria-hidden="true"> &rarr;</span></a>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <Employees/>
                {/*<div className="bg-white">*/}
                {/*    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">*/}
                {/*        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">*/}
                {/*            <div className="space-y-5 sm:space-y-4">*/}
                {/*                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our*/}
                {/*                    leadership</h2>*/}
                {/*                <p className="text-xl text-gray-500">*/}
                {/*                    Meet our leadership, a team of visionaries and experts, guiding our company towards*/}
                {/*                    innovation and success.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="lg:col-span-2">*/}
                {/*                <ul role="list"*/}
                {/*                    className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">*/}
                {/*                    {people.map((person) => (*/}
                {/*                        <li key={person.name}>*/}
                {/*                            <div className="flex items-center space-x-4 lg:space-x-6">*/}
                {/*                                <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20"*/}
                {/*                                     src={person.imageUrl} alt=""/>*/}
                {/*                                <div className="font-medium text-lg leading-6 space-y-1">*/}
                {/*                                    <h3>{person.name}</h3>*/}
                {/*                                    <p className="text-indigo-600">{person.role}</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </li>*/}
                {/*                    ))}*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <section className="mt-10 w-[90%] mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                         aria-labelledby="contact-heading">
                    <h2 className="sr-only" id="contact-heading">Contact us</h2>
                    <div className="">
                        <div className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div
                                    className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                                            fill="currentColor"/>
                                        <path
                                            d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                                            fill="currentColor"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                                              fill="currentColor"/>
                                    </svg>
                                </div>
                                <div className="hidden sm:block" aria-hidden="true">
                                    <div className="py-5">
                                        <div className="border-t border-gray-200"/>
                                    </div>
                                </div>

                                <div className="mt-10 sm:mt-0">
                                    <div className="md:grid md:grid-cols-3 md:gap-6">
                                        <div className="md:col-span-1">
                                            <div className="px-4 sm:px-0">
                                                <h3 className="text-lg font-medium leading-6 text-gray-900">Upload Your
                                                    C.V</h3>
                                                <p className="mt-1 text-sm text-gray-600">Elevate Your Career Journey:
                                                    Submit Your CV Today!</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 md:mt-0 md:col-span-2">

                                            <div className="shadow overflow-hidden sm:rounded-md">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="first-name"
                                                                   className="block text-sm font-medium text-gray-700">
                                                                First name
                                                            </label>
                                                            <input
                                                                onChange={(e) => {
                                                                    setfn(e.target.value)
                                                                }}
                                                                type="text"
                                                                name="first-name"
                                                                id="first-name"
                                                                autoComplete="given-name"
                                                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="last-name"
                                                                   className="block text-sm font-medium text-gray-700">
                                                                Last name
                                                            </label>
                                                            <input
                                                                onChange={(e) => {
                                                                    setln(e.target.value)
                                                                }}
                                                                type="text"
                                                                name="last-name"
                                                                id="last-name"
                                                                autoComplete="family-name"
                                                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-4">
                                                            <label htmlFor="email-address"
                                                                   className="block text-sm font-medium text-gray-700">
                                                                Email address
                                                            </label>
                                                            <input
                                                                onChange={(e) => {
                                                                    setem(e.target.value)
                                                                }}
                                                                type="text"
                                                                name="email-address"
                                                                id="email-address"
                                                                autoComplete="email"
                                                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="country"
                                                                   className="block text-sm font-medium text-gray-700">
                                                                Country
                                                            </label>
                                                            <select
                                                                onChange={(e) => {
                                                                    setcun(e.target.value)
                                                                }}
                                                                id="country"
                                                                name="country"
                                                                autoComplete="country-name"
                                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                                            >
                                                                <option>United States</option>
                                                                <option>Canada</option>
                                                                <option>Mexico</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-span-6">
                                                            <label htmlFor="street-address"
                                                                   className="block text-sm font-medium text-gray-700">
                                                                Resume file
                                                            </label>
                                                            <input
                                                                type="file"
                                                                onChange={(e) => {
                                                                    // @ts-ignore
                                                                    setfile(e.target.files[0])
                                                                }}

                                                                name="street-address"
                                                                id="street-address"
                                                                autoComplete="street-address"
                                                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-6">
                                                            <label htmlFor="street-address"
                                                                   className="block text-sm font-medium text-gray-700">
                                                                Street address
                                                            </label>
                                                            <input
                                                                onChange={(e) => {
                                                                    setStreet_address(e.target.value)
                                                                }}
                                                                type="text"
                                                                name="street-address"
                                                                id="street-address"
                                                                autoComplete="street-address"
                                                                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button
                                                        onClick={(r) => {
                                                            submit()
                                                        }}
                                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>

            </div>
            {/*<div className="bg-gray-100">*/}
            {/*    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">*/}
            {/*        <div className="relative bg-white shadow-xl">*/}
            {/*            <h2 className="sr-only">Contact us</h2>*/}

            {/*            <div className="grid grid-cols-1 lg:grid-cols-3">*/}

            {/*                <div className="relative overflow-hidden py-10 px-6 bg-primary sm:px-10 xl:p-12">*/}
            {/*                    <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">*/}
            {/*                        <svg className="absolute inset-0 w-full h-full" width="343" height="388"*/}
            {/*                             viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice"*/}
            {/*                             xmlns="http://www.w3.org/2000/svg">*/}
            {/*                            <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"*/}
            {/*                                  fill="url(#linear1)" fillOpacity=".1"/>*/}
            {/*                            <defs>*/}
            {/*                                <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66"*/}
            {/*                                                y2="814.66" gradientUnits="userSpaceOnUse">*/}
            {/*                                    <stop stopColor="#fff"></stop>*/}
            {/*                                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>*/}
            {/*                                </linearGradient>*/}
            {/*                            </defs>*/}
            {/*                        </svg>*/}
            {/*                    </div>*/}
            {/*                    <div*/}
            {/*                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"*/}
            {/*                        aria-hidden="true">*/}
            {/*                        <svg className="absolute inset-0 w-full h-full" width="359" height="339"*/}
            {/*                             viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice"*/}
            {/*                             xmlns="http://www.w3.org/2000/svg">*/}
            {/*                            <path*/}
            {/*                                d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"*/}
            {/*                                fill="url(#linear2)" fillOpacity=".1"/>*/}
            {/*                            <defs>*/}
            {/*                                <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66"*/}
            {/*                                                y2="735.66" gradientUnits="userSpaceOnUse">*/}
            {/*                                    <stop stopColor="#fff"></stop>*/}
            {/*                                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>*/}
            {/*                                </linearGradient>*/}
            {/*                            </defs>*/}
            {/*                        </svg>*/}
            {/*                    </div>*/}
            {/*                    <div*/}
            {/*                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"*/}
            {/*                        aria-hidden="true">*/}
            {/*                        <svg className="absolute inset-0 w-full h-full" width="160" height="678"*/}
            {/*                             viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice"*/}
            {/*                             xmlns="http://www.w3.org/2000/svg">*/}
            {/*                            <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"*/}
            {/*                                  fill="url(#linear3)" fillOpacity=".1"/>*/}
            {/*                            <defs>*/}
            {/*                                <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66"*/}
            {/*                                                y2="1032.66" gradientUnits="userSpaceOnUse">*/}
            {/*                                    <stop stopColor="#fff"></stop>*/}
            {/*                                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>*/}
            {/*                                </linearGradient>*/}
            {/*                            </defs>*/}
            {/*                        </svg>*/}
            {/*                    </div>*/}
            {/*                    <h3 className="text-lg font-medium text-white">Contact information</h3>*/}
            {/*                    <p className="mt-6 text-base text-indigo-50 max-w-3xl">Nullam risus blandit ac aliquam*/}
            {/*                        justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>*/}
            {/*                    <dl className="mt-8 space-y-6">*/}
            {/*                        <dt><span className="sr-only">Phone number</span></dt>*/}
            {/*                        <dd className="flex text-base text-indigo-50">*/}
            {/*                          */}
            {/*                            <svg className="flex-shrink-0 w-6 h-6 text-indigo-200"*/}
            {/*                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
            {/*                                 stroke="currentColor" aria-hidden="true">*/}
            {/*                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
            {/*                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>*/}
            {/*                            </svg>*/}
            {/*                            <span className="ml-3">+1 (555) 123-4567</span>*/}
            {/*                        </dd>*/}
            {/*                        <dt><span className="sr-only">Email</span></dt>*/}
            {/*                        <dd className="flex text-base text-indigo-50">*/}
            {/*                            */}
            {/*                            <svg className="flex-shrink-0 w-6 h-6 text-indigo-200"*/}
            {/*                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
            {/*                                 stroke="currentColor" aria-hidden="true">*/}
            {/*                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
            {/*                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>*/}
            {/*                            </svg>*/}
            {/*                            <span className="ml-3">support@workcation.com</span>*/}
            {/*                        </dd>*/}
            {/*                    </dl>*/}
            {/*                    <ul role="list" className="mt-8 flex space-x-12">*/}
            {/*                        <li>*/}
            {/*                            <a className="text-indigo-200 hover:text-indigo-100" href="#">*/}
            {/*                                <span className="sr-only">Facebook</span>*/}
            {/*                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
            {/*                                     xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"*/}
            {/*                                     aria-hidden="true">*/}
            {/*                                    <path*/}
            {/*                                        d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"*/}
            {/*                                        fill="currentColor"/>*/}
            {/*                                </svg>*/}
            {/*                            </a>*/}
            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <a className="text-indigo-200 hover:text-indigo-100" href="#">*/}
            {/*                                <span className="sr-only">GitHub</span>*/}
            {/*                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
            {/*                                     xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"*/}
            {/*                                     aria-hidden="true">*/}
            {/*                                    <path*/}
            {/*                                        d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"*/}
            {/*                                        fill="currentColor"/>*/}
            {/*                                </svg>*/}
            {/*                            </a>*/}
            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <a className="text-indigo-200 hover:text-indigo-100" href="#">*/}
            {/*                                <span className="sr-only">Twitter</span>*/}
            {/*                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
            {/*                                     xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"*/}
            {/*                                     aria-hidden="true">*/}
            {/*                                    <path*/}
            {/*                                        d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"*/}
            {/*                                        fill="currentColor"/>*/}
            {/*                                </svg>*/}
            {/*                            </a>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}

            {/*               */}
            {/*                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">*/}
            {/*                    <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>*/}
            {/*                    <form action="#" method="POST"*/}
            {/*                          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">*/}
            {/*                        <div>*/}
            {/*                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">First*/}
            {/*                                name</label>*/}
            {/*                            <div className="mt-1">*/}
            {/*                                <input type="text" name="first-name" id="first-name"*/}
            {/*                                       autoComplete="given-name"*/}
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary focus:border-primary border-gray-300 rounded-md"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div>*/}
            {/*                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">Last*/}
            {/*                                name</label>*/}
            {/*                            <div className="mt-1">*/}
            {/*                                <input type="text" name="last-name" id="last-name"*/}
            {/*                                       autoComplete="family-name"*/}
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary focus:border-primary border-gray-300 rounded-md"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div>*/}
            {/*                            <label htmlFor="email"*/}
            {/*                                   className="block text-sm font-medium text-gray-900">Email</label>*/}
            {/*                            <div className="mt-1">*/}
            {/*                                <input id="email" name="email" type="email" autoComplete="email"*/}
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary focus:border-primary border-gray-300 rounded-md"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div>*/}
            {/*                            <div className="flex justify-between">*/}
            {/*                                <label htmlFor="phone"*/}
            {/*                                       className="block text-sm font-medium text-gray-900">Phone</label>*/}
            {/*                                <span id="phone-optional" className="text-sm text-gray-500">Optional</span>*/}
            {/*                            </div>*/}
            {/*                            <div className="mt-1">*/}
            {/*                                <input type="text" name="phone" id="phone" autoComplete="tel"*/}
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary focus:border-primary border-gray-300 rounded-md"*/}
            {/*                                       aria-describedby="phone-optional"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="sm:col-span-2">*/}
            {/*                            <label htmlFor="subject"*/}
            {/*                                   className="block text-sm font-medium text-gray-900">Subject</label>*/}
            {/*                            <div className="mt-1">*/}
            {/*                                <input type="text" name="subject" id="subject"*/}
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary focus:border-primary border-gray-300 rounded-md">*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="sm:col-span-2">*/}
            {/*                            <div className="flex justify-between">*/}
            {/*                                <label htmlFor="message"*/}
            {/*                                       className="block text-sm font-medium text-gray-900">Message</label>*/}
            {/*                                <span id="message-max"*/}
            {/*                                      className="text-sm text-gray-500">Max. 500 characters</span>*/}
            {/*                            </div>*/}
            {/*                            <div className="mt-1">*/}
            {/*                                /!*@ts-ignore*!/*/}
            {/*                                <textarea id="message" name="message" rows="4"*/}
            {/*                                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary focus:border-primary border border-gray-300 rounded-md"*/}
            {/*                                          aria-describedby="message-max"></textarea>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="sm:col-span-2 sm:flex sm:justify-end">*/}
            {/*                            <button type="submit"*/}
            {/*                                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:w-auto">Submit*/}
            {/*                            </button>*/}
            {/*                        </div>*/}
            {/*                    </form>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Footer/>
        </>
    )
}