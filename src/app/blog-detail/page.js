'use client'
import React,{useState} from "react";
import Link from 'next/link';
import Image from "next/image";
import dynamic from 'next/dynamic'

const Navbar = dynamic(()=>import('../components/navbar'))
const Footer = dynamic(()=>import('../components/footer'))
const Switcher = dynamic(()=>import('../components/switcher'))
const ContactUs = dynamic(()=>import('../components/contactUs'))

import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css"

export default function BlogDetails(){
    const [isOpen, setOpen] = useState(false);
    
    return(
        <>
         <Navbar/>
        <section className="relative pt-40 pb-16 md:pb-24">
            <div className="container relative">
                <div className="justify-center md:flex">
                    <div className="lg:w-3/5">
                        <h5 className="text-2xl font-medium leading-normal md:text-3xl md:leading-normal">Stop Worrying About Deadlines! We Got You Covered</h5>
                        <p className="mt-4 text-slate-400 dark:text-white/60">Language is a window to who we are as people. Through the words we use and how we use them, people access a part of us, who we are.</p>

                        <div className="flex mt-5">
                            <span className="font-medium"><i className="mdi mdi-calendar-blank-outline me-2"></i>19th June, 2023</span>
                            <span className="font-medium ms-3"><i className="mdi mdi-clock-outline me-2"></i>5 min read</span>
                        </div>

                        <div className="flex items-center mt-5">
                            <Image src="/images/team/01.jpg" width={48} height={48} className="w-12 h-12 rounded-xl" alt=""/>

                            <div className="ms-2">
                                <Link href="" className="block font-medium hover:text-orange-500">Lakshya Singh</Link>
                                <span className="block text-sm text-slate-400 dark:text-white/60">Blogger</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="justify-center mt-6 md:flex">
                    <div className="lg:w-full">
                        <div className="relative">
                            <Image src="/images/blog/4.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  className="shadow-md rounded-xl dark:shadow-gray-800" alt=""/>
                            <div className="absolute text-center bottom-2/4 translate-y-2/4 start-0 end-0">
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
                    </div>
                </div>

                <div className="justify-center mt-6 md:flex">
                    <div className="lg:w-3/5">
                        <p className="text-slate-400 dark:text-white/60 text-[15px]">This rule applies to whether youre building brands or writing novels because people dont trust a Sybil. Our brains crave the comfort reliability and consistency breeds. Were confused when we see someone act one way and that way changes on the daily. Theyre performative instead of real.</p>
                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">In marketing, our voice is the personality we embody when we show up for our audiences, community, partners, and employees. Its our vibe and flavor, the words we use and how we use them. We can dial up and down facets of our personality depending on the environment. Sound familiar? Its called life.</p>
                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">We build trust when — interaction after interaction, channel after channel — we come across as the same person. In marketing, a verbal identity helps everyone who communicates on behalf of a brand to express themselves consistently so their audiences have the same powerful experience regardless of where they encounter the brand.</p>
                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">But Im not here to rehash a fifteen-minute tutorial I wrote eighteen months ago, rather I want to show you how to apply methodical tools and tactics to cultivate your prose or writing voice.</p>

                        <Image src="/images/blog/5.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="mt-4 rounded-xl" alt=""/>

                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">I didnt find my voice until I was thirty-seven and Ive been writing since I was six — you do the pitiful math. Because like everything else in my life, I chose to go at writing the hard way instead of seeing the symbiotic nature of what I was doing for a living (building brands and telling stories) and how I could employ the tools I learned and built for myself in my writing life.</p>
                        <p className="text-slate-400 dark:text-white/60 text-[15px] mt-4">For years, I kept the warring factions in my brain disparate because I never thought fiction and marketing could play harmoniously in the same sandbox until it occurred to me that both, at their core, are about telling stories. My on-duty life centered on telling stories about products and companies while my evenings were spent telling stories about the…</p>
                    </div>
                </div>
            </div>

           <ContactUs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}