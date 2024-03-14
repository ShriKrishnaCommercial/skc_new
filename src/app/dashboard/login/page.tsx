"use client"
import axios from "axios";
import {FormEvent, FormEventHandler, useState} from "react";
import {log} from "node:util";
import FormData from "form-data";
import {headers} from "next/headers";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {useRouter} from "next/navigation";
import {setCookie} from "cookies-next";




export default function Example() {


    const router = useRouter();

    async function showError(err: string){
        toast.error(err, {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true
        });
    }

    async function showOk(msg: string){
        toast.success(msg, {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true
        })
    }

    const [auth, setAuth] = useState(false);

    async function login(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();



        const formData = new FormData(event.currentTarget);

        axios.post('/api/login', formData, {
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res =>{
            if(res.data.error){
                showError(res.data.message);
            } else{
                if(res.data.token){
                    setCookie("jwt", res.data.token)
                    setAuth(true);
                    router.push("/dashboard");
                }
            }
        }).catch(err => {
            console.error(err)
            showError(err.message)
        })


    }


    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="/logo.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={login}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                               Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>

                        </div>
                    </form>
                    <ToastContainer/>
                </div>
            </div>
        </>
    )
}
