"use client"
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Navbar = dynamic(()=>import('./components/navbar'))
const Footer = dynamic(()=>import('./components/footer'))
const Switcher = dynamic(()=>import('./components/switcher'))


const About = dynamic(()=>import('./components/about'))
const Features = dynamic(()=>import('./components/features'))
const OurProjects = dynamic(()=>import('./components/ourProjexts'))
const Clients = dynamic(()=>import('./components/clients'))
const Team = dynamic(()=>import('./components/team'))
const Blog = dynamic(()=>import('./components/blog'))
const GetInTuch = dynamic(()=>import('./components/getInTuch'))

import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

export default function Home() {
  const businessPartner = ["/images/team/amazon.svg","/images/team/google.svg","/images/team/lenovo.svg","/images/team/paypal.svg","/images/team/shopify.svg","/images/team/spotify.svg"]
  return (
    <>
    <Navbar/>
    <section className="relative items-center overflow-hidden md:flex md:h-screen py-36 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
            <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2">
                <div className="">
                    <h5 className="font-semibold leading-normal text-[20px] mt-6">Hi, I am 
                    <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Lakshya Singh',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Freelancer',
                                1000,
                                'Website Designer',
                                1000,
                                'Web Developers',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            className="typewrite ms-3"
                            repeat={Infinity}
                            />
                    </h5>
                
                    <h5 className="mt-3 text-3xl font-bold leading-normal md:text-5xl md:leading-normal">A Full Service <br/> Digital Agency</h5>

                    <p className="text-slate-400 dark:text-white/60 text-[17px] max-w-xl mt-4">Muvico is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>

                    <div className="relative mt-6">
                        <Link href="/aboutus" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl">Explore Work <i className="mdi mdi-arrow-right ms-2"></i></Link>
                    </div>
                </div>

                <div className="relative lg:ms-6 before:content-[''] before:absolute before:start-1/2 before:-translate-x-1/2 rtl:before:translate-x-1/2 before:bottom-1/2 before:translate-y-1/2 before:w-[48rem] before:h-[20rem] before:rounded-[18rem] ltr:before:rotate-[135deg] rtl:before:rotate-[45deg] before:bg-orange-500 dark:before:bg-orange-500">
                    <div className="relative z-1">
                        <Image src="/images/hero.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt=""/>

                        <div className="absolute p-4 m-3 text-center bg-white rounded-lg shadow-md lg:bottom-20 -bottom-5 md:-start-10 -start-2 dark:shadow-gray-800 dark:bg-slate-900 w-44">
                            <span className="mb-0 text-3xl font-medium"><CountUp end={125} className="font-bold counter-value"/>+</span>
                            <h6 className="mt-1 text-sm text-slate-400">Project Completed</h6>
                        </div>

                        <div className="absolute p-4 m-3 text-center bg-white rounded-lg shadow-md md:top-20 top-32 md:-end-10 -end-2 dark:shadow-gray-800 dark:bg-slate-900 w-44">
                            <h6 className="font-semibold">Web Designer</h6>
                            <h6 className="mt-1 text-sm text-slate-400">7+ Years Experience</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="relative py-16 overflow-hidden md:py-24">
      <About/>
      <Features/>
      <OurProjects containerClass ="container relative md:mt-24 mt-16" griedClass="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-[30px]"/>
      <Clients/>
      <Team/>
      {/* <Blog/> */}
      <GetInTuch/>
    </section>
    <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div className="container relative">
                <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                    {businessPartner.map((item,index)=>{
                        return(
                            <div className="py-4 mx-auto" key={index}>
                                <Image src={item} width={72} height={24} className="h-6" alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
    </>
  )
}
