"use client"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import DashboardHeader from "@/components/Dashboard/header";
import axios from "axios";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
// import {mod} from "@internationalized/date/src/utils";

export default function Page({params}: { params: { endproduct: string } }) {
    const [endproducts, setendproducts] = useState([]);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [name, setname] = useState("")
    const [image, setimage] = useState("")
    const [info, setninfo] = useState("")
    const [partner, setpartner] = useState("")
    const [Highlights, setHighlights] = useState("")
    const [isupdate, setupdate] = useState(false);
    const [idt, setidt] = useState("");

    // @ts-ignore
    function updateshow(model ) {
        setname(model.name)
        setninfo(model.info)
        setpartner(model.partner)
        setHighlights(model.Highlights)
        // @ts-ignore
        onOpenChange(true)
        setupdate(true);
        setidt(model._id)
    }

    function updateproduct() {
        const form = new FormData();
        form.append("name", name);
        if (image != "") {
            form.append("endproduct", image);
        }
        form.append("info", info);
        form.append("partner", partner);
        form.append("category", params.endproduct);
        form.append("Highlights", Highlights);

        const options = {
            method: 'PUT',
            url: '/api/endproduct/'+idt,
            headers: {
                'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',

            },
            data: form
        };

        axios.request(options).then(function (response) {
            toast("Updated")
            setupdate(false);
            // @ts-ignore
            onOpenChange(false);
            getall();
        }).catch(function (error) {
            console.error(error);
        });
    }
    // @ts-ignore
    function deleteproduct(id) {
        // console.log(id)
        const options = {
            method: 'DELETE',
            url: '/api/endproduct/' + id,

        };

        axios.request(options).then(function (response) {
            toast("Deleted")
            getall()
        }).catch(function (error) {
            console.error(error);
        });
    }

    function submitendproduct() {
        const form = new FormData();
        form.append("name", name);
        form.append("endproduct", image);
        form.append("info", info);
        form.append("partner", partner);
        form.append("category", params.endproduct);
        form.append("Highlights", Highlights);

        const options = {
            method: 'POST',
            url: '/api/endproduct/new',
            headers: {
                'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
            },
            data: form
        };

        axios.request(options).then(function (response) {
            toast("Added new product");
            // @ts-ignore
            onOpenChange(false);
            getall();
        }).catch(function (error) {
            console.error(error);
        });
    }

    function getall() {
        const options = {
            method: 'GET',
            url: '/api/endproduct/' + params.endproduct,
        };
        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data))
            var n = data
            setendproducts(n)
        }).catch(function (error) {
            console.error(error);
        });
    }
    // @ts-ignore
    useEffect(() => {
        getall();
    }, [])
    return (

        <>
            <ToastContainer/>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add new End Product</ModalHeader>
                            <ModalBody>
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={(e) => {
                                                setname(e.target.value)
                                            }}
                                            value={name}
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Product name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Partner
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={(e) => {
                                                setpartner(e.target.value)
                                            }}
                                            value={partner}
                                            type="text"
                                            name="partner"
                                            id="partner"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Product name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Image
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={(e) => {
                                                // @ts-ignore
                                                setimage(e.target.files[0])
                                            }}
                                            type="file"
                                            name="file"
                                            id="image"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="comment"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Information
                                    </label>
                                    <div className="mt-2">
                                    <textarea
                                        onChange={(e) => {
                                            setninfo(e.target.value)
                                        }}
                                        value={info}
                                        rows={4}
                                        name="information"
                                        id="information"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="comment"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Highlight
                                    </label>
                                    <div className="mt-2">
                                    <textarea
                                        value={Highlights}
                                        onChange={(e) => {
                                            setHighlights(e.target.value)
                                        }}
                                        rows={2}
                                        name="Highlight"
                                        id="Highlight"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    />
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onClick={onClose}>
                                    Close
                                </Button>
                                <Button color="primary"
                                        onClick={isupdate === false ? submitendproduct : updateproduct}
                                >
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )
                    }
                </ModalContent>
            </Modal>

            <div className="min-h-full">
                <DashboardHeader title={"End Product"}/>
                <button
                    type="button" onClick={onOpen}
                    className="fixed bottom-3 right-14 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    New End Product
                </button>
                <main className="-mt-32">
                    <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">
                        <div
                            className="relative h-max overflow-hidden rounded  opacity-75">
                            <div
                                className="mx-auto max-w-7xl  pb-12 ">

                                <ul role="list"
                                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                    {endproducts.map((file) => (
                                        // @ts-ignore
                                        <li key={file._id} className="relative">
                                            <div
                                                className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                                {/*@ts-ignore*/}
                                                <img src={"/img/endproduct/" + file.image} alt=""
                                                     className="pointer-events-none object-contain group-hover:opacity-75"/>
                                                <button type="button" className="absolute inset-0 focus:outline-none">
                                                    {/*@ts-ignore*/}
                                                    <span className="sr-only">View details for {file.name}</span>

                                                </button>
                                            </div>
                                            <div className="flex justify-between">
                                                <div>
                                                    {/*@ts-ignore*/}
                                                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.name}</p>
                                                    {/*@ts-ignore*/}
                                                    <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.partner}</p>
                                                </div>
                                                <div className="order-last mt-1">
                                                    <div className="flex">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                             onClick={(E) => {
                                                                 // @ts-ignore
                                                                 deleteproduct(file._id)
                                                             }}
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                  d="M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z"
                                                                  fill="currentColor"/>
                                                        </svg>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"

                                                             onClick={(e) => {
                                                                 updateshow(file)
                                                             }}
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.3847 2.87868C19.2132 1.70711 17.3137 1.70711 16.1421 2.87868L14.0202 5.00052L13.313 4.29332C12.9225 3.9028 12.2894 3.9028 11.8988 4.29332C11.5083 4.68385 11.5083 5.31701 11.8988 5.70754L17.5557 11.3644C17.9462 11.7549 18.5794 11.7549 18.9699 11.3644C19.3604 10.9739 19.3604 10.3407 18.9699 9.95018L18.2629 9.24316L20.3847 7.12132C21.5563 5.94975 21.5563 4.05025 20.3847 2.87868Z"
                                                                fill="currentColor"/>
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                  d="M11.9297 7.09116L4.1515 14.8693C3.22786 15.793 3.03239 17.169 3.5651 18.2842L1.99994 19.8493L3.41415 21.2635L4.97931 19.6984C6.09444 20.2311 7.4705 20.0356 8.39414 19.112L16.1723 11.3338L11.9297 7.09116ZM13.3439 11.3338L11.9297 9.91959L5.56571 16.2835C5.17518 16.6741 5.17518 17.3072 5.56571 17.6978C5.95623 18.0883 6.5894 18.0883 6.97992 17.6978L13.3439 11.3338Z"
                                                                  fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}