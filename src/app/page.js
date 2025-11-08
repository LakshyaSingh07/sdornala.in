"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
// import { ThreeDImageRing } from "./components/lightswind/3d-image-ring";
import ThreeDHoverGallery from "./components/lightswind/3d-hover-gallery";

const Navbar = dynamic(() => import("./components/navbar"));
const Footer = dynamic(() => import("./components/footer"));
const Switcher = dynamic(() => import("./components/switcher"));

const About = dynamic(() => import("./components/about"));
const Features = dynamic(() => import("./components/features"));
const OurProjects = dynamic(() => import("./components/ourProjexts"));
const Clients = dynamic(() => import("./components/clients"));
const Team = dynamic(() => import("./components/team"));
const Blog = dynamic(() => import("./components/blog"));
const GetInTuch = dynamic(() => import("./components/getInTuch"));

import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

export default function Home() {
  const businessPartner = [
    "/images/team/amazon.svg",
    "/images/team/google.svg",
    "/images/team/lenovo.svg",
    "/images/team/paypal.svg",
    "/images/team/shopify.svg",
    "/images/team/spotify.svg",
  ];
  return (
    <>
      <Navbar />
      <section className="relative items-center overflow-hidden md:flex md:h-screen py-36 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2">
            <div className="">
              <h5 className="font-semibold leading-normal text-[20px] mt-6">
                Hi, I am
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Lakshya Singh",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Freelancer",
                    1000,
                    "Website Designer",
                    1000,
                    "Web Developers",
                    1000,
                    "UI/UX Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  className="typewrite ms-3"
                  repeat={Infinity}
                />
              </h5>

              <h5 className="mt-3 text-3xl font-bold leading-normal md:text-5xl md:leading-normal">
                A Full Service <br /> Digital Agency
              </h5>

              <p className="text-slate-400 dark:text-white/60 text-[17px] max-w-xl mt-4">
                Muvico is a Creative Agency & Startup Studio that provides
                Digital Products and Services turns to focus on client success.
              </p>

              <div className="relative mt-6">
                <Link
                  href="/aboutus"
                  className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl"
                >
                  Explore Work <i className="mdi mdi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* make carousel here */}
            <div className="">
              <div className="relative z-1">
                <ThreeDHoverGallery
                  itemWidth={15}
                  // itemHeight={15}
                  // gap={0.6}
                  // perspective={40}
                  hoverScale={12}
                  transitionDuration={1.5}
                  // backgroundColor="#0a0a0a"
                  grayscaleStrength={0.8}
                  brightnessLevel={0.6}
                  // activeWidth={35}
                  // enableKeyboardNavigation={true}
                  // autoPlay={true}
                  // autoPlayDelay={3000}
                  images={[
                    "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-16 overflow-hidden md:py-24">
        <About />
        <Features />
        <OurProjects
          containerClass="container relative md:mt-24 mt-16"
          griedClass="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-[30px]"
        />
        <Clients />
        <Team />
        {/* <Blog/> */}
        <GetInTuch />
      </section>
      <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div className="container relative">
          <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            {businessPartner.map((item, index) => {
              return (
                <div className="py-4 mx-auto" key={index}>
                  <Image
                    src={item}
                    width={72}
                    height={24}
                    className="h-6"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
