'use client';
import React from "react";
import {motion} from "framer-motion";
import {NavigationMenuDemo} from "@/app/components/Navigation/Navigation";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import {pricingTiers} from "@/app/utils/pricing";
import PricingCard from "@/app/components/PricingCard/PricingCard";
import { LuDatabaseBackup } from "react-icons/lu";
import {MdOutlineSwitchAccessShortcutAdd} from "react-icons/md";
import {RiHomeWifiFill} from "react-icons/ri";
import {IoIosSwitch} from "react-icons/io";
import Intercom from "@intercom/messenger-js-sdk";
import Promo from "@/app/components/Promo/Promo";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import FAQ from "@/app/components/FAQ/FAQ";

export default function Page() {
    Intercom({
        app_id: 'dcisso7v',
    });
    return (
        <div className="w-full h-full flex flex-col items-center">
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
                                <div><LuDatabaseBackup size={32} className="text-[#FF4D14]"/></div>
                                <p className="text-lg">Off-Site Regular Backups</p>
                            </div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className="opacity-50">We understand the importance of safeguarding your game server data. That's why we've implemented a dependable and user-friendly backup system that automatically creates backups for you. Plus, for added security, all backups are stored off-site to protect against emergencies.</p>
                        </div>
                        <div className="max-w-xl">
                            <div className="flex gap-4 items-center">
                                <div><MdOutlineSwitchAccessShortcutAdd size={32} className="text-[#FF4D14]"/></div>
                                <p className="text-lg">Host Games, Tools & More</p>
                            </div>
                            <p className="opacity-50">Sometimes you might feel like switching up your gaming experience, and our Panel makes that effortless. It allows you to seamlessly toggle between your favorite games and provides access to a variety of user-friendly tools, all from one convenient interface.</p>
                        </div>
                        <div className="max-w-xl">
                            <div className="flex gap-4 items-center">
                                <div><RiHomeWifiFill size={32} className="text-[#FF4D14]"/></div>
                                <p className="text-lg">Free Dedicated IPs</p>
                            </div>
                            <p className="opacity-50">To ensure you have the best possible experience, we believe some features are essential. Our panel includes perks like free dedicated IPs*, multiple backup slots, and more, all at no extra charge.</p>
                        </div>
                        <div className="max-w-xl">
                            <div className="flex gap-4 items-center">
                                <div><IoIosSwitch size={32} className="text-[#FF4D14]"/></div>
                                <p className="text-lg">Easily Switch your Jars and Games</p>
                            </div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className="opacity-50">We understand that keeping your game jars updated can be a chore, so we've made it simpler. With our built-in jar-changer feature, you can easily switch or update your server jars directly through the panel, without the need to search and upload them manually.</p>
                        </div>
                    </div>
                    <div className="flex w-full h-auto flex-wrap justify-center gap-2 pb-24">
                        <div className="flex w-full h-auto flex-wrap justify-center gap-2 ">
                            {pricingTiers.map((tier, index) => (
                                <PricingCard key={index} {...tier} />
                            ))}
                        </div>
                        <div className="opacity-60 mt-4">
                            <p className="text-center text-white opacity-50 w-full text-xs">*CPU will vary based on
                                server
                                location - will be equivalent</p>
                            <p className="text-center text-white opacity-50 w-full text-xs">
                                ** Additional RAM can be purchased through a support ticket
                                (billing / discord)
                            </p>
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
