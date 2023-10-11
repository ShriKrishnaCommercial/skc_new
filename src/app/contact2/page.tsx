import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import React from "react";


export default function Contact2() {
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
                                Contact Us
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Please feel free to reach out to us at any
                                time. We're here to assist you with any questions or concerns you may have
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
                <div className="isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8">
                    <div
                        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>

                    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    Company
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                        </select>

                                    </div>
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
              <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
              />
                                </div>
                            </div>

                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-left text-center">Get
                                        in touch</h2>
                                    <p className="mt-4 leading-7 text-gray-600">

                                    </p>
                                </div>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Contact us</h3>
                                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                            <div>
                                                <dt className="sr-only">Contact Us</dt>
                                                <dd>
                                                    <a className="font-semibold text-indigo-600"
                                                       href="tel:+91-9031512370">
                                                        +91-9031512370
                                                    </a>
                                                </dd>
                                            </div>
                                            <div className="mt-1">
                                                <dt className="sr-only">Phone number</dt>
                                                <dd>+91-93417470145</dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Registered
                                            office</h3>
                                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                            <div>
                                                <dt className="sr-only">Registered office</dt>
                                                <dd>
                                                    <a className="font-semibold text-indigo-600"
                                                       href="https://goo.gl/maps/BHW12AFLMrVoBDvK6">
                                                        Marwari Para Road, Chowk Bazar, Jugsalai, Jamshedpur-831006,
                                                        Jharkhand, India.
                                                    </a>
                                                </dd>
                                            </div>
                                            <div className="mt-1">
                                                <dt className="sr-only">Get Direction</dt>
                                                <dd><a href="https://goo.gl/maps/BHW12AFLMrVoBDvK6">Get Direction</a>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Warehouse/Godown</h3>
                                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                            <div>
                                                <dt className="sr-only">Warehouse/Godown</dt>
                                                <dd>
                                                    <a className="font-semibold text-indigo-600"
                                                       href="https://goo.gl/maps/BHW12AFLMrVoBDvK6">
                                                        Shiv Ghat Road, Near S.T John, Jugsalai, Jamshedpur- 831006
                                                    </a>
                                                </dd>
                                            </div>
                                            <div className="mt-1">
                                                <dt className="sr-only">Get Direction</dt>
                                                <dd><a href="https://goo.gl/maps/BHW12AFLMrVoBDvK6">Get Direction</a>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Branch
                                            Office</h3>
                                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                            <div>
                                                <dt className="sr-only">Branch office</dt>
                                                <dd>
                                                    <a className="font-semibold text-indigo-600"
                                                       href="https://goo.gl/maps/BHW12AFLMrVoBDvK6">
                                                        Behind Natraj Royal Hotel, 3rd Floor, Unit 4, Above Dalmia
                                                        Cement Shop, Chorda Bypass Road, P.S. Jajpur Road, Byasanagar,
                                                        Jajpur, Odisha, 755019
                                                    </a>
                                                </dd>
                                            </div>
                                            <div className="mt-1">
                                                <dt className="sr-only">Get Direction</dt>
                                                <dd><a href="https://goo.gl/maps/BHW12AFLMrVoBDvK6">Get Direction</a>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <Footer/>
        </>
    )
}