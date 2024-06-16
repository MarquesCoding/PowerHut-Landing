
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

                className="w-full h-[50vh] bg-gradient-to-tr from-[#FF4D14]/10 to-transparent flex items-center flex-col bg-opacity-50 relative">
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
                        <p className="text-3xl lg:text-8xl font-bold">How can <span
                            className="text-[#FF4D14]">We </span> help You?
                        </p>
                        <div className="max-w-2xl mt-4 flex flex-col gap-4 opacity-50">
                            <p>Our Support Team is ready for all your questions, at almost any hour during the day.
                                Outstanding Support is what we believe in, and what you deserve!</p>
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

                className="w-full h-auto flex items-center justify-center bg-gradient-to-tl to-[#FF4D14]/10 from-transparent bg-opacity-50 pb-10">
                <div
                    className="w-full lg:w-auto m-4 lg:m-0 h-auto select-none rounded-2xl bg-[#141414]/90 border border-white/10 relative flex flex-col lg:flex-row items-center justify-center duration-300">
                    <div
                        className="w-full h-full absolute bg-dot-white/[0.23] rounded-2xl z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
                    <div className="flex flex-col justify-between p-8 gap-4 items-center relative z-10">
                        <div className="text-center flex flex-col gap-4 items-center">
                            <p className="text-md font-semibold md:text-2xl">Discord</p>
                            <div
                                className="w-20 min-w-20 h-20 rounded-lg flex items-center justify-center text-[#FF4D14]">
                                <FaDiscord size={64}/>
                            </div>
                            <p className="text-sm md:text-md opacity-50 max-w-xs">Response Time</p>
                            <p className="text-sm md:text-lg max-w-xs">Generally 2-3 minutes</p>
                            <p className="text-sm md:text-lg text-[#FF4D14] max-w-xs mb-4">Online Now!</p>
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
                            <p className="text-sm md:text-lg text-[#FF4D14] max-w-xs mb-4">Online Now!</p>
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
            <FAQ/>
            <Footer/>
        </div>
    )
}
