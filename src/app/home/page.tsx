'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../app/globals.css"
import {TypeAnimation} from "react-type-animation";
export default function home() {
    return (
        <>

            <Header/>

            <div className="h-screen w-full grid_texture">

                <div className="md:flex">
                    <div className="w-3/5 h-max ">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'We have wide range of electrical products',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'We have wide range of mechanical products',
                                1000,
                                'We have wide range of instrumental products',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '4em', display: 'inline-block',fontWeight:'bold' }}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="w-auto h-max bg-red-400">


                    </div>
                </div>



            </div>

            <Footer/>
        </>
    )

}