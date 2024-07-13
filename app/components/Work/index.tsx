"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Referrals ',
        subheading: 'Relying on your relationships is a good way to get clients.',
        hiddenpara: ' But you will only get a few of them. You cannot expand, scale, or reach a larger target audience',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Sales Team\n',
        subheading: 'Depending on the sales team, traditional techniques are not enough. ',
        hiddenpara: 'Why struggle to find clients when they can simply come to you?\n',
    },


]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-12 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Many cybersecurity companies out there
                        offer similar services and products as yours. <br/>
                        So, how do you make sure clients choose your company first when they&apos;re ready to buy?
                    </p>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How Do You Stand Out From The Competition?
                    </h3>

                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-y-20 gap-x-5 mt-32 '>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8 ' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44}/>
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35}/>
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2 leading-loose'>{items.subheading} </p>
                            <span
                                className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
