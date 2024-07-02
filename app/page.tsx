'use client';
import { motion } from "framer-motion";
import PricingCard from "./components/PricingCard/PricingCard";
import { NavigationMenuDemo } from "./components/Navigation/Navigation";
import React, {useEffect} from "react";
import { BackgroundBeams } from "./components/Backgrounds/Beam";
import GameCard from "./components/GameCard/GameCard";
import MapComponent from "./components/Globe/Globe";
import { HiLightningBolt } from "react-icons/hi";
import { PiGameControllerFill } from "react-icons/pi";
import {FaGaugeHigh, FaShieldHeart, FaToolbox} from "react-icons/fa6";
import { LuNetwork } from "react-icons/lu";
import { RiHardDriveFill } from "react-icons/ri";
import Card from "@/app/components/Card/Card";
import Footer from "@/app/components/Footer";
import {VscGraph, VscLayoutPanelRight} from "react-icons/vsc";
import {TbBrandMinecraft, TbChevronLeftPipe} from "react-icons/tb";
import {FaBolt, FaGlobeAfrica, FaRegCheckCircle, FaRegHandPointer, FaTicketAlt} from "react-icons/fa";
import {pricingTiers, webTiers} from "@/app/utils/pricing";
import axios from "axios";
import Intercom from "@intercom/messenger-js-sdk";
import Promo from "@/app/components/Promo/Promo";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import {Button} from "@/app/components/ui/button";
import AnimatedCursor from "react-animated-cursor";
import Space from "@/app/components/Space/Space";
import {BiSupport} from "react-icons/bi";
import {IoArrowForwardCircle, IoGameControllerSharp} from "react-icons/io5";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/app/components/ui/accordion";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/app/components/ui/tooltip";
import {MdOutlineSecurity} from "react-icons/md";
import GamePanel from "@/app/components/GamePanel/GamePanel";
import Flag from 'react-world-flags'

export default function Home() {
    Intercom({
        app_id: 'dcisso7v',
    });
    const handlePing = async(ip: string) => {
        axios.get('https://api.viewdns.info/ping/?host=twitter.com&apikey=yourapikey&output=json').then((res) => {
            return res.data;
        })
    }

    useEffect(() => {
       handlePing('https://geekflare.com').then((res) => console.log(res));
    },[]);

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
        // <FollowerPointerCard>
        <>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 100,
                }}
                transition={{
                    ease: "linear",
                    opacity: {duration: 1},
                }}
                className="w-full h-full flex flex-col max-w-screen items-center">
                <NavigationBar/>
                <div className="w-full h-auto background-tr flex items-center justify-center pt-24">
                    <div className="w-full h-full max pb-4 xl:pb-0">
                        <div
                            className="w-full h-full flex items-center justify-center relative z-10 flex-col">
                            <div className="flex flex-col w-full px-8 xl:p-8">
                                <motion.div
                                    className="text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-bold selection:bg-white"
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                  <span className="selection:bg-main">
                                    Poof, it was a good run
                                  </span>
                                </motion.div>
                                <div>
                                    <p className="mt-8 max-w-[40rem] selection:bg-main">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        We've decided to close PowerHut due to personal reasons. We highly recommend you check out <a href="https://surfhosting.co">SurfHosting</a>!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*<BackgroundBeams/>*/}
                    </div>
                </div>
                <Footer/>
            </motion.div>
        </>
// </FollowerPointerCard>
    )
        ;
}
