'use client'
import Image from 'next/image'
import {Container} from "./Container";
import "animate.css"
import {AnimationOnScroll} from "react-animation-on-scroll";
// copied the array data from page 2tsx, and used here as this component is used later
const testimonials =  [
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

export function Testimonials() {
    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-title"
            className="bg-slate-50 py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2
                        id="testimonials-title"
                        className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Trusted by businesses worldwide.
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">

                    </p>
                </div>
                <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
                    {testimonials.map((column, columnIndex) => (
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                        <li key={columnIndex}>
                            <ul className="space-y-6 sm:space-y-8">
                                    <li key={columnIndex}>
                                        <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                            <svg
                                                aria-hidden="true"
                                                width={105}
                                                height={78}
                                                className="absolute top-6 left-6 fill-slate-100"
                                            >
                                                <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                            </svg>
                                            <blockquote className="relative">
                                                <p className="text-lg tracking-tight text-slate-900">
                                                    {column.comment}
                                                </p>
                                            </blockquote>
                                            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                                <div>
                                                    <div className="font-display text-base text-slate-900">
                                                        {column.name}
                                                    </div>
                                                    <div className="mt-1 text-sm text-slate-500">
                                                        {column.company}
                                                    </div>
                                                </div>
                                                {/*<div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">*/}
                                                {/*    /!*<Image src={testimonial.author.image} alt="" />*!/*/}
                                                {/*</div>*/}
                                            </figcaption>
                                        </figure>
                                    </li>
                            </ul>
                        </li>
                        </AnimationOnScroll>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
