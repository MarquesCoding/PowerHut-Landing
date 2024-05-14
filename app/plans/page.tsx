'use client';
import React from "react";
import {motion} from "framer-motion";
import {NavigationMenuDemo} from "@/app/components/Navigation/Navigation";
import Footer from "@/app/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import {pricingTiers} from "@/app/utils/pricing";
import PricingCard from "@/app/components/PricingCard/PricingCard";
import { LuDatabaseBackup } from "react-icons/lu";
import {MdOutlineSwitchAccessShortcutAdd} from "react-icons/md";
import {RiHomeWifiFill} from "react-icons/ri";
import {IoIosSwitch} from "react-icons/io";

export default function Page() {
    return (
        <div className="w-full h-full flex flex-col">
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 100,
                    translateY: [-40, 0]
                }}
                transition={{
                    ease: "linear",
                    opacity: {duration: 1}
                }}
                className="w-full h-auto py-2 bg-[#FF4D14] text-[#141414] fixed top-0 left-0 z-40 lg:text-lg text-sm flex justify-center items-center gap-2 shadow-lg shadow-[#141414]">
                Use code : <span
                className="font-semibold font-mono hover:opacity-50 duration-300 bg-white px-2 rounded-md">POWER</span> and
                enjoy 15% off your first month!
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

                className="w-full h-[50vh] bg-gradient-to-tr from-[#FF4D14]/10 to-transparent bg-opacity-50 relative">
                <div className="mt-24 -mb-44 text-white relative w-full flex items-center justify-between gap-4 z-20">
                    <Link href="/" className="w-96">
                        <img className="hover:opacity-50 duration-300 mx-8 md:mx-24 w-6 md:w-8"
                             src={"/logo-white.png"}
                             alt={"logo"}/>
                    </Link>
                    <div className="">
                        <NavigationMenuDemo/>
                    </div>
                    <div className="w-96">

                    </div>
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
                        <p className="text-8xl font-bold">Server <span className="text-[#FF4D14]">Hosting </span> Plans</p>
                        <div className="max-w-2xl mt-4 flex flex-col gap-4 opacity-50">
                            <p>We had made our plans crazy price to performance inclined meaning that you get the best hardware for your money.</p>

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
                                <div><LuDatabaseBackup size={32} className="text-[#FF4D14]" /></div>
                                <p className="text-lg">Off-Site Regular Backups</p>
                            </div>
                            <p className="opacity-50">Nobody likes losing data, and especially not for your
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                game-servers. We've setup a reliable and easy to use backups system, that can
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                automatically create backups for you. Bonus points, they're all stored off-site in case
                                of emergencies.</p>
                        </div>
                        <div className="max-w-xl">
                            <div className="flex gap-4 items-center">
                                <div><MdOutlineSwitchAccessShortcutAdd  size={32} className="text-[#FF4D14]"/></div>
                                <p className="text-lg">Host Games, Tools & More</p>
                            </div>
                            <p className="opacity-50">Sometimes you just want to play another game, as you should. With our Panel, you can easily switch between your favorite games, and even host a multitude of easy to use and useful tools, all from the same panel.</p>
                        </div>
                        <div className="max-w-xl">
                            <div className="flex gap-4 items-center">
                                <div><RiHomeWifiFill  size={32} className="text-[#FF4D14]"/></div>
                                <p className="text-lg">Free Dedicated IPs & Reverse Proxies</p>
                            </div>
                            <p className="opacity-50">To give you the best possible experience, certain features are a must in our eyes. Features like free dedicated IPs*, reverse proxies, multiple backup slots and more all from within our panel, at no additional cost.</p>
                        </div>
                        <div className="max-w-xl">
                            <div className="flex gap-4 items-center">
                                <div><IoIosSwitch  size={32} className="text-[#FF4D14]"/></div>
                                <p className="text-lg">Easily Switch your Jars and Games</p>
                            </div>
                            <p className="opacity-50">Keeping all your game-jars up to date can be a hassle, to which we said; no more! Using our built-in Claws feature, easily switch or update your server jars without having to search for the proper one and upload them through the panel.</p>
                        </div>
                    </div>
                    <div className="flex w-full h-auto flex-wrap justify-center gap-2 mb-24">
                        {pricingTiers.map((tier, index) => (
                            <PricingCard key={index} {...tier} />
                        ))}
                    </div>
                </div>
            </motion.div>
            <Footer/>
        </div>
    )
}
