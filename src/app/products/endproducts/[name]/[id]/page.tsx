"use client"
import {Fragment, useEffect, useState} from 'react'
import {Dialog, Disclosure, Menu, Popover, Tab, Transition} from '@headlessui/react'
// @ts-ignore
import Header from "@/components/Header";
// @ts-ignore
import Footer from "@/components/Footer";
import axios from "axios";


const products = [
    {
        id: 1,
        name: 'Organize Basic Set (Walnut)',
        price: '$149',
        rating: 5,
        reviewCount: 38,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 2,
        name: 'Organize Pen Holder',
        price: '$15',
        rating: 5,
        reviewCount: 18,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Organize Sticky Note Holder',
        price: '$15',
        rating: 5,
        reviewCount: 14,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Organize Phone Holder',
        price: '$15',
        rating: 4,
        reviewCount: 21,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    // More products...
]


export default function Example({params}: { params: { name: string, id: string } }) {
    const [open, setOpen] = useState(false)
    const [endproducts, setendproducts] = useState([]);

    function getall() {
        const options = {
            method: 'GET',
            url: '/api/endproduct/' + params.id,
        };
        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data))
            var n = data
            setendproducts(n)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getall()
    }, []);

    return (
        <div className="bg-white">
            <Header/>
            <main className="pb-24">
                <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">{decodeURIComponent(params.name)}</h1>
                    <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
                    </p>
                </div>
                {/* Filters */}
                <Disclosure
                    as="section"
                    aria-labelledby="filter-heading"
                    className="grid items-center border-b border-t border-gray-200"
                >
                    <h2 id="filter-heading" className="sr-only">
                        Filters
                    </h2>

                    <Disclosure.Panel className="border-t border-gray-200 py-10">
                        <div
                            className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">

                            </div>
                            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                                <fieldset>
                                    <legend className="block font-medium">Size</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">

                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="block font-medium">Category</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">

                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </Disclosure.Panel>
                    <div className="col-start-1 row-start-1 py-4">
                        <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                            <Menu as="div" className="relative inline-block">
                                <div className="flex">
                                    <Menu.Button
                                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">


                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </Disclosure>

                {/* Product grid */}
                <section aria-labelledby="products-heading"
                         className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div
                        className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {endproducts.map((product) => (
                            <div key={product["_id"]}
                                 className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                                <div
                                    className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                    <img
                                        src={"/img/endproduct/" + product["image"]}
                                        alt={product["name"]}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="pb-4 pt-10 text-center">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        <a href={params.id + "/final/" + product["_id"]}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product["name"]}
                                        </a>
                                    </h3>


                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pagination */}

            </main>

            <Footer/>
        </div>
    )
}
