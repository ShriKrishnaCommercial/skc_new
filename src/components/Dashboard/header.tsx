import {Disclosure} from "@headlessui/react";
import {Fragment, useEffect} from "react";
import {setCookie, getCookie, getCookies} from "cookies-next";
import {useRouter} from "next/navigation";
const user = {
    name: 'admin',
    email: '..',
    imageUrl:
        '/logo.png',
}
const navigation = [
    {name: 'Dashboard', href: '/dashboard', current: true},
    {name: 'Home', href: '/dashboard/home', current: true},
    {name: 'Analytics', href: '/dashboard/analytics', current: false},
    {name: 'About', href: '/dashboard/about', current: false},
    {name: 'CV', href: '/dashboard/cv', current: false},
    {name: 'Clients', href: '/dashboard/clients', current: false},
    {name: 'Products', href: '/dashboard/products', current: false},
    {name: 'Faq', href: '/dashboard/faq', current: false},
    {name: 'Brands', href: '/dashboard/brands', current: false},
    {name: 'Contact', href: '/dashboard/contact', current: false},
    {name: 'brands', href: '/dashboard/brands', current: false},
    {name: 'Quotes', href: '/dashboard/quotes', current: false}

]
const userNavigation = []

//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardHeader({title}: { title: string }) {
    const router = useRouter();
    async function auth(){
        var n  = await getCookie('jwt')
        if( n == undefined){
            router.push("/dashboard/login");

        }
    }

    useEffect(() => {
        auth()
    }, []);

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
                                                src="/white_fox.png"
                                                alt="SKC"
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
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" /></svg>
                                            ) : (

                                                <>
                                                    {/*<p>BAR</p>*/}
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                                                            fill="currentColor"/>
                                                        <path
                                                            d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
                                                            fill="currentColor"/>
                                                        <path
                                                            d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
                                                            fill="currentColor"/>
                                                        <path
                                                            d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
                                                            fill="currentColor"/>
                                                        <path
                                                            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                                                            fill="currentColor"/>
                                                        <path
                                                            d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
                                                            fill="currentColor"/>
                                                        <path
                                                            d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
                                                            fill="currentColor"/>
                                                        <path
                                                            d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                                                            fill="currentColor"/>
                                                        <path
                                                            d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
                                                            fill="currentColor"/>
                                                    </svg>
                                                </>
                                                // <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="hidden lg:ml-4 lg:block">
                                        <div className="flex items-center">


                                            {/*/!* Profile dropdown *!/*/}
                                            {/*<Menu as="div" className="relative ml-3 flex-shrink-0">*/}
                                            {/*    <div>*/}
                                            {/*        <Menu.Button*/}
                                            {/*            className="flex rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">*/}
                                            {/*            <span className="sr-only">Open user menu</span>*/}
                                            {/*            <img className="h-8 w-8 rounded-full" src={user.imageUrl}*/}
                                            {/*                 alt=""/>*/}
                                            {/*        </Menu.Button>*/}
                                            {/*    </div>*/}

                                            {/*</Menu>*/}
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

                                            {/*<BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">

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