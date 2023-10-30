'use client'
import {useEffect, useId, useState} from 'react'
import Image from 'next/image'
import {Tab} from '@headlessui/react'
import clsx from 'clsx'
import {Container} from "./Container";


const days = [
    {
        name: 'Opening Day',
        date: 'April 4',
        dateTime: '2022-04-04',
        speakers: [
            {
                name: 'Steven McHail',
                role: 'Designer at Globex Corporation',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Jaquelin Isch',
                role: 'UX Design at InGen',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Dianne Guilianelli',
                role: 'General Manager at Initech',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Ronni Cantadore',
                role: 'Design Engineer at Weyland-Yutani',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Erhart Cockrin',
                role: 'Product Lead at Cyberdyne Systems',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Parker Johnson',
                role: 'UI Designer at MomCorp',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
        ],
    },
    {
        name: 'Speakers & Workshops',
        date: 'April 5',
        dateTime: '2022-04-05',
        speakers: [
            {
                name: 'Damaris Kimura',
                role: 'Senior Engineer at OCP',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Ibrahim Frasch',
                role: 'Programmer at Umbrella Corp',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Cathlene Burrage',
                role: 'Frontend Developer at Buy n Large',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Rinaldo Beynon',
                role: 'Data Scientist at Rekall',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Waylon Hyden',
                role: 'DevOps at RDA Corporation',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Giordano Sagucio',
                role: 'Game Developer at Soylent Corp',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
        ],
    },
    {
        name: 'Interviews',
        date: 'April 6',
        dateTime: '2022-04-06',
        speakers: [
            {
                name: 'Andrew Greene',
                role: 'Frontend Developer at Ultratech',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Heather Terry',
                role: 'Backend Developer at Xanatos Enterprises',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Piers Wilkins',
                role: 'Full stack Developer at BiffCo',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Gordon Sanderson',
                role: 'Mobile Developer at Cobra Industries',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Kimberly Parsons',
                role: 'Game Developer at Tyrell Corporation',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
            {
                name: 'Richard Astley',
                role: 'CEO at Roll Out',
                image: "/assets/img/leaders/Anuj_Sanyal.jpeg",
            },
        ],
    },
]

export function Employees() {
    let id = useId()
    let [tabOrientation, setTabOrientation] = useState('horizontal')
    const people = [
        {
            name: 'Anuj Sanyal ',
            role: 'Sr. Executive: Back Office',
            imageUrl:
                "/assets/img/leaders/Anuj_Sanyal.jpeg"
        }, {
            name: 'Raj Sinha ',
            role: 'Sr. Executive: Back Office',
            imageUrl:
                "/assets/img/leaders/Raj Sinha.jpeg"
        }, {
            name: 'Atul Sharma',
            role: 'Manager',
            imageUrl:
                "/assets/img/leaders/Atul_Sharma.jpeg"
        }, {
            name: 'Sanjay Kumar',
            role: 'Sr. Executive Back Office',
            imageUrl:
                "/assets/img/leaders/Sanjay Kumar.jpeg"
        },
        // More people...
    ]
    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({matches}) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }



        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <section
            id="speakers"
            aria-labelledby="speakers-title"
            className="py-20 sm:py-32"
        >
            <svg aria-hidden="true" width={0} height={0}>
                <defs>
                    <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
                        <path
                            d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0"/>
                    </clipPath>
                    <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
                        <path
                            d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7"/>
                    </clipPath>
                    <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
                        <path
                            d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0"/>
                    </clipPath>
                </defs>
            </svg>
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="speakers-title"
                        className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
                    >
                        Meet our leadership
                    </h2>
                    <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
                        Meet our leadership, a team of visionaries and experts, guiding our company towards innovation
                        and success.
                    </p>
                </div>
                <>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4  mt-10  ">
                        {people.map((e, i) => {
                            return (
                                <div key={i}>
                                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                                        <div
                                            className={clsx(
                                                'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                                                [
                                                    'border-blue-300',
                                                    'border-indigo-300',
                                                    'border-sky-300',
                                                ][i % 3]
                                            )}
                                        />
                                        <div
                                            className="absolute inset-0 bg-indigo-50"
                                            style={{clipPath: `url(#${id}-${i % 3})`}}
                                        >
                                            <Image
                                                className="transition duration-300 group-hover:scale-110"
                                                src={e.imageUrl}
                                                alt=""
                                                layout="fill"
                                                objectFit="auto"
                                                priority
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                                        {e.name}
                                    </h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">
                                        {e.role}
                                    </p>
                                </div>
                            )
                        })
                        }
                    </div>
                </>

            </Container>
        </section>
    )
}
