'use client';
import React from "react";
import {motion} from "framer-motion";
import {NavigationMenuDemo} from "@/app/components/Navigation/Navigation";
import Footer from "@/app/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import Link from "next/link";

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
                        <p className="text-3xl lg:text-8xl font-bold">Fair usage Policy</p>
                        <div className="max-w-2xl text-start mt-12 flex flex-col gap-4">
                            <p>Last Updated : 05/12/2024</p>

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

                className="w-full h-auto flex items-center justify-center bg-gradient-to-br from-[#FF4D14]/10 to-transparent bg-opacity-50 mb-24 p-4 lg:p-0">
                <div className="mt-12 flex flex-col gap-4 max-w-2xl min-w-2xl w-full">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Illegal usage</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    PowerHut services may not be used for illegal purposes or in support of illegal activities.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    PowerHut reserves the right to cooperate with legal authorities and/or injured third parties in the investigation of any suspected crime or civil wrong doing.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Threats</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Use of the PowerHyt services to transmit any material (by e-mail, uploading, posting or otherwise sharing) that threatens or encourages bodily harm or destruction of property is strictly forbidden.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Harassment</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Use of the PowerHut services to transmit any material (by e-mail, uploading, posting or otherwise) that harasses another is strictly forbidden.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Forgery or impersonation</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Adding, removing or modifying identifying network header information in an effort to deceive or mislead is prohibited. Attempting to impersonate any person by using forged headers or other identifying information is prohibited. The use of anonymous remailers or nicknames does not constitute impersonation.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Fraudulent Activity</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Use of PowerHut service to make fraudulent offers to sell or buy products, items, or services, or to advance any type of financial scam such as “pyramid schemes” and “chain letters” is forbidden.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Termination</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Use of the PowerHut service to access, or to attempt to access, the accounts of others, or to penetrate, or attempt to penetrate, security measures of PowerHut or another entity’s computer software or hardware, electronic communications system, or telecommunications system, whether or not the intrusion results in the corruption or loss of data, is expressly prohibited and the offending PowerHut account is subject to immediate termination and further investigation.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Network disruptions and unfriendly activity</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Use of the PowerHut service for any activity which affects the ability of other people or systems to use PowerHut Services or the Internet is forbidden. This includes “Denial of Service” (DoS) attacks against another network host or individual user. Interference with or disruption of other network users, services or equipment is prohibited. It is the Member’s responsibility to ensure that their network is configured in a secure manner. A Subscriber may not, through action or inaction, allow others to use their network for illegal or inappropriate actions. A Subscriber may not permit their network, through action or inaction, to be configured in such a way that gives a third party the capability to use their network in an illegal or inappropriate manner. Unauthorized entry and/or use of another company and/or individual’s computer system will result in immediate account termination. PowerHut will not tolerate any subscriber attempting to access the accounts of others, or penetrate security measures of other systems, whether or not the intrusion results in corruption or loss of data.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Fraud</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Fraud involves a knowing misrepresentation or misleading statement, writing or activity made with the intent that the person receiving it will act upon it. Fraud is strictly prohibited and offenses will be investigated.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Third-party links, sites and services</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by PowerHut. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from PowerHut, you do so at your own risk and you agree that PowerHut will have no liability arising from your use of or access to any third-party website, service, or content.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <AccordionTrigger>The term 'unmetered' and storage limits</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    PowerHut offers in Our Top plans access to unmetered disk space. But what
                                    does “unmetered” mean precisely? The actual concept is we do not give unlimited hard
                                    disk space, we are giving free upgrades to storage. It means that if you use 100 GB
                                    out of your 100 GB limit, we will increase your resource limits to your server free
                                    of cost. We will at maximum increase your storage limit to 300 GB in most
                                    situations.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    When you use the MySQL database service provided by PowerHut, we will have no such resource limits from the outset. But, we discourage using our database service for running plugins such as CoreProtect, Dynmap and other storage intensive plugins. If your database gets too large, we reserve the right to seek removal of it.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </motion.div>
            <Footer/>
        </div>
    )
}
