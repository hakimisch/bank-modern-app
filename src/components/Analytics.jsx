import React from "react";
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return (
        <div className="w-full bg-slate-50 py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#3fe7e7] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>
                    In today's data-driven world, making sense of vast amounts of information is crucial for businesses to thrive. That's where our Data Analytics Services come in. We offer comprehensive solutions that transform raw data into actionable insights, empowering you to make informed decisions and achieve your business goals.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#3fe7e7] hover:scale-105 hover:text-black duration-150 text-[#3fe7e7]">Get Started</button>
                </div>

            </div>

        </div>
    )
}

export default Analytics