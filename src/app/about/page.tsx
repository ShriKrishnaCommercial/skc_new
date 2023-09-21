import Header from "@/components/Header";
import Image from "next/image";
// @ts-ignore

// @ts-ignore
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon
} from '@heroicons/react/outline'
import Footer from "@/components/Footer";
import {VectorMap} from "@react-jvectormap/core";

export default function About() {
    const features = [
        {
            name: 'Customer first',
            icon: CloudUploadIcon,
            data: 'We M/S Shri Krishna commercial, believe in diminishing the gap between OEMs and End- users. We understand the exact requirements of customers, consider their pain areas and provide most efficient services.'
        },
        {
            name: 'Value Pricing',
            icon: LockClosedIcon,
            data: 'Value Pricing: we believe in alleviating industrial pain areas and serving our customers with best quality products at best prices.'
        },
        {
            name: 'Trust',
            icon: RefreshIcon,
            data: 'meeting our commitments and fulfilling your requirements to build a reliable, responsible, accountable and resourceful relationship.'
        },
        {
            name: 'Services',
            icon: ShieldCheckIcon,
            data: 'Dedicated and prompt services second to none; we always try to assist with sales services in accordance to situations prevailing'
        },
        {
            name: 'Integrity',
            icon: CogIcon,
            data: 'a consistent and uncompromising adherence to strong moral and ethical principles and values.'
        },
        {
            name: 'Teamwork',
            icon: ServerIcon,
            data: "In sync with our core value we strongly believe that the only success mantra to prosper is teamwork."
        },
    ];
    const testimonail: {}[] = [
        {
            name: "WAHID HUSSAIN",
            company: "Jindal Steel Patratu",
            comment: "We would like to thank you and your team for your excellent service to our organisation. We really impressed by the timely support that you have been providing us."
        }, {
            name: "DEEPAK SHARMA",
            company: "Sr Executive Materials,Tata Autocomp",
            comment: "We find your service satisfactory, and supply delivery is on time."
        }, {
            name: "BINAY KRISHNA SHAW",
            company: "Tata Steel LLP",
            comment: "Very Good Responce"
        }, {
            name: "RABIN HALDER",
            company: "Hooghly Metcoke",
            comment: "Dear M/s Shrikrishna & everyone from your esteemed organization, I personally feel from the bottom of my heart that you have been so nice and it is our pleasure for being your customers'. You always have been keeping an eye into our requirements to deliver on time. This is absolutely satisfactory. Hoping much more support from you into our organizational goals to achieve & create milestones. Without you, it is absolutely impossible. I would like to thanks to Anuj Ji, Atul Ji, Vikash Ji and Manish ji and everyone who so ever is part of your business into. Our sincere gratitude to you all."
        }
    ]
    return (
        <div>
            <Header/>

            <div className="relative bg-primary ">
                <div className="absolute inset-0">
                    <Image width="400" height="500"
                           className="w-full h-full object-cover"
                           src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                           alt=""
                    />
                    <div className="absolute inset-0 bg-primary mix-blend-multiply" aria-hidden="true"/>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About
                        us </h1>
                    <p className="mt-6 text-xl text-white max-w-3xl">
                        We are a dedicated team committed to providing innovative solutions and exceptional experiences.
                        With a passion for excellence, we aim to exceed expectations and create lasting value for our
                        customers.
                    </p>
                </div>
            </div>
            <section className="bg-white ">
                <div
                    className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">KNOW WHO WE ARE</h2>
                        <p className="mb-4 text-m">M/S SHRI KRISHNA COMMERCIAL was established in 2010, The Company was formed
                            with a vision of becoming specialists in the Industrial sector with a motive to pioneer in
                            Electrical, Instrumentation, Mechanical and safety solution. Over the years, Shri Krishna
                            Commercial has emerged as a one-stop solution for many Industrial, Electrical,
                            Instrumentation and Mechanical products with the core value of the company's growth in line
                            with its employees’. In sync with the idea of becoming a leading one-stop electrical product
                            solution, we have tied up with leading OEM’s of various unique and innovative segments.
                            Since its inception, M/S Shri Krishna commercial has grown many folds to become one of the
                            most trusted aggregators and channel partners with more than 35+ OEMs serving more than 119+
                            customers. We've branched our services to 8+ states of India (both in Private and Government
                            sectors) and are working tirelessly towards expanding our base over Pan India. We envisioned
                            on becoming the most reliable, sustainable and competitive company for industrial business
                            solution globally.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Image className="w-full rounded-lg"
                               width="400" height="500"
                               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                               alt="office content 1"/>
                        <Image className="mt-4 w-full lg:mt-10 rounded-lg"
                               width="400" height="500"
                               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                               alt="office content 2"/>
                    </div>
                </div>
            </section>
            <section className="gradient_3">
                <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
                    <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
                        <div className="md:flex-shrink-0">
                            <h3 className="font-bold text-3xl text-white">
                                Vission
                            </h3>
                        </div>
                        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                            <div className="relative text-lg font-medium text-white md:flex-grow">
                                <svg
                                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="relative">
                                    To preserve and grow our position of market leadership in India and worldwide. Our vision is the growth of the company in line with the growth of its employees’.
                                </p>
                            </div>

                        </blockquote>
                    </div>
                    <div className="py-12 px-4  sm:px-6 md:py-16 md:pr-0 md:pl-10  lg:pl-16">
                        <div className="md:flex-shrink-0">
                            <h3 className="font-bold text-3xl text-white">
                                Mission
                            </h3>
                        </div>
                        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                            <div className="relative text-lg font-medium text-white md:flex-grow">
                                <svg
                                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="relative">
                                    Our mission is to flourish our trades in India and across the world to become the most reliable, sustainable, and competitive company for industrial business solution provider, globally.


                                </p>
                            </div>

                        </blockquote>
                    </div>
                </div>
            </section>

            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-base font-semibold tracking-wider text-primary uppercase">Our Values</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Everything you need to know about us
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        Our values drive us forward, guiding our actions to prioritize integrity, collaboration, and
                        continuous growth. We embrace diversity and are devoted to delivering excellence in all we do.
                    </p>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="pt-6 ">
                                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-[260px]">
                                        <div className="-mt-6">
                                            <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                      </span>
                                            </div>
                                            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                            <p className="mt-5 text-base text-gray-500">
                                                {feature.data}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white mb-5">Testimonials</h2>
                        {/*<p className="mb-8 font-light  lg:mb-16 sm:text-xl text-gray-400">Explore the*/}
                        {/*    whole collection of open-source web components and elements built with the utility classes*/}
                        {/*    from Tailwind</p>*/}
                    </div>
                    <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                        {
                            (testimonail.map((t, i) => {

                                return (<>
                                    <figure key={i}
                                            className="flex flex-col justify-center items-center p-8 text-center  border-b md:p-12 lg:border-r bg-gray-800 border-gray-700">
                                        <blockquote className="mx-auto mb-8 max-w-2xl  text-gray-400">
                                            <h3 className="text-sm font-thin  text-white">
                                                {/*@ts-ignore*/}
                                                {t.comment}
                                            </h3>
                                        </blockquote>
                                        <figcaption className="flex justify-center items-center space-x-3">
                                            {/*<Image className="w-9 h-9 rounded-full"*/}
                                            {/*       width={"400"}*/}
                                            {/*       height={"400"}*/}
                                            {/*       src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"*/}
                                            {/*       alt="profile picture"/>*/}
                                            <div className="space-y-0.5 font-medium text-white text-left">
                                                <div>
                                                    {/*@ts-ignore*/}
                                                    {t.name}
                                                </div>
                                                <div className="text-sm font-light text-gray-400">
                                                    {/*@ts-ignore*/}
                                                    {t.company}
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>

                                </>)
                            }))
                        }


                    </div>

                </div>
            </section>
<Footer/>
        </div>
    )
}