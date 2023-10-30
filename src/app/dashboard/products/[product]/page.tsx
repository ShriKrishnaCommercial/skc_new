"use client"
import DashboardHeader from "@/components/Dashboard/header";
import React from "react";

export default function Page({params}: { params: { product: string } }) {
    return (
        <div className="min-h-full">
            <DashboardHeader title={params.product}/>
            <main className="-mt-32">
                <div className="rounded-lg bg-white px-1 py-6 shadow sm:px-4 mx-5 md:mx-10 ">
                    <div
                        className="relative h-max overflow-hidden rounded  opacity-75">
                        <div
                            className="mx-auto max-w-7xl  pb-12 ">
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}