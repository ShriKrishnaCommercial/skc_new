'use client'
import {NextUIProvider} from '@nextui-org/react'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Head from "next/head";

const inter = Inter({subsets: ['latin']})

// export const metadata: Metadata = {
//     title: 'Shri Krishna Commercials',
//     description: 'Generated by create next app',
//
// }

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap"
                  rel="stylesheet"/>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
        </Head>


        <body className={inter.className}>

        <div className="icon-bar">
            <a href="mailto:info@skcommercial.in" className="email"><i className="fa fa-envelope"></i></a>

            <a href="https://www.facebook.com/profile.php?id=100082803202459" className="facebook"><i
                className="fa fa-facebook"></i></a>

            <a href="https://www.linkedin.com/company/89841311/admin/" className="linkedin"><i
                className="fa fa-linkedin"></i></a>
            <a href="https://www.instagram.com/shri_krishna_commercial_/ " className="instagram"><i
                className="fa fa-instagram"></i></a>

        </div>

        <NextUIProvider>
            {children}
        </NextUIProvider>
        </body>
        </html>
    )
}
