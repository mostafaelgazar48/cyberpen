import Link from "next/link";
import React from "react";


const Simple = () => {
    return (
        <div className="simple-bg relative mt-8">
            <div className="simpleone"></div>
            <div className="simpletwo"></div>
            <div className="simplethree"></div>
            <div className="simplefour"></div>
            <div className="simplefive"></div>
            <div className="mx-auto max-w-5xl py-24 px-6">
                <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">Would you like to know
                    what we could do for you?
                </h3>
                <p className="text-center text-bluish text-lg font-normal mb-8">Contact us, and let's get to know each
                    other.
                    <br/>
                    No obligations, no annoying sales talk, we're both too busy for that.

                </p>
                <div className="flex justify-center ">
                    <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton'><Link
                        href='/contact'> Contact Us</Link></button>
                </div>
            </div>
            <div className="simplesix"></div>
            <div className="simpleseven"></div>
            <div className="simpleeight"></div>
            <div className="simplenine"></div>
            <div className="simpleten"></div>
        </div>
    )
}

export default Simple;
