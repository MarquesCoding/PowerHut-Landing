'use client';
import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import { LuDatabaseBackup } from "react-icons/lu";
import {MdOutlineSecurity, MdOutlineSwitchAccessShortcutAdd} from "react-icons/md";
import {RiHomeWifiFill} from "react-icons/ri";
import {IoIosSwitch} from "react-icons/io";
import Intercom from "@intercom/messenger-js-sdk";
import {webTiers} from "@/app/utils/pricing";
import PricingCard from "@/app/components/PricingCard/PricingCard";
import Footer from "@/app/components/Footer";
import Promo from "@/app/components/Promo/Promo";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import {FaCpanel, FaGaugeHigh, FaShieldHeart} from "react-icons/fa6";
import {FaArrowUp, FaDollarSign, FaGlobeAfrica, FaServer, FaTicketAlt} from "react-icons/fa";
import FAQ from "@/app/components/FAQ/FAQ";
import {IoGameControllerSharp} from "react-icons/io5";
import {Button} from "@/app/components/ui/button";
import Card from "@/app/components/Card/Card";
import {HiLightningBolt} from "react-icons/hi";

export default function Page() {
    Intercom({
        app_id: 'dcisso7v',
    });

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

    return (
        <div className="w-full h-full flex flex-col">
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
                                {/*<motion.span*/}
                                {/*    className="text-zinc-400 selection:bg-white"*/}
                                {/*    variants={item}*/}
                                {/*    transition={{delay: 0.1}}*/}
                                {/*>*/}
                                {/*    PowerHut*/}
                                {/*    {' '}*/}
                                {/*</motion.span>*/}

                                <motion.span
                                    className="text-main selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.2}}
                                >
                                    Partner
                                    {' '}
                                </motion.span>
                                <motion.span
                                    className="text-zinc-400 selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.3}}
                                >
                                    Program.
                                </motion.span>
                            </motion.div>
                            <div>
                                <p className="mt-8 max-w-[40rem] selection:bg-main">
                                    We provide great products and services for you and your growing community!
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*<BackgroundBeams/>*/}
                </div>
            </div>
            <motion.div
                className="w-full h-auto flex items-center justify-center bg-gradient-to-br from-[#FF4D14]/10 to-transparent bg-opacity-50">
                <div
                    className="flex flex-col lg:flex-row justify-between max bg-zinc-800/50 rounded-lg items-center p-8 text-white">
                    <div className="flex-1 text-center mb-4 lg:mb-4 lg:mr-4">
                        <div className="mb-4">
                            <FaServer className="mx-auto text-main" size={48}/>
                        </div>
                        <h2 className="text-xl font-bold">Server Deals</h2>
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We would to be part of your community's growth and prosperity. Our partners can receive
                            discounted or even free services to help with the growing pains of their community and
                            kickstart an amazing experience for your players.
                        </p>
                    </div>
                    <div
                        className="flex-1 text-center border-t-2 lg:border-t-0 lg:border-l-2 border-main/50 px-8">
                        <div className="mb-4">
                            <FaDollarSign className="mx-auto text-main" size={48}/>
                        </div>
                        <h2 className="text-xl font-bold">Affiliate Program</h2>
                        <p>
                            Partners can pass their savings onto their fanbase through their own promo code! Fans can
                            use it at any time during checkout for a discount. Even better, partners can ear revenue
                            from their sales through our affiliate program!
                        </p>
                    </div>
                </div>
            </motion.div>
            <div className="background-tr">
                <div className="w-full h-auto pb-24 pt-24 max">
                    <div className="flex flex-col gap-4 items-start px-8 xl:p-8">
                        <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                            <p>REQUIREMENTS</p>
                        </Button>
                        <p className="bg-clip-text drop-shadow-2xl text-white text-6xl ">
                            <span className="text-main">Apply</span> for partnership
                        </p>
                        <p className="opacity-50 font-light max-w-lg">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We're excited to hear from you!
                        </p>
                    </div>
                    <div className="flex w-full h-auto flex-wrap gap-6 max-w-[100rem]">
                        <Card
                            header={"1,000+ followers"}
                            content={
                                "You need to have a minimum of 1,000 followers on your platform"
                            }
                        />
                        <Card
                            header={"2,000+ views each month"}
                            content={
                                "You need an average of 2,000 viewers either on stream or on video."
                            }
                        />
                        <Card
                            header={"Active upload or streams"}
                            content={
                                "Be active on where you stream or upload videos to."
                            }
                        />
                        <Card
                            header={"10+ members in the community"}
                            content={
                                "At least 10 members in your own community, gmod, minecraft etc."
                            }
                        />
                        <Card
                            header={"Content is aligned"}
                            content={
                                "Content is aligned with our services and brand and not againsts our rules"
                            }
                        />
                    </div>
                    <p className="pt-4">You can apply to the partner program by simply creating a ticket in our <a
                        href="https://discord.gg/powerhut" className="underline decoration-dotted text-main">Discord</a>
                    </p><p className="pt-4 opacity-50 text-sm">~ Note, you do not need to hit all these requirements to
                    be eligible</p>
                </div>
            </div>
            <div className="background-br">
                <div className="flex max flex-row  md:h-auto w-full">
                    <FAQ/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
