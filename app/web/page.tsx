'use client';
import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import { LuDatabaseBackup } from "react-icons/lu";
import {MdOutlineSwitchAccessShortcutAdd} from "react-icons/md";
import {RiHomeWifiFill} from "react-icons/ri";
import {IoIosSwitch} from "react-icons/io";
import Intercom from "@intercom/messenger-js-sdk";
import {webTiers} from "@/app/utils/pricing";
import PricingCard from "@/app/components/PricingCard/PricingCard";
import Footer from "@/app/components/Footer";
import Promo from "@/app/components/Promo/Promo";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import { FaCpanel } from "react-icons/fa6";
import {FaArrowUp} from "react-icons/fa";
import FAQ from "@/app/components/FAQ/FAQ";

export default function Page() {
    Intercom({
        app_id: 'dcisso7v',
    });
    return (
        <div className="w-full h-full flex flex-col">
            <Promo/>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 100
                }}
                transition={{
                    ease: "linear",
                    opacity: {duration: 1}
                }}

                className="w-full h-[50vh] bg-gradient-to-tr from-[#FF4D14]/10 to-transparent flex flex-col items-center bg-opacity-50 relative">
                <div className="max w-full">
                    <NavigationBar/>
                </div>
                <div
                    className="w-full h-full flex items-center justify-center relative z-10 flex-col pt-48 text-center">
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 100,
                        }}
                        transition={{
                            ease: "linear",
                            opacity: {duration: 1}
                        }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-8xl font-bold">Web <span className="text-[#FF4D14]">Hosting </span> Plans</p>
                        <div className="max-w-2xl mt-4 flex flex-col gap-4 opacity-50">
                            <p>We had made our plans crazy price to performance inclined meaning that you get the best
                                hardware for your money.</p>

                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 100
                }}
                transition={{
                    ease: "linear",
                    opacity: {duration: 1}
                }}

                className="w-full h-auto flex items-center justify-center bg-gradient-to-br from-[#FF4D14]/10 to-transparent bg-opacity-50">
                <div className="flex flex-col min-w-2xl w-full items-center">
                    <div className="flex w-full h-auto flex-wrap justify-center max-w-7xl mb-24 gap-24 lg:p-0 p-12">
                        <div className="max-w-xl">
                            <div className="flex gap-4 items-center">
                                <div><FaCpanel size={32} className="text-[#FF4D14]"/></div>
                                <p className="text-lg">Powered by cPanel</p>
                            </div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className="opacity-50">When it comes to managing your website, ease and efficiency are
                                key. With cPanel, you can effortlessly switch between a variety of powerful tools and
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                features, all from a single, user-friendly interface. Whether you're managing your
                                files, databases, or emails.</p>
                        </div>
                        <div className="max-w-xl">
                            <div className="flex gap-4 items-center">
                                <div><FaArrowUp size={32} className="text-[#FF4D14]"/></div>
                                <p className="text-lg">Reliable Performance and Uptime</p>
                            </div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className="opacity-50">When it comes to web hosting, consistent performance and
                                reliability are crucial. Our hosting services ensure maximum uptime and seamless
                                operation, providing your website with the stability it needs to thrive. Trust in our
                                robust infrastructure to keep your site online and running smoothly.</p>
                        </div>
                    </div>
                    <div className="flex w-full h-auto flex-wrap justify-center gap-2 pb-24">
                        <div className="flex w-full h-auto flex-wrap justify-center gap-2 ">
                            {webTiers.map((tier, index) => (
                                <PricingCard key={index} {...tier} />
                            ))}
                        </div>
                        <div className="opacity-60 mt-4">
                            <p className="text-center text-white opacity-50 w-full text-xs">
                                *** Fair Use Policy
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="background-tr">
                <div className="flex max flex-row  md:h-auto w-full px-8 xl:p-8">
                    <FAQ/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
