import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return (
        <div id="section-1" className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[cyan] font-bold p-2">
                    GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Grow with data.</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                        Fast, flexible financing</p>
                    <Typed
                    className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
                     strings={['Banking','Crypto','Deposit','Withdrawal']}
                     typeSpeed={120}
                     backSpeed={140} loop/>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">
                    Monitor your data analytics to increase revenue for BTB, BTC, & SASS platform</p>
                <button className="bg-[cyan] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>

            </div>
        </div>

    )
}

export default Hero