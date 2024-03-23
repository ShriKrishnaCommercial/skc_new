"use client"
import DashboardHeader from "@/components/Dashboard/header";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import Link from "next/link";
import {getCookie} from "cookies-next";
import {jwtDecode} from "jwt-decode";

export default function Page({params}: { params: { product: string } }) {
    const token = getCookie("jwt");
    // @ts-ignore
    const decodedToken = jwtDecode(token);
    // @ts-ignore
    if (decodedToken.role != 'ADMIN') {
        toast.error("Wrong Token", {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true
        })
    }


    if (token == undefined) {
        // @ts-ignore
        router.push("/dashboard/login");
        toast.error("Token Expired !", {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true
        });
    }
    const [subproduct, setsubprodut] = useState([]);
    const [name, setname] = useState("");
    const [file, setfile] = useState("");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isupdate, setupdate] = useState(false);
    const [idt, setidt] = useState("");

//@ts-ignore
    function deletesp(id) {
        const options = {
            method: 'DELETE',
            url: '/api/subproduct/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+token
            }
        };

        axios.request(options).then(function (response) {
            toast("Deleted")
            getall();
        }).catch(function (error) {
            console.error(error);
        });

    }

//@ts-ignore
    function updateshow(model) {
        setname(model.name)
        setupdate(true);
        // @ts-ignore
        onOpenChange(true)
        setidt(model._id)
    }

    function updatesubproduct() {
        const form = new FormData();
        form.append("name", name);
        if (file != null) {
            form.append("subproduct", file);
        }


        const options = {
            method: 'PUT',
            url: '/api/subproduct/' + idt,
            headers: {
                'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
                'Authorization' : 'Bearer '+token
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

    function newsubproduct() {
        const form = new FormData();
        form.append("name", name);
        form.append("category", params.product);
        form.append("subproduct", file);

        const options = {
            method: 'POST',
            url: '/api/subproduct/subproduct',
            headers: {
                'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
                'Authorization': 'Bearer '+token
            },
            data: form
        };

        axios.request(options).then(function (response) {
            toast("New Subproduct added")
            // @ts-ignore
            onOpenChange(false)
            getall()

        }).catch(function (error) {
            console.error(error);
        });
    }

    function getall() {
        const options = {
            method: 'GET',
            url: '/api/subproduct/' + params.product,
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+token
            }
        };
        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data))
            var n = data
            setsubprodut(n)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getall()
    }, []);
    return (
        <div className="min-h-full">
            <ToastContainer/>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add new Sub Product</ModalHeader>
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
                                            type="name"
                                            name="email"
                                            required={true}
                                            id="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="sub product name"
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
                                                //@ts-ignore
                                                setfile(e.target.files[0])
                                            }}
                                            type="file"
                                            required={true}
                                            name="file"
                                            id="image"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onClick={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={isupdate == false ? newsubproduct : updatesubproduct}>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )
                    }
                </ModalContent>
            </Modal>
            <DashboardHeader title={params.product}/>
            <button
                type="button" onClick={onOpen}
                className="fixed bottom-3 right-14 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                New Subproduct
            </button>
            <main className="-mt-32">
                <div className="rounded-lg  bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">
                    <div
                        className="relative h-max overflow-hidden rounded  opacity-75">
                        <div
                            className="mx-auto max-w-7xl  pb-12 ">
                            <ul role="list"
                                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                {subproduct.map((file) => (
//@ts-ignore
                                    <li key={file._id} className="relative">
                                        {/* @ts-ignore*/}
                                        <Link href={params.product + "/" + file._id}>
                                            <div
                                                className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                                {/* @ts-ignore*/}
                                                <img src={"/img/subproduct/" + file.image} alt=""
                                                     className="pointer-events-none object-contain group-hover:opacity-75"/>
                                                <button type="button" className="absolute inset-0 focus:outline-none">
                                                    {/* @ts-ignore*/}
                                                    <span className="sr-only">View details for {file.category}</span>
                                                </button>
                                            </div>
                                        </Link>
                                        <div className="md:flex justify-between">
                                            <div className="w-40 h-20">
                                                {/* @ts-ignore*/}
                                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.name}</p>
                                                {/* @ts-ignore*/}
                                                <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.partner}</p>
                                            </div>
                                            <div className="order-last mt-1">
                                                <div className="mt-3 md:mt-0 flex">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         onClick={(E) => {
                                                             // @ts-ignore
                                                             deletesp(file._id)
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
    )
}