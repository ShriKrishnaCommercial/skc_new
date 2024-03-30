'use client'
import DashboardHeader from "../../../components/Dashboard/header";
import axios from "axios";
import {Fragment, useEffect, useState} from "react";

export default function ViewAnalytics() {
    var [stats, setState] = useState([{
        name: 'Total',
        value: '0',
        change: '+4.75%',
        changeType: 'positive'
    }, {name: 'Month', value: '0', change: '+54.02%', changeType: 'negative'}, {
        name: 'Today',
        value: '0',
        change: '-1.39%',
        changeType: 'positive'
    }])

    const statuses = {
        Paid: 'text-green-700 bg-green-50 ring-green-600/20',
        Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
        Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
    }
    var [clients,setclient] =useState([
        {
            id: 1,
            name: 'State',
            imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
            lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
            data :[

            ]
        },
        {
            id: 2,
            name: 'City',
            imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
            lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
            data :[

            ]
        },

    ])

  const [country,setcountry]=useState([])

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function getdata() {
        var options = {
            method: 'GET', url: '/va/counts', headers: {'Content-Type': 'application/json',}
        };

        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data))
            var d = [...stats]
            d.map((e) => {
                if (e.name === 'Total') {
                    e.value = data['all']
                }
                if (e.name === 'Month') {
                    e.value = data['month'][0]['count']
                }
                if (e.name === 'Today') {
                    e.value = data['today'][0]['count']
                }

                setcountry(data['country'])
                var n = [...clients]
                n.map((e)=>{
                    // console.log()
                    if (e.name === 'City') {
                        e.data = data['city']

                    }
                    if (e.name === 'State') {
                        e.data = data['state']
                    }
                })
                setclient(n)


            })
            setState(d)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getdata()
    }, []);

    return (<>
            <DashboardHeader title={"Page Views"}/>

            <main className="-mt-32">
                <div className="rounded-lg bg-white px-1  shadow sm:px-4 mx-5 md:mx-10 ">

                    <div
                        className="relative h-max overflow-hidden rounded  opacity-100">
                        <main>
                            <div className="relative isolate overflow-hidden ">
                                <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
                                    <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-2 xl:px-0">
                                        {stats.map((stat, statIdx) => (<div
                                                key={stat.name}
                                                className={classNames(statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '', 'flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8')}
                                            >
                                                <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>

                                                <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                                                    {stat.value}
                                                </dd>
                                            </div>))}
                                    </dl>
                                </div>

                                <div
                                    className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                                        style={{
                                            clipPath: 'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                                        }}
                                    />
                                </div>
                            </div>

                            <ul role="list" className="divide-y divide-gray-100 px-2">
                                {country.map((person) => (

                                    <li key={person.country_code} className="flex justify-between gap-x-6 py-5">
                                        <div className="flex gap-x-4">
                                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={"https://flagsapi.com/"+person._id.country_code+"/flat/64.png"} alt="" />
                                            <div className="min-w-0 flex-auto">
                                                <p className="text-sm font-semibold leading-6 text-gray-900">{person._id.country_name}</p>
                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.count}</p>
                                            </div>
                                        </div>
                                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                                            <p className="text-sm leading-6 text-gray-900">{person.role}</p>

                                                <div className="mt-1 flex items-center gap-x-1.5">
                                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-500">{person.count}</p>
                                                </div>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8 mb-10">

                                {clients.map((client) => (



                                    <li key={client.name}  className="overflow-hidden rounded-xl border border-gray-200">


                                        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                                            <img
                                                src={client.imageUrl}
                                                alt={client.name}
                                                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                                            />
                                            <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>

                                        </div>
                                        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">

                                            {

                                                client.data.map((e)=>(
                                                    <div className="flex justify-between gap-x-4 py-3">
                                                        <dt className="text-gray-500">{e._id != null ? e._id : 'others'}</dt>
                                                        <dd className="text-gray-700">
                                                            <time dateTime={client.lastInvoice.dateTime}>{e.count}</time>
                                                        </dd>
                                                    </div>

                                                ))
                                            }

                                        </dl>
                                    </li>
                                ))}
                            </ul>
                        </main>
                    </div>
                </div>

            </main>

        </>

    )

}