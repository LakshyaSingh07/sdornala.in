import React from "react";
import Image from "next/image";
import Link from "next/link";

import {FiShoppingCart, FiDribbble,FiLinkedin,FiFacebook,FiInstagram,FiTwitter,FiMail, FiFileText} from "../assets/icons/vander"

export default function Footer(){
    return(
        <footer className="relative overflow-hidden bg-gray-900">
        <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container relative text-center">
                <div className="grid items-center grid-cols-1 lg:grid-cols-12 md:grid-cols-3">
                    <div className="text-center lg:col-span-3 md:text-start">
                        <Link href="#" className="text-[22px] focus:outline-none">
                            <Image src="/images/logo-white.png" width={109} height={20} className="mx-auto md:me-auto md:ms-0" alt=""/>
                        </Link>
                    </div>

                    <div className="mt-6 text-center lg:col-span-5 md:mt-0">
                        <p className="mb-0 text-gray-400">© {new Date().getFullYear()} Sdornala. Design & Develop with <i className="text-red-600 mdi mdi-heart"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Lakshya Singh</Link>.</p>
                    </div>

                    <ul className="mt-6 space-x-1 text-center list-none lg:col-span-4 md:text-end md:mt-0">
                        <li className="inline"><Link href="https://1.envato.market/muvico-next" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiShoppingCart className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link href="https://dribbble.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiDribbble className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiLinkedin className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiFacebook className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiInstagram className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link href="https://twitter.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiTwitter className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link href="mailto:support@shreethemes.in" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiMail className="h-[14px] w-[14px] align-middle"/></Link></li>
                        <li className="inline"><Link href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"><FiFileText className="h-[14px] w-[14px] align-middle"/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}