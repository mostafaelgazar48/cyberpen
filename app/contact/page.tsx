'use client'
import { DatePicker, Stack } from "rsuite";
import { BookDemo } from "../actions";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex items-center xl:h-screen bg-blue-50 font-poppins bg-transparent text-white ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-10 md:px-7">
            <div className="flex flex-wrap items-center justify-center -mx-4">
                <div className="text-center ">
                    <div className="relative flex flex-col items-center">
                        <div
                            className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                            Contact
                        </div>
                        <h1 className="text-5xl font-bold dark:text-white"> Our <span className="text-blue-500"> Contact
                            </span></h1>
                        <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-blue-200">
                            </div>
                            <div className="flex-1 h-2 bg-blue-400">
                            </div>
                            <div className="flex-1 h-2 bg-blue-600">
                            </div>
                        </div>
                    </div>
                    <p className="mb-16 text-base text-center text-gray-500">
                        If you have any questions, please feel free to contact us
                    </p>
                </div>
            </div>
            <div className="flex justify-center ">
                {/* <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
                    <div
                        className="h-full py-12 text-center transition-all rounded-lg shadow bg-gray-800 hover:shadow-lg">
                        <div
                            className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-envelope" viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z">
                                </path>
                            </svg>
                        </div>
                        <h2 className="mb-4 text-xl font-bold leading-9 md:text-2xl text-gray-400">
                            Email</h2>
                        <a href="#"
                           className="text-base font-medium  md:text-lg text-gray-400">cyberpen2023@gmail.com</a>
                    </div>
                </div>
                <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
                    <div
                        className="h-full py-12 text-center transition-all rounded-lg shadow bg-gray-800 hover:shadow-lg">
                        <div
                            className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-telephone" viewBox="0 0 16 16">
                                <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                                </path>
                            </svg>
                        </div>
                        <h2 className="mb-4 text-xl font-bold leading-9 md:text-2xl text-gray-400">
                            Phone</h2>
                        <a href="https://wa.me/201000000000?text="
                           className="text-base font-medium text-gray-400 md:text-lg dark:text-gray-400">+9876542312</a>


                    </div>
                </div> */}
                
                <Link href="https://www.linkedin.com/company/cyberpen/" 
                className="block w-full px-4 mb-4 lg:w-1/3 lg:mb-0 ">
                    <div
                        className="h-full py-12 text-center  rounded-lg   bg-gray-800 ">
                        <div
                            className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-grid-3x3" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z">
                                </path>
                            </svg>
                        </div>
                        <h2 className="mb-4 text-xl font-bold leading-9 md:text-2xl text-gray-400">
                            Social
                        </h2>
                        <div className="inline-block mr-4 text-blue-400 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="w-6 h-6 bi bi-linkedin" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    </section>
  )
      ;
}
