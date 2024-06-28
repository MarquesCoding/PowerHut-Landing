
'use client';
import React from "react";
import {motion} from "framer-motion";
import {NavigationMenuDemo} from "@/app/components/Navigation/Navigation";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import {pricingTiers} from "@/app/utils/pricing";
import PricingCard from "@/app/components/PricingCard/PricingCard";
import {LuDatabaseBackup, LuTicket} from "react-icons/lu";
import {MdOutlineSwitchAccessShortcutAdd} from "react-icons/md";
import {RiHomeWifiFill} from "react-icons/ri";
import {IoIosSwitch} from "react-icons/io";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/app/components/ui/accordion";
import {FaBook, FaDiscord} from "react-icons/fa";
import {Button} from "@/app/components/ui/button";
import {FiBook} from "react-icons/fi";
import Intercom from "@intercom/messenger-js-sdk";
import Promo from "@/app/components/Promo/Promo";
import FAQ from "@/app/components/FAQ/FAQ";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";

export default function Page() {

    const isTimeWithinRange = (): boolean => {
        const now = new Date();
        const gmtHours = now.getUTCHours();

        // 9 AM to 11 PM in 24-hour format is 9 to 23
        return gmtHours >= 9 && gmtHours < 23;
    };


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
                                    className="text-zinc-400 selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.2}}
                                >
                                    How
                                    {' '}
                                </motion.span>
                                <motion.span
                                    className="text-zinc-400 selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.3}}
                                >
                                    can
                                    {' '}
                                </motion.span>
                                <motion.span
                                    className="text-main selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.4}}
                                >
                                    We
                                    {' '}
                                </motion.span>
                                <motion.span
                                    className="text-zinc-400 selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.5}}
                                >
                                    help
                                    {' '}
                                </motion.span>
                                <motion.span
                                    className="text-zinc-400 selection:bg-white"
                                    variants={item}
                                    transition={{delay: 0.6}}
                                >
                                    You?
                                </motion.span>
                            </motion.div>
                            <div>
                                <p className="mt-8 max-w-[40rem] selection:bg-main">
                                    Our Support Team is ready for all your questions, at almost any hour during the day.
                                    Outstanding Support is what we believe in, and what you deserve!
                                </p>
                                <p className="mt-8 max-w-[40rem] opacity-50 selection:bg-main">
                                    NOTE - We are currently not available 24/7.
                                    We typically reply between 9AM GMT - 11PM GMT ~ <b>(Current Time
                                    : {new Date().getUTCHours()}:{new Date().getUTCMinutes()})</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*<BackgroundBeams/>*/}
                </div>
            </div>
            <div className="background-br">
                <motion.div className="w-full h-auto flex p-8 pb-10 max">
                    <div
                        className="w-full lg:w-full m-4 lg:m-0 h-auto select-none rounded-2xl bg-[#141414]/90 border border-white/10 relative flex flex-col lg:flex-row items-center justify-between px-0 lg:px-40 duration-300">
                        <div
                            className="w-full h-full absolute bg-dot-white/[0.23] rounded-2xl z-0 -mx-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
                        <div className="flex flex-col justify-between p-8 gap-4 items-center relative z-10">
                            <div className="text-center flex flex-col gap-4 items-center">
                                <p className="text-md font-semibold md:text-2xl">Discord</p>
                                <div
                                    className="w-20 min-w-20 h-20 rounded-lg flex items-center justify-center text-[#FF4D14]">
                                    <FaDiscord size={64}/>
                                </div>
                                <p className="text-sm md:text-md opacity-50 max-w-xs">Response Time</p>
                                <p className="text-sm md:text-lg max-w-xs">Generally 2-3 minutes</p>
                                <p className="text-sm md:text-lg text-[#FF4D14] max-w-xs mb-4">{isTimeWithinRange() ? 'Online Now' : 'Offline'}</p>
                                <a href="https://discord.gg/invite/powerhut">
                                    <Button variant="secondary">
                                        Join Server
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="w-40 h-0.5 lg:w-0.5 lg:h-40 bg-white rounded-lg opacity-5 relative flex"/>
                        <div className="flex flex-col justify-between p-8 gap-4 items-center relative z-10">
                            <div className="text-center flex flex-col gap-4 items-center">
                                <p className="text-md font-semibold md:text-2xl">Billing Area</p>
                                <div
                                    className="w-20 min-w-20 h-20 rounded-lg flex items-center justify-center text-[#FF4D14]">
                                    <LuTicket size={64}/>
                                </div>
                                <p className="text-sm md:text-md opacity-50 max-w-xs">Response Time</p>
                                <p className="text-sm md:text-lg max-w-xs">Generally under 2 hours</p>
                                <p className="text-sm md:text-lg text-[#FF4D14] max-w-xs mb-4">{isTimeWithinRange() ? 'Online Now' : 'Offline'}</p>
                                <a href="https://billing.powerhut.pro/contact.php">
                                    <Button variant="secondary">
                                        Create a Ticket
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="w-40 h-0.5 lg:w-0.5 lg:h-40 bg-white rounded-lg opacity-5 relative flex"/>
                        <div className="flex flex-col justify-between p-8 gap-4 items-center relative z-10">
                            <div className="text-center flex flex-col gap-4 items-center">
                                <p className="text-md font-semibold md:text-2xl">Knowledgebase</p>
                                <div
                                    className="w-20 min-w-20 h-20 rounded-lg flex items-center justify-center text-[#FF4D14]">
                                    <FiBook size={64}/>
                                </div>
                                <p className="text-sm md:text-md opacity-50 max-w-xs">Response Time</p>
                                <p className="text-sm md:text-lg max-w-xs">Always Available</p>
                                <p className="text-sm md:text-lg text-[#FF4D14] max-w-xs mb-4">Online Now!</p>
                                <a href="https://billing.powerhut.pro/index.php?rp=/knowledgebase">
                                    <Button variant="secondary">
                                        View Articles
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
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
