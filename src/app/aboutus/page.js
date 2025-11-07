'use client'
import React,{useState} from "react";
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic'

const Navlight = dynamic(()=>import('../components/navlight'))
const Footer = dynamic(()=>import('../components/footer'))
const Switcher = dynamic(()=>import('../components/switcher'))

const Features = dynamic(()=>import('../components/features'))
const Team = dynamic(()=>import('../components/team'))
const Clients = dynamic(()=>import('../components/clients'))
const ContactUs = dynamic(()=>import('../components/contactUs'))

import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css"

export default function AboutUs(){
    const [isOpen, setOpen] = useState(false);
    return(
        <>
        <Navlight/>
        <section className="relative table w-full py-32 bg-top bg-no-repeat bg-cover lg:py-40" style={{backgroundImage:"url('/images/portfolio/bg-inner.png')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 mt-10 text-center">
                    <h3 className="text-3xl font-medium leading-normal text-white">About Us</h3>
                </div>
            </div>
            
            <div className="absolute z-10 mx-3 text-center bottom-5 start-0 end-0">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                   <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Muvico</Link></li>
                   <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="align-middle mdi mdi-chevron-right"></i></li>
                    <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white" aria-current="page">About Us</li>
                </ul>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="relative py-16 md:py-24">
            <div className="container relative">
                <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-12 md:grid-cols-2">
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <Image src="/images/about.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:"auto"}} className="relative rounded-lg shadow-lg" alt=""/>
                            <div className="absolute text-center bottom-2/4 translate-y-2/4 end-0 start-0">
                                <Link href="#!" onClick={() => setOpen(true)} className="inline-flex items-center justify-center w-20 h-20 text-orange-500 bg-white rounded-full shadow-lg lightbox shadow-slate-100 dark:shadow-slate-800 dark:bg-slate-950">
                                    <i className="inline-flex items-center justify-center text-2xl mdi mdi-play"></i>
                                </Link>
                            </div>
                            <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="S_CGed6E610"
                                    onClose={() => setOpen(false)} 
                                />
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="lg:ms-7">
                            <h3 className="mb-4 text-xl font-medium md:text-2xl">About Us: Sdornala</h3>

                            <p className="max-w-2xl mx-auto text-slate-400 dark:text-white/60">Start working with Sdornala that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>

                            <div className="relative mt-8">
                                <Link href="/aboutus" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl">Read More <i className="mdi mdi-arrow-right ms-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Features title={false}/>
            {/* <Clients/> */}
            <Team/>
            <ContactUs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}