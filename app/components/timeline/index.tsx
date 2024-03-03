"use client";
export default function Timeline() {
    return (
        <section id="benefits">
            <div className=" text-white py-8 ">
                <div className="text-center">
                    <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Okay... So What Makes
                        Us Different?</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Your social media presence is the key to
                        showing your expertise, building trust, and reaching more target audiences.
                        <br/> Lorem Ipsum has been the industry standard dummy text ever.</p>

                </div>
                <div className="container mx-auto flex flex-col justify-center md:flex-row my-12 md:my-24">


                    <div className="ml-0 md:ml-12  sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full w-full">
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{
                                        right: "50%",
                                        border: "2px solid #FFC100",
                                        borderRadius: "1%",
                                    }}
                                ></div>
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{
                                        left: "50%",
                                        border: "2px solid #FFC100",
                                        borderRadius: "1%",
                                    }}
                                ></div>
                                <div
                                    className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        {/* <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p> */}
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                                            Specialized
                                        </h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            “Jack of all trades… Master of none. Specialization works.”
                                            That is why we work only with the cybersecurity sector, an industry we know
                                            so we can guarantee results.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                                            Unique
                                        </h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            We are using cutting-edge technology to create innovative content so it can
                                            differentiate you from other companies.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                                            Selective </h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            We're highly selective, working with only 1-2 cybersecurity companies per
                                            region to focus on helping you dominate the market.
                                        </p>
                                    </div>
                                </div>

                                {/*<div className="mb-8 flex justify-between items-center w-full right-timeline">*/}
                                {/*  <div className="order-1 w-5/12"></div>*/}

                                {/*  <div className="order-1  w-5/12 px-1 py-4">*/}
                                {/*    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">*/}
                                {/*      Prize Distribution*/}
                                {/*    </h4>*/}
                                {/*    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">*/}
                                {/*      Build more trust and generate more leads.*/}
                                {/*    </p>*/}
                                {/*  </div>*/}
                                {/*</div>*/}
                            </div>
                            <img
                                className="mx-auto -mt-36 md:-mt-36"
                                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
