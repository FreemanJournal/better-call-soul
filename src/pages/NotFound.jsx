import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    return (

        <main className="bg-white relative overflow-hidden h-screen relative">
           
            <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
                <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
                    <div className="w-full mb-16 md:mb-8 text-center lg:text-center">
                        <h1 className="font-light font-sans text-center lg:text-center text-3xl lg:text-5xl mt-12 md:mt-0 text-gray-700">
                            Sorry, this page isn&#x27;t available
                        </h1>
                        <button className="px-2 py-2 w-36 mt-16 font-bold text-white rounded-sm transition ease-in duration-200 hover:bg-emerald-600 text-lg  bg-emerald-500 focus:outline-none"
                        onClick={()=>navigate("/")}
                        >
                            Go back home
                        </button>
                    </div>
                   
                </div>
            </div>
        </main>

    )
}
