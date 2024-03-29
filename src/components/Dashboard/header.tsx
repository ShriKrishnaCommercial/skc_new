import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    {name: 'Dashboard', href: '/dashboard', current: true},
    {name: 'About', href: '/dashboard/about', current: false},
    {name: 'CV', href: '/dashboard/cv', current: false},
    {name: 'Clients', href: '/dashboard/clients', current: false},
    {name: 'products', href: '/dashboard/products', current: false},
]
const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardHeader({title}: { title: string }) {
    return (
        <>
            <div className="bg-indigo-600 pb-32 dashboard_pattern">
                <Disclosure as="nav"
                            className="border-b border-indigo-300  border-opacity-25 bg-indigo-800 lg:border-none">
                    {({open}) => (
                        <>
                            <div className="mx-auto  px-4 sm:px-6 lg:px-10">
                                <div
                                    className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                                    <div className="flex items-center px-2 lg:px-0">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="block h-8 w-8"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <div className="hidden lg:ml-10 lg:block">
                                            <div className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-indigo-700 text-white'
                                                                : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                                                            'rounded-md py-2 px-3 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button
                                            className="inline-flex items-center justify-center rounded-md bg-go-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <p>MAG</p>
                                                // <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <p>BAR</p>
                                                // <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="hidden lg:ml-4 lg:block">
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="flex-shrink-0 rounded-full bg-indigo-600  p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <p>BELL</p>
                                                {/*<BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3 flex-shrink-0">
                                                <div>
                                                    <Menu.Button
                                                        className="flex rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl}
                                                             alt=""/>
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
                                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({active}) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="lg:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-indigo-700 text-white'
                                                    : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                                                'block rounded-md py-2 px-3 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-indigo-700 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt=""/>
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium text-white">{user.name}</div>
                                            <div className="text-sm font-medium text-indigo-300">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <p>bell</p>
                                            {/*<BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <header className="py-10">
                    <div className="mx-auto  px-6 sm:px-8 lg:px-10">
                        <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
                    </div>
                </header>
            </div>

        </>
    )
}