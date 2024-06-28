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
import {IoArrowForwardCircle} from "react-icons/io5";
import {Button} from "@/app/components/ui/button";
import {BiSupport} from "react-icons/bi";
import GamePanel from "@/app/components/GamePanel/GamePanel";

export default function Page() {

    const container = {
        hidden: { opacity: 1, translateY: -40 },
        visible: {
            opacity: 1,
            translateY: 0,
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    Intercom({
        app_id: 'dcisso7v',
    });
    return (
        <div className="w-full h-full flex flex-col items-center">
            <Promo/>
            <div className="w-full h-auto background-tr flex items-center justify-center">
                <div className="w-full h-full max pb-4 xl:pb-0">
                    <div
                        className="w-full h-full flex items-center justify-center relative z-10 flex-col">
                        <NavigationBar/>
                        <div className="flex flex-col w-full px-8 xl:p-8">
                            <motion.div
                                className="text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-bold selection:bg-white"
                                variants={container}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.span
                                    className="text-zinc-400 selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.1}}
                                >
                                    Server
                                    {' '}
                                </motion.span>

                                <motion.span
                                    className="text-zinc-400 selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.2}}
                                >
                                    Hosting
                                    {' '}
                                </motion.span>
                                <motion.span
                                    className="text-main selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.3}}
                                >
                                    Plans.
                                </motion.span>
                            </motion.div>
                            <div
                                className="w-full flex flex-row gap-4 grayscale opacity-50 pt-8">
                                <img src='/1.png' alt="icon" className="w-auto h-8"/>
                                <img src='/5.png' alt="icon" className="w-auto h-8"/>
                                <img src='/4.png' alt="icon" className="w-auto h-8"/>
                            </div>
                        </div>
                    </div>
                    {/*<BackgroundBeams/>*/}
                </div>
            </div>
            <div className="background-br">
                <motion.div className="w-full h-auto flex bg-opacity-50 max">
                    <div className="flex flex-col min-w-2xl w-full">
                        <div className="flex w-full h-auto flex-wrap mb-24 gap-24 lg:p-8 p-12">
                            <div className="max-w-xl">
                                <div className="flex gap-4 items-center">
                                    <div><LuDatabaseBackup size={32} className="text-[#FF4D14]"/></div>
                                    <p className="text-lg">Off-Site Regular Backups</p>
                                </div>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <p className="opacity-50">We understand the importance of safeguarding your game server
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    data. That's why we've implemented a dependable and user-friendly backup system that
                                    automatically creates backups for you. Plus, for added security, all backups are
                                    stored
                                    off-site to protect against emergencies.</p>
                            </div>
                            <div className="max-w-xl">
                                <div className="flex gap-4 items-center">
                                    <div><MdOutlineSwitchAccessShortcutAdd size={32} className="text-[#FF4D14]"/></div>
                                    <p className="text-lg">Host Games, Tools & More</p>
                                </div>
                                <p className="opacity-50">Sometimes you might feel like switching up your gaming
                                    experience,
                                    and our Panel makes that effortless. It allows you to seamlessly toggle between your
                                    favorite games and provides access to a variety of user-friendly tools, all from one
                                    convenient interface.</p>
                            </div>
                            <div className="max-w-xl">
                                <div className="flex gap-4 items-center">
                                    <div><RiHomeWifiFill size={32} className="text-[#FF4D14]"/></div>
                                    <p className="text-lg">Free Dedicated IPs</p>
                                </div>
                                <p className="opacity-50">To ensure you have the best possible experience, we believe
                                    some
                                    features are essential. Our panel includes perks like free dedicated IPs*, multiple
                                    backup slots, and more, all at no extra charge.</p>
                            </div>
                            <div className="max-w-xl">
                                <div className="flex gap-4 items-center">
                                    <div><IoIosSwitch size={32} className="text-[#FF4D14]"/></div>
                                    <p className="text-lg">Easily Switch your Jars and Games</p>
                                </div>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <p className="opacity-50">We understand that keeping your game jars updated can be a
                                    chore,
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    so we've made it simpler. With our built-in jar-changer feature, you can easily
                                    switch
                                    or update your server jars directly through the panel, without the need to search
                                    and
                                    upload them manually.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="background-tr">
                <GamePanel/>
            </div>
            <div className="background-br">
                <div className="flex w-full h-auto flex-wrap justify-center lg:justify-start gap-2 pb-24 max pt-24">
                    <div className="flex w-full h-auto flex-wrap justify-center lg:justify-start gap-2 ">
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
            <div className="background-tr">
                <div className="flex max flex-row  md:h-auto w-full px-8 xl:p-8">
                    <FAQ/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
