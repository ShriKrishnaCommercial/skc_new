import Header from "@/components/Header";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <Header/>
            <div className="bg-white">

                <div className="relative pb-32 bg-gray-900">
                    <div className="absolute inset-0">
                        <Image className="w-full h-full object-cover"
                               width="400"
                               height='400'
                               src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                               alt=""/>
                        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Contact
                            us</h1>
                        <p className="mt-6 max-w-3xl text-xl text-gray-300">Please feel free to reach out to us at any
                            time. We're here to assist you with any questions or concerns you may have.</p>
                    </div>
                </div>


                <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                         aria-labelledby="contact-heading">
                    <h2 className="sr-only" id="contact-heading">Contact us</h2>
                    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                        <div className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div
                                    className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Contact us</h3>
                                <p className="mt-4 text-base text-gray-500">
                                    <a href="tel:+91-9031512370"
                                       className="hover:text-indigo-600">+91-9031512370</a> / <a
                                    href="tel:+91-9341747014" className="hover:text-indigo-600">+91-9341747014</a></p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="tel:+91-9031512370"
                                   className="text-base font-medium text-indigo-700 hover:text-indigo-600">Call
                                    us<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div
                                    className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Registered office</h3>
                                <p className="mt-4 text-base text-gray-500">Marwari Para Road, Chowk Bazar, Jugsalai,
                                    Jamshedpur-831006, Jharkhand, India.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" className="text-base font-medium text-indigo-700 hover:text-indigo-600">Get
                                    Directions<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div
                                    className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Warehouse/Godown</h3>
                                <p className="mt-4 text-base text-gray-500">Shiv Ghat Road, Near S.T John, Jugsalai,
                                    Jamshedpur- 831006</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" className="text-base font-medium text-indigo-700 hover:text-indigo-600">Get
                                    Directions<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-0 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                         aria-labelledby="contact-heading">

                    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                        <div className="flex flex-col bg-white rounded-2xl shadow-2xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div
                                    className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Branch Office</h3>
                                <p className="mt-4 text-base text-gray-500">
                                    Behind Natraj Royal Hotel, 3rd Floor, Unit 4, Above Dalmia Cement Shop, Chorda
                                    Bypass Road, P.S. Jajpur Road, Byasanagar, Jajpur, Odisha, 755019
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="tel:+91-9031512370"
                                   className="text-base font-medium text-indigo-700 hover:text-indigo-600">Get
                                    Directions
                                    <span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white rounded-2xl shadow-2xl h-[310px]">
                            <div className="flex-1 relative pt-10 px-2">
                                <div
                                    className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                </div>

                                <p className=" text-base text-gray-500">

                                    <iframe
                                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7097641804384153600"
                                        height="170" width="100%" frameBorder="0"
                                        title="Embedded post"></iframe>
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="https://www.linkedin.com/company/shri-krishna-commercialdotcom/posts/?feedView=all"
                                   className="text-base font-medium text-indigo-700 hover:text-indigo-600">View LinkedIn
                                    profile<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white rounded-2xl shadow-2xl h-[310px]">
                            <div className="flex-1 relative pt-10 px-2">
                                <div
                                    className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clipRule="evenodd"
                                              d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                                              fill="currentColor"/>
                                        <path fill-rule="evenodd" clipRule="evenodd"
                                              d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                                              fill="currentColor"/>
                                    </svg>
                                </div>

                                <p className=" text-base text-gray-500">

                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14715.302141068663!2d86.1933684!3d22.771855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3cf46f87505%3A0xaac3342c5205a7c9!2sShri%20Krishna%20Commercial!5e0!3m2!1sen!2sin!4v1692247880117!5m2!1sen!2sin"
                                        height="170" width="100%" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="https://goo.gl/maps/BHW12AFLMrVoBDvK6"
                                   className="text-base font-medium text-indigo-700 hover:text-indigo-600">Get Directions<span aria-hidden="true"> &rarr;</span></a>
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

            {/*                <div className="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">*/}
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
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div>*/}
            {/*                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">Last*/}
            {/*                                name</label>*/}
            {/*                            <div className="mt-1">*/}
            {/*                                <input type="text" name="last-name" id="last-name"*/}
            {/*                                       autoComplete="family-name"*/}
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div>*/}
            {/*                            <label htmlFor="email"*/}
            {/*                                   className="block text-sm font-medium text-gray-900">Email</label>*/}
            {/*                            <div className="mt-1">*/}
            {/*                                <input id="email" name="email" type="email" autoComplete="email"*/}
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>*/}
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
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"*/}
            {/*                                       aria-describedby="phone-optional"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="sm:col-span-2">*/}
            {/*                            <label htmlFor="subject"*/}
            {/*                                   className="block text-sm font-medium text-gray-900">Subject</label>*/}
            {/*                            <div className="mt-1">*/}
            {/*                                <input type="text" name="subject" id="subject"*/}
            {/*                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">*/}
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
            {/*                                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"*/}
            {/*                                          aria-describedby="message-max"></textarea>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="sm:col-span-2 sm:flex sm:justify-end">*/}
            {/*                            <button type="submit"*/}
            {/*                                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">Submit*/}
            {/*                            </button>*/}
            {/*                        </div>*/}
            {/*                    </form>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    )
}