
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

export default function Page() {
    Intercom({
        app_id: 'dcisso7v',
    });
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

                className="w-full h-auto flex items-center justify-center bg-gradient-to-tr from-[#FF4D14]/10 to-transparent bg-opacity-50 pb-24 p-4 lg:0">
                <div className="flex flex-col min-w-2xl w-full items-center">
                    <div className="mt-12 flex flex-col gap-4 max-w-2xl min-w-2xl w-full">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How can I contact support?</AccordionTrigger>
                                <AccordionContent>
                                    <p className="leading-7 mt-6 text-white/50">
                                        We utilize Discord to provide realtime support!
                                        Moreover, we can also be contacted through our Billing Portal.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How long does it take for a server to be ready?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="leading-7 mt-6 text-white/50">
                                            Servers are available as soon as your payment has been processed, typically
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            {' '}within a few minutes. If they aren't throw us a message.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can I transfer my current server to PowerHut?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="leading-7 mt-6 text-white/50">
                                            Of course! Feel free to create a ticket on our Discord Server and we will
                                            help you out.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What game panel do you use?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="leading-7 mt-6 text-white/50">
                                            We use a heavily customized version of the Pterodactyl panel.
                                            As such, you can expect a fast, lag-free, and secure experience to take care
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            {' '}of all your server's needs!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Which payment methods do you accept?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="leading-7 mt-6 text-white/50">
                                            We currently accept payments through Stripe and PayPal.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can I upgrade or downgrade my server in the
                                        future?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="leading-7 mt-6 text-white/50">
                                            Absolutely, just create a ticket and we will handle everything! And the best
                                            part?
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            {' '}Upgrades are pro-rated so, you won't have to worry about being overcharged!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Where are your servers located?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="leading-7 mt-6 text-white/50">
                                            We have servers in Germany & USA with more locations coming soon!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <AccordionTrigger>Can I change my server location after I've
                                        purchased?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="leading-7 mt-6 text-white/50">
                                            We can only transfer servers as needed, as it depends on the situation and
                                            available stock.
                                            Feel free to open a ticket with us if you wish to change your location!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Which games do you support?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="leading-7 mt-6 text-white/50">
                                            We have a huge variety of supported games such as Minecraft, Valheim,
                                            Terria, Factorio, Rust, Satisfactory and much more! Feel free to recommend a
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            {' '}game in the discord if we don't currently support it!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How can I cancel my server?</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="leading-7 mt-6 text-white/50">
                                            Damn, that sucks for you to go. But no worries. You can request a
                                            cancellation through the billing panel!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </motion.div>
                <Footer/>
        </div>
)
}
