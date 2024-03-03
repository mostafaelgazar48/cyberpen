import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
    href: string[];
}

interface Social {
    imgsrc: string,
    href: string,
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Useful Links",
        link: ['Home', 'About Us', 'Knowledge Hub', 'Contact Us'],
        href: ['/','/about','/knowledge','/contact'],
    }
]

const socialLinks: Social[] = [
    {imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/"},
    {imgsrc: '/images/Footer/', href: "https://youtube.com/"},
]


const footer = () => {
    return (
        <div className=" relative">
            <div className="radial-bg hidden lg:block"></div>
            <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-6'>
                        <img
                            className="block h-20 w-20px mb-4"
                            src={'/images/Logo/logo.png'}
                            alt="Crypto-Logo"
                        />
                        <h3 className='text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16'> In today digital
                            landscape, cybersecurity is no longer a luxury it is a necessity. Your audience and
                            potential
                            clients must recognize that cyber threats could harm their reputations.

                            We are here to elevate their awareness and demonstrate that your services and products offer
                            the solutions they need.
                            .</h3>
                        <div className='flex gap-4'>
                            <a href="#"
                               className="inline-block mr-4 text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/cyberpen/"
                               className="inline-block mr-4   text-blue-400 hover:text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="w-6 h-6 bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-medium mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href={product.href[index]}
                                              className="text-offwhite  text-sm font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="col-span-4">
                        <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
                        <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image
                            src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20}/>(406) 555-012
                        </h4>
                        <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image
                            src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20}/>cyberpen2023@gmail.com
                        </h4>
                        <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image
                            src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20}/>Cairo,Egypt
                        </h4>
                    </div>

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className='py-8 px-4 border-t border-t-lightblue'>
                <h3 className='text-center text-offwhite'>@2023 - All Rights Reserved by </h3>
            </div>

        </div>
    )
}

export default footer;
