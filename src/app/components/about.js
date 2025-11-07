import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css"

export default function About(){
    const [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="container relative pb-16 md:pb-24">
                <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-12">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <div className="relative flex justify-end">
                                <Image  src="/images/about.jpg" width={0} height={0} sizes="100vw" style={{width:"400px", height:"auto"}} className="lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700" alt=""/>
                                <div className="absolute top-0 text-center translate-y-2/4 start-0">
                                    <Link href="#!" onClick={() => setOpen(true)} className="inline-flex items-center justify-center w-20 h-20 text-orange-600 bg-white rounded-full shadow-lg lightbox shadow-slate-100 dark:shadow-slate-800 dark:bg-slate-900">
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
                            <div className="absolute md:-start-5 start-0 -bottom-16">
                                <Image src="/images/about2.jpg" width={0} height={0} sizes="100vw" style={{width:"280px", height:"auto"}} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="mb-2 text-sm font-medium text-orange-500 uppercase">About us</h6>
                            <h3 className="mb-4 text-xl font-medium md:text-2xl">Better Design <br/> Better Experience</h3>

                            <p className="max-w-xl text-slate-400 dark:text-white/60">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400 dark:text-white/60">WordPress</span>
                                    <span className="text-slate-400 dark:text-white/60">95%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-orange-500 h-[6px] rounded-full" style={{width:"95%"}}></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400 dark:text-white/60">Shopify</span>
                                    <span className="text-slate-400 dark:text-white/60">89%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-orange-500 h-[6px] rounded-full" style={{width:"89%"}}></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400 dark:text-white/60">HTML</span>
                                    <span className="text-slate-400 dark:text-white/60">95%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-orange-500 h-[6px] rounded-full" style={{width:"95%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}