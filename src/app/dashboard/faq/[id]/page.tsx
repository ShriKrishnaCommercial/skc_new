// @ts-nocheck
"use client"
// @ts-nocheck
//@ts-ignore
import DashboardHeader from "@/components/Dashboard/header";
import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {Dialog, Transition} from '@headlessui/react'

// import toast, {Toaster} from 'react-hot-toast';
// import {CKEditor} from "@ckeditor/ckeditor5-react";
// import {EventInfo} from "framer-motion";
// import {getCookie} from "cookies-next";
// import {jwtDecode} from "jwt-decode";


export default function dynamicfaq({params}: { params: { id: string } }) {

    // let token : any = null;
    // try{
    //     token = getCookie("jwt");
    //     // @ts-ignore
    //     const decodedToken = jwtDecode(token);
    //     // @ts-ignore
    //     if(decodedToken.role != 'ADMIN'){
    //         toast.error("Wrong Token", {
    //             position: 'top-right',
    //             // @ts-ignore
    //             autoClose: 3000,
    //             closeOnClick: true
    //         })
    //     }
    //     if(token == undefined) {
    //         // @ts-ignore
    //         router.push("/dashboard/login");
    //         toast.error("Token Expired !", {
    //             position: 'top-right',
    //             // @ts-ignore
    //             autoClose: 3000,
    //             closeOnClick: true
    //         });
    //     }
    // }catch (e){
    //     // @ts-ignore
    //     console.error(e.message);
    // }

    let [currenteid, setCurrenteid] = useState('')
    let [faqs, setFaqs] = useState([])
    const [open, setOpen] = useState(false)
    const [newques, setNewques] = useState('')
    const [newans, setNewans] = useState('')
    const [updateque, setSetupdateque] = useState('')
    const [updateans, setSetupdateans] = useState('')
    const [updateid, setUpdateid] = useState('')
    // @ts-ignore
    async function dynamic_faq() {
        var options = {
            method: 'POST',
            url: '/api/faq',
            headers: {'Content-Type': 'application/json'},
            data: {product_id: params.id, question: newques, answer: newans}
        };

        axios.request(options).then(function (response) {

            get_all();
            setOpen(false)
        }).catch(function (error) {
            console.error(error);
        });
    }
    // @ts-ignore
    async function update_faq(id) {
        var options = {
            method: 'PUT',
            url: '/api/faq/'+id,
            headers: {'Content-Type': 'application/json'},
            data: {product_id: params.id, question:updateque, answer: updateans}
        };

        axios.request(options).then(function (response) {
            get_all()
            alert('updated !')
            setSetupdateans('')
            setSetupdateque('')
            setUpdateid('')
        }).catch(function (error) {
            console.error(error);
        });
    }
    // @ts-ignore
    async function delete_faq(id) {
        var options = {
            method: 'DELETE',
            url: '/api/faq/' + id,


        };
        axios.request(options).then(function (response) {
            get_all();

        }).catch(function (error) {
            console.error(error);
        });
    }
    // @ts-ignore
    async function get_all() {
        var options = {
            method: 'GET',
            url: '/api/faq/single/' + params.id,
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            setCurrenteid(params.id)
            var data = JSON.parse(JSON.stringify(response.data))
            setFaqs(data)

        }).catch(function (error) {
            console.error(error);
        });
    }

    // @ts-ignore
    useEffect(() => {
        get_all();
    }, []);

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel
                                    className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-[80vw] sm:p-6">
                                    <div>

                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3"
                                                          className="text-base font-semibold leading-6 text-gray-900">
                                                New Faq
                                            </Dialog.Title>
                                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                <div>
                                                    <label htmlFor="first_name"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question </label>
                                                    <input type="text" id="first_name"
                                                           onInput={(e) => {
                                                               // @ts-ignore
                                                               setNewques(e.target.value)
                                                           }}
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="Question"
                                                           required/>
                                                </div>
                                                <div>
                                                    <label htmlFor="last_name"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        Answer</label>
                                                    <input type="text" id="last_name"
                                                           onInput={(e) => {
                                                               // @ts-ignore
                                                               setNewans(e.target.value)
                                                           }}
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="Answer"

                                                           required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => dynamic_faq()}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <DashboardHeader title={"FAW List"}/>
            <main className="-mt-32">
                <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">

                    <div
                        className="relative h-max overflow-hidden rounded  opacity-100">
                        <div
                            className="mx-auto max-w-7xl  pb-12 ">
                            <div className="px-4 sm:px-6 lg:px-8">
                                <div className="sm:flex sm:items-center">
                                    <div className="sm:flex-auto w-full">
                                        <h1 className="text-base font-semibold leading-6 text-gray-900">Data</h1>
                                        <div className="flex w-full">
                                            <p className="mt-2 text-sm text-gray-700">
                                                A list of FAQs
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpen(true)
                                                }}
                                                className="order-last ml-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Add new
                                            </button>

                                        </div>


                                    </div>

                                </div>
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle">
                                            <div className="-mt-30">
                                                <div>

                                                    {
                                                        // @ts-ignore
                                                        faqs.map((e) => {
                                                            return (
                                                                // @ts-ignore
                                                                <div key={e._id}>

                                                                    <div  className="grid gap-6 mb-6 md:grid-cols-4">
                                                                        <div className="col-span-2">
                                                                            <label htmlFor="first_name"
                                                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question </label>
                                                                            <input type="text" id="first_name"
                                                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                   placeholder="Question"
                                                                                   value={
                                                                                       // @ts-ignore
                                                                                        updateid === e._id ? updateque : e.question
                                                                                   }
                                                                                   onInput={(n) => {
                                                                                       // @ts-ignore
                                                                                       setUpdateid(e._id) // @ts-ignore
                                                                                       setSetupdateque(n.target.value)
                                                                                   }}
                                                                                   required/>
                                                                        </div>
                                                                        <div className="col-span-2">
                                                                            <label htmlFor="last_name"
                                                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                Answer</label>
                                                                            <input type="text" id="last_name"
                                                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                   placeholder="Answer"
                                                                                // @ts-ignore
                                                                                   value={
                                                                                       // @ts-ignore
                                                                                       e.answer}
                                                                                   onInput={(n) => { // @ts-ignore
                                                                                       setSetupdateans(n.target.value)
                                                                                   }}
                                                                                   required/>
                                                                        </div>

                                                                    </div>
                                                                    <div className="grid gap-6 mb-6 md:grid-cols-8">
                                                                        <button type="button"
                                                                                onClick={(m => {
                                                                                    // @ts-ignore
                                                                                    delete_faq(e._id)
                                                                                })}
                                                                                className="rounded-full h-10 bg-red-500 p-1 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                                                                            Delete
                                                                        </button>
                                                                        <button type="button"
                                                                                onClick={(m => {
                                                                                    // @ts-ignore

                                                                                    update_faq(e._id)
                                                                                })}
                                                                                className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                                            Update
                                                                        </button>
                                                                    </div>

                                                                </div>


                                                            )
                                                        })
                                                    }


                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>


        </>
    )
}


