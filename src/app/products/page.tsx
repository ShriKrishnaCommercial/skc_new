/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
'use client'
import {Fragment, useEffect, useRef, useState} from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';


const categories = [
    {
        name: 'Instrumental',
        href: '#',
        imageSrc: '/assets/img/products/instrumentation.jpg',
    },
    {
        name: 'Electrical',
        href: '#',
        imageSrc: '/assets/img/products/electrical.jpg',
    },
    {
        name: 'Mechanical',
        href: '#',
        imageSrc: '/assets/img/products/mechanical.jpg',
    }, {
        name: 'Safety ',
        href: '#',
        imageSrc: '/assets/img/products/safety.jpg',
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
                            <SplideSlide key={i}>
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
                                    className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-4 xl:gap-x-8">
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
                    <div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="md:flex md:items-center md:justify-between">
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Trending products</h2>
                            <a href="#"
                               className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                                Shop the collection<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>


                        <div
                            className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                            {products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div
                                        className="w-full h-56 bg-transparent rounded-md  overflow-hidden group-hover:opacity-75 lg:h-40 ">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="w-full h-full object-center object-contain"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-sm md:hidden">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Shop the collection<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Featured section */}
                <section
                    aria-labelledby="social-impact-heading"
                    className="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
                >
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="absolute inset-0">
                            <video src="/assets/video/office.mp4" autoPlay={true}
                                   className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-20 sm:px-12 lg:px-16">
                            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                                <h2
                                    id="social-impact-heading"
                                    className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                                >
                                    <span className="block sm:inline">Level up</span>
                                    <span className="block sm:inline">your desk</span>
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Explore a wide range of electrical solutions at Shrikrishna Commercial. From LED
                                    Lights to Cables, Batteries, and more, our products are designed for performance and
                                    reliability. Browse our catalog for all your electrical needs.
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Shop Workspace
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Collection section */}

                {/* Featured section */}

            </main>

            <Footer/>
        </div>
    )
}
