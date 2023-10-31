'use client'
import {Fragment, useEffect, useRef, useState} from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {random} from "nanoid";
import axios from "axios";
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css"
import Link from "next/link";

const categories = [
    {
        name: 'Electrical',
        href: '#',
        imageSrc: '/assets/img/products/electrical.jpg',
    },
    {
        name: 'Instrumental',
        href: '#',
        imageSrc: '/assets/img/products/instrumentation.jpg',
    },
    {
        name: 'Automation',
        href: '#',
        imageSrc: '/assets/img/products/automation.jpg',
    }
    , {
        name: 'Safety ',
        href: '#',
        imageSrc: '/assets/img/products/safety.jpg',
    },
    {
        name: 'Mechanical',
        href: '#',
        imageSrc: '/assets/img/products/mechanical.jpg',
    }

]
const products = [
    {
        id: 1,
        name: 'Batteries',
        color: 'white',
        href: '/products/id',

        imageSrc: 'https://shrikrishnacommercial.com/assets/img/sub_product/309-Batteries.png',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    }, {
        id: 1,
        name: 'VORTEX FLOWMETER\n',
        color: 'white',
        price: '',
        href: '/products/id',
        imageSrc: 'https://shrikrishnacommercial.com/assets/img/end_product/119-Vortex%20Flowmeter.png',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        id: 1,
        name: 'Ideal product image',
        color: 'Natural',
        price: '$75',
        href: '/products/id',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    // More products...
]

// @ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Products() {


    let splide1 = useRef(null);
    let [current_image, set_current_image] = useState(0);

    const [top, settop] = useState([])
    const [catpro, setcatpro] = useState([])

    function getcatpro() {
        const options = {
            method: 'GET',
            url: '/api/endproduct/products/page',
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            let data = JSON.parse(JSON.stringify(response.data))
            setcatpro(data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    function gettop() {
        const options = {
            method: 'GET',
            url: '/api/endproduct/any/5',
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            let data = JSON.parse(JSON.stringify(response.data))
            settop(data);

        }).catch(function (error) {
            console.error(error);
        });
    }


    let data = [
        {
            'img': '/img/Electrical.png',
            'title': 'Electrical',
            'msg': 'We have wide range of electrical products'
        },
        {
            'img': '/img/Instrumentation.png',
            'title': 'Instrumental',
            'msg': 'We have wide range of mechanical products'
        }, {
            'img': '/img/Mechanical.png',
            'title': 'Mechanical',
            'msg': 'We have wide range of instrumental products'
        }
    ];
    useEffect(() => {
        // @ts-ignore
        getcatpro()
        gettop();
        // @ts-ignore
        splide1.current.splide.on('move', (n) => {
            set_current_image(n)
        })
    }, [])
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Header/>

            {/* Hero section */}

            {/* Decorative image and overlay */}
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
                    (data.map((a, i) => {
                        return (
                            <SplideSlide key={i + 1}>
                                <div className="relative h-[300px]  bg-gray-900">
                                    <div>
                                        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                                            <img
                                                src={a.img}
                                                alt=""
                                                className="w-full h-full object-center object-cover"
                                            />
                                        </div>
                                        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-75"/>

                                        {/* Navigation */}


                                        <div
                                            className="relative max-w-3xl mx-auto py-20 px-6 flex flex-col items-center text-center sm:py-12 lg:px-0">
                                            <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">{a.title}</h1>

                                            <a
                                                href="#"
                                                className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
                                            >
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        )
                    }))
                }

            </Splide>


            <main>
                {/* Category section */}
                <section aria-labelledby="category-heading" className="pt-10  xl:max-w-7xl xl:mx-auto xl:px-8">
                    <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                        <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                            Shop by Category
                        </h2>
                        <a href="#"
                           className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Browse all categories<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-4 flow-root">
                        <div className="-my-2">
                            <div className="box-content py-2 relative h-20 overflow-x-auto xl:overflow-visible">
                                <div
                                    className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                    {categories.map((category) => (
                                        <a
                                            key={category.name}
                                            href={category.href}
                                            className="relative w-56 h-20 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                                        >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover"/>
                      </span>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                            />
                                            <span
                                                className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 px-4 sm:hidden">
                        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                            Browse all categories<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </section>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-xl font-bold text-gray-900">Customers also bought</h2>

                        <div
                            className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
                            {top.map((product) => (
                                // @ts-ignore
                                <div key={product._id}>
                                    <div className="relative">
                                        <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                            {/*@ts-ignore*/}
                                            <img

                                                src={"/img/endproduct/" + product["image"]}

                                                alt={product["name"]}
                                                className="h-full w-full object-contain object-center "
                                            />
                                        </div>
                                        <div className="relative mt-4 h-10">
                                            {/*@ts-ignore*/}
                                            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                            {/*@ts-ignore*/}

                                        </div>
                                        <div
                                            className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                            />
                                            {/*@ts-ignore*/}

                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        {/*@ts-ignore*/}
                                        <a
                                            href={product["href"]}
                                            className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                        >
                                            View<span className="sr-only">, {/*@ts-ignore*/} {product["name"]}</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-10 lg:max-w-7xl lg:px-8">
                        <h2 className="text-xl font-bold text-gray-900">All Products</h2>

                        {
                            Object.entries(catpro).map(([key, value]) => {
                                return (
                                    <>

                                        <h2 className="text-xl font-bold text-gray-900 mt-5">{key}</h2>
                                        {/* @ts-ignore */}
                                        <AnimationOnScroll animateIn="animate__fadeInUp">
                                            <div
                                                className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">

                                                {

                                                    // @ts-ignore
                                                    value.map((product) => {
                                                        return (
                                                            <>
                                                                <div key={product._id}>
                                                                    <div className="relative">
                                                                        <div
                                                                            className="relative h-72 w-full overflow-hidden rounded-lg">
                                                                            {/*@ts-ignore*/}
                                                                            <img

                                                                                src={"/img/subproduct/" + product["image"]}

                                                                                alt={product["name"]}
                                                                                className="h-full w-full object-contain object-center "
                                                                            />
                                                                        </div>
                                                                        <div className="relative mt-4 h-10">
                                                                            {/*@ts-ignore*/}
                                                                            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                                                            {/*@ts-ignore*/}

                                                                        </div>
                                                                        <div
                                                                            className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                                                            <div
                                                                                aria-hidden="true"
                                                                                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                                                            />
                                                                            {/*@ts-ignore*/}

                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-6">
                                                                        {/*@ts-ignore*/}
                                                                        <Link
                                                                            href={"products/endproducts/" + product["name"] + "/" + product["_id"]}
                                                                            className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                                                        >
                                                                            View<span
                                                                            className="sr-only">, {/*@ts-ignore*/} { product["name"] }</span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </AnimationOnScroll>
                                    </>
                                )

                            })
                        }
                    </div>
                </div>
                {/* Featured section */}
                {/*<section*/}
                {/*    aria-labelledby="social-impact-heading"*/}
                {/*    className="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"*/}
                {/*>*/}
                {/*    <div className="relative rounded-lg overflow-hidden">*/}
                {/*        <div className="absolute inset-0">*/}
                {/*            <video src="/assets/video/office.mp4" autoPlay={true}*/}
                {/*                   className="w-full h-full object-center object-cover"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-20 sm:px-12 lg:px-16">*/}
                {/*            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">*/}
                {/*                <h2*/}
                {/*                    id="social-impact-heading"*/}
                {/*                    className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"*/}
                {/*                >*/}
                {/*                    <span className="block sm:inline">Level up</span>*/}
                {/*                    <span className="block sm:inline">your desk</span>*/}
                {/*                </h2>*/}
                {/*                <p className="mt-3 text-xl text-white">*/}
                {/*                    Explore a wide range of electrical solutions at Shrikrishna Commercial. From LED*/}
                {/*                    Lights to Cables, Batteries, and more, our products are designed for performance and*/}
                {/*                    reliability. Browse our catalog for all your electrical needs.*/}
                {/*                </p>*/}
                {/*                <a*/}
                {/*                    href="#"*/}
                {/*                    className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"*/}
                {/*                >*/}
                {/*                    Shop Workspace*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/* Collection section */}

                {/* Featured section */}

            </main>

            <Footer/>
        </div>
    )
}
