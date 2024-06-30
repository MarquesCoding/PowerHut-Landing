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
                <Promo/>
                {/*<Space/>*/}
                {/*<BackgroundBeams/>*/}
                <div className="w-full h-auto background-tr flex items-center justify-center">
                    <div className="w-full h-full max pb-4 xl:pb-0">
                        <div
                            className="w-full h-full flex items-center justify-center relative z-10 flex-col">
                            <NavigationBar/>
                            <div className="flex flex-col w-full px-8 xl:p-8">
                                <div
                                    className="w-fit h-auto rounded-full mb-4 text-sm flex items-center gap-4 py-1 px-2 border border-[#FF4D14]/50 bg-[#FF4D14]/10"
                                >
                                    Minecraft 1.21: The Tricky Trails Update, released!
                                    <IoArrowForwardCircle className="text-main" size={22}/>
                                </div>
                                <motion.div
                                    className="text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-bold selection:bg-white"
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                  <span className="selection:bg-main">
                                    Power up your play.
                                  </span>
                                    {' '}
                                    <br/>
                                    <motion.span
                                        className="text-zinc-400 selection:bg-white"
                                        variants={item}
                                        transition={{delay: 0.5}}
                                    >
                                        Host,
                                        {' '}
                                    </motion.span>

                                    <motion.span
                                        className="text-zinc-400 selection:bg-white"
                                        variants={item}
                                        transition={{delay: 1}}
                                    >
                                        Game,
                                        {' '}
                                    </motion.span>
                                    <motion.span
                                        className="text-main selection:bg-white"
                                        variants={item}
                                        transition={{delay: 1.5}}
                                    >
                                        Dominate.
                                    </motion.span>
                                </motion.div>
                                <div>
                                    <p className="mt-8 max-w-[40rem] selection:bg-main">
                                        We are committed to transparency and user-friendly features, ensuring a superior
                                        gaming experience for our customers worldwide.
                                    </p>
                                </div>
                                <div className="flex flex-row gap-5 mt-12">
                                    <Button variant="secondary"
                                            onClick={() => window.location.href = "https://billing.powerhut.pro"}>
                                        GET STARTED
                                    </Button>
                                    <Button variant="outline" className={"flex gap-2"}
                                            onClick={() => window.location.href = "https://billing.powerhut.pro/knowledgebase"}>
                                        <BiSupport size={22}/>SUPPORT
                                    </Button>
                                </div>
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
                <div className="flex flex-col w-full h-full">
                    <div className="background-br">
                        <div className="flex flex-col justify-center max item-center w-full h-auto pb-24">
                            <div className="flex w-full h-auto justify-center items-center flex-col">
                                <div
                                    className="flex w-fit h-fit flex-wrap flex-row justify-center px-8 lg:p-0 md:justify-center items-start md:items-center gap-2">
                                    {webTiers
                                        .filter((_, index) => [1, 0].includes(index))
                                        .map((tier, index) => (
                                            // @ts-ignore
                                            <PricingCard type="web" key={index} {...tier} />
                                        ))
                                    }
                                    {pricingTiers
                                        .filter((_, index) => [0, 2, 3, 4, 5].includes(index))
                                        .map((tier, index) => (
                                            // @ts-ignore
                                            <PricingCard type="game" key={index} {...tier} />
                                        ))
                                    }
                                </div>
                                <div className="mt-4">
                                    <p className="mt-4 mb-3 font-bold text-center md:text-start">
                                        Looking for more prices? These are only our recommendations. Get started
                                        with <a
                                        href="/plans" className="underline">Server Hosting</a>.
                                    </p>
                                    <p className="opacity-60 text-center text-white w-full text-xs">*CPU will vary
                                        based
                                        on
                                        server
                                        location - will be equivalent</p>
                                    <p className="opacity-60 text-center text-white w-full text-xs">
                                        ** Additional RAM can be purchased through a support ticket
                                        (billing / discord)
                                    </p>
                                    <p className=" opacity-60 text-center text-white w-full text-xs">
                                        *** Fair Use Policy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="background-tr">
                        <div className="w-full h-auto pb-24 max">
                            <div className="mb-20 flex flex-col gap-4 items-start px-8 xl:p-8">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>EASY TRANSFER</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl ">
                                    Managed Server Migration
                                </p>
                                <p className="opacity-50 font-light max-w-lg">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    We know sometimes it's a lot of effort to transfer from one host to another, so
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    we've decided to make that prices a whole lot smoother for you.
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between bg-zinc-800/50 rounded-lg items-center p-8 text-white">
                                <div className="flex-1 text-center mb-4 lg:mb-4 lg:mr-4">
                                    <div className="mb-4">
                                        <FaTicketAlt className="mx-auto text-main" size={48}/>
                                    </div>
                                    <h2 className="text-xl font-bold">Create a Ticket</h2>
                                    <p>
                                        Purchased a server with us? Ready to migrate from your old host? Join our
                                        <a href="https://discord.gg/powerhut" className="text-main"> Discord</a> and create a
                                        support ticket to request migration!
                                    </p>
                                </div>
                                <div className="flex-1 text-center border-t-2 border-b-2 lg:border-b-0 lg:border-t-0 lg:border-l-2 lg:border-r-2 border-main/50 px-8">
                                    <div className="mb-4">
                                        <MdOutlineSecurity className="mx-auto text-main" size={48}/>
                                    </div>
                                    <h2 className="text-xl font-bold">Provide SFTP Details</h2>
                                    <p>
                                        Provide us with the
                                        <span className="text-main"> FTP/SFTP</span> details of your current host
                                        and create a
                                        <span className="text-main"> .zip</span> of all your files. We will then
                                        migrate your files for you!
                                    </p>
                                </div>
                                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-4">
                                    <div className="mb-4">
                                        <IoGameControllerSharp className="mx-auto text-main" size={48}/>
                                    </div>
                                    <h2 className="text-xl font-bold">Enjoy the Game!</h2>
                                    <p>
                                        Once migrated, we will let you know when your server is ready to go. After that,
                                        the
                                        <span className="text-red-500"> fun</span> can begin! Any issues, throw us a message -- we are happy to help
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="background-br">
                        <div className="w-full h-auto pb-24 max">
                            <div className="mb-20 flex flex-col gap-4 items-start px-8 xl:p-8">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>SUPPORTED GAMES</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl ">
                                    Old & New supported games
                                </p>
                                <p className="opacity-50 font-light max-w-lg">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Don't see a game that you want to host, no problem! Throw us a suggesting in the
                                    Discord.
                                </p>
                            </div>
                            <div
                                className="flex w-full h-auto flex-wrap gap-6 items-center justify-center lg:justify-start px-8 xl:p-8">
                                <GameCard imageSrc={"/minecraft.webp"}/>
                                <GameCard imageSrc={"/rust.webp"}/>
                                <GameCard imageSrc={"/satisfactory.webp"}/>
                                <GameCard imageSrc={"/palworld.webp"}/>
                                <GameCard imageSrc={"/terraria.webp"}/>
                                <GameCard imageSrc={"/tf2.webp"}/>
                                <GameCard imageSrc={"/garrys.jpg"}/>
                                <GameCard imageSrc={"/cs2.jpg"}/>
                                <GameCard/>
                            </div>
                        </div>
                    </div>
                    <div className="background-tr">
                        <div className="w-full max h-auto flex flex-col pb-48 px-8 xl:p-8">
                            <div className="mb-20 flex flex-col gap-4">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>FEATURES</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl">
                                    Hosting tailored to your needs
                                </p>
                                <p className="opacity-50 font-light max-w-lg">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    You shouldn't have to pay extra for basic features
                                </p>
                            </div>
                            <div className="flex w-full h-auto flex-wrap gap-6 max-w-[100rem]">
                                <Card
                                    logo={<HiLightningBolt size={32}/>}
                                    header={"99.99% Uptime"}
                                    content={
                                        "Uptime is critical for your operations, and reliable infrastructure is a must."
                                    }
                                />
                                <Card
                                    logo={<FaShieldHeart size={32}/>}
                                    header={"DDoS Protection"}
                                    content={
                                        "All of our servers are outfitted with DDoS protection to help you avoid downtime."
                                    }
                                />
                                <Card
                                    logo={<FaGaugeHigh size={32}/>}
                                    header={"High performance"}
                                    content={
                                        "All of our services use high end AMD & Intel CPUs and enterprise level NVMe or SATA SSD storage."
                                    }
                                />
                                <Card
                                    logo={<FaGlobeAfrica size={32}/>}
                                    header={"NA & EU Locations"}
                                    content={
                                        "We've got servers in locations such as NA & EU and expanding!"
                                    }
                                />
                                <Card
                                    logo={<VscLayoutPanelRight size={32}/>}
                                    header={"Custom Game Control Panel"}
                                    content={
                                        "Our Custom-made Power Panel is what powers all our servers!"
                                    }
                                />
                                <Card
                                    logo={<TbChevronLeftPipe size={32}/>}
                                    header={"Full FTP Access"}
                                    content={
                                        "Take full control of all of your file 24/7"
                                    }
                                />
                                <Card
                                    logo={<VscGraph size={32}/>}
                                    header={"Transparent Resource Analytics"}
                                    content={
                                        "We never oversell our servers and we want to be 100% transparent."
                                    }
                                />
                                <Card
                                    logo={<HiLightningBolt size={32}/>}
                                    header={"Instant Deployments"}
                                    content={
                                        "Get started within minutes with our instant deployment technology."
                                    }
                                />
                                <Card
                                    logo={<PiGameControllerFill size={32}/>}
                                    header={"Easy to use Power Panel"}
                                    content={
                                        "We've compiled our best features into one single panel."
                                    }
                                />
                                <Card
                                    logo={<FaToolbox size={32}/>}
                                    header={"One-click Installer"}
                                    content={
                                        "Change games and modpacks with one click."
                                    }
                                />
                                <Card
                                    logo={<LuNetwork size={32}/>}
                                    header={"Free Dedicated IP*"}
                                    content={
                                        "When you choose any of our servers above Basic you get a dedicated IP."
                                    }
                                />
                                {/*<Card logo={(<FaGlobeEurope size={44}/>)}*/}
                                {/*      header={"Low Latency Servers"}*/}
                                {/*      content={"We have over 6 different locations worldwide to choose from, so that you have low latency wherever you're located."}*/}
                            </div>
                        </div>
                    </div>
                    <div className="background-br">
                        <div className="flex max flex-col w-full h-full pb-40 px-8 xl:p-8">
                            <div className="mb-20 flex flex-col gap-4">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>PRICING</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl">
                                    We take the market into consideration
                                </p>
                                <p className="opacity-50 font-light max-w-lg">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    We provide the same, if not better hardware and support as the leading providers at
                                    a fraction of the cost.
                                </p>
                            </div>
                            <div className="flex">
                                <div className="overflow-x-auto w-full">
                                    <table className="min-w-full border border-white/10 rounded-lg">
                                        <thead className="bg-[#FF4D14]">
                                        <tr>
                                            <th className="p-4 lg:p-6 text-left"></th>
                                            <th className="p-4 lg:p-6 text-left">PowerHut</th>
                                            <th className="p-4 lg:p-6 text-left">DedicatedMC</th>
                                            <th className="p-4 lg:p-6 text-left">CreeperHost</th>
                                            <th className="p-4 lg:p-6 text-left">Shockbyte</th>
                                            <th className="p-4 lg:p-6 text-left">Bisect Hosting</th>
                                            <th className="p-4 lg:p-6 text-left">PebbleHost</th>
                                            <th className="p-4 lg:p-6 text-left">Apex Hosting</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 w-72">Server Splitting</td>
                                            <td className="p-4 lg:p-6 opacity-50">Coming soon</td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 w-72">Dedicated CPU cores</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 w-72">Free dedicated IP</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 w-72">Free user-managed off-site backups</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 w-72">Free reverse proxy</td>
                                            <td className="p-4 lg:p-6 opacity-50">Coming soon</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 w-72">Free subdomain</td>
                                            <td className="p-4 lg:p-6 opacity-50">Early Access*</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 w-72">Price <span
                                                className="text-xs">(8GB)</span></td>
                                            <td className="p-4 lg:p-6 text-lg text-orange-600 font-bold">$12/mo.</td>
                                            <td className="p-4 lg:p-6">$28/mo.</td>
                                            <td className="p-4 lg:p-6">$42/mo.</td>
                                            <td className="p-4 lg:p-6">$20/mo.</td>
                                            <td className="p-4 lg:p-6">$40/mo.</td>
                                            <td className="p-4 lg:p-6">$42/mo.</td>
                                            <td className="p-4 lg:p-6 ">$40/mo.</td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 w-72">CPU</td>
                                            <td className="p-4 lg:p-6 w-72">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                8700G <span
                                                                className="text-xs italic">(8C/16T @ 3.6GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+7+PRO+8700GE&id=6001"
                                                                className="underline">CPU Score - 31208</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                7950X <span
                                                                className="text-xs italic">(16C/32T @ 4.5GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+9+7950X&id=5031"
                                                                className="underline">CPU Score - 62846</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </td>
                                            <td className="p-4 lg:p-6 w-72">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                3600 <span
                                                                className="text-xs italic">(6C/12T @ 3.6GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+5+3600&id=3481"
                                                                className="underline">CPU Score - 17758</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                5950X <span
                                                                className="text-xs italic">(16C/32T @ 3.4GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?id=3862"
                                                                className="underline">CPU Score - 45654</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                7950X <span
                                                                className="text-xs italic">(16C/32T @ 4.5GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+9+7950X&id=5031"
                                                                className="underline">CPU Score - 62846</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </td>
                                            <td className="p-4 lg:p-6 opacity-50">Unknown</td>
                                            <td className="p-4 lg:p-6 w-72">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                E-2386G <span
                                                                className="text-xs italic">(6C/12T @ 3.5GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?cpu=Intel+Xeon+E-2386G+%40+3.50GHz&id=4896"
                                                                className="underline">CPU Score - 19613</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                3600X <span
                                                                className="text-xs italic">(6C/12T @ 3.8GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+5+3600X&id=3494"
                                                                className="underline">CPU Score - 18210</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </td>
                                            <td className="p-4 lg:p-6 opacity-50">Unknown</td>
                                            <td className="p-4 lg:p-6 w-72">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                E-1630V3<span
                                                                className="text-xs italic">(4C/8T @ 3.7GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?cpu=Intel+Xeon+E5-1630+v3+%40+3.70GHz&id=2384"
                                                                className="underline">CPU Score - 7391</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                7700K <span
                                                                className="text-xs italic">(4C/8T @ 4.2GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i7-7700K+%40+4.20GHz&id=2874"
                                                                className="underline">CPU Score - 9653</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </td>
                                            <td className="p-4 lg:p-6 w-72">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                5700X<span
                                                                className="text-xs italic">(8C/16T @ 3.4GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?id=4814&cpu=AMD+Ryzen+7+5700X"
                                                                className="underline">CPU Score - 26695</a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p className="decoration-dotted underline opacity-50 hover:opacity-100 duration-300 text-start">
                                                                5900X <span
                                                                className="text-xs italic">(12C/24T @ 3.7GHz)</span>
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <a
                                                                href="https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+9+5900X&id=3870"
                                                                className="underline">CPU Score - 39167 </a>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-xs mt-2 opacity-50">
                                        Comparison data accurate as of June 1st, 2024
                                    </p>
                                    <p className="text-xs mt-2 opacity-50">
                                        * This is currently a work in progress, but you might see it in the panel
                                        already!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="background-tr">
                       <GamePanel/>
                    </div>
                    <div className="background-br">
                        <div className="flex max flex-col justify-center item-center w-full h-auto pb-24 px-8 xl:p-8">
                            <div className="mb-20 flex flex-col gap-4">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>MONITORING</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl">
                                    Great Transparency
                                </p>
                                <p className="opacity-50 font-light max-w-lg">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    We want to be as open as possible with you guys! Feel free to see
                                    our server stats etc
                                </p>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
                                <div className="flex flex-col xl:flex-row gap-4 w-full">
                                    <img
                                        src={"/grafana.png"}
                                        alt="panel"
                                        className="rounded-lg max-w-4xl"
                                    />
                                    <div>
                                        <p className="text-3xl font-bold">24/7 Monitoring powered by <span
                                            className="text-main">Grafana</span></p>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        <p className="mt-4 opacity-80">
                                            <span className="text-main opacity-100">Grafana</span> is what we use for
                                            technical support and we want to be 100% transparent and share what we use
                                            to help you guys out! Grafana provide monitoring, logs & statistics for our
                                            nodes. Go take a look!
                                        </p>
                                        <div className="w-full flex gap-4 flex-row mt-4">
                                            <ul>
                                                <li className="flex items-center py-2 gap-2">
                                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                                    <span className="font-light">Server Logs*</span>
                                                </li>
                                                <li className="flex items-center py-2 gap-2">
                                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                                    <span className="font-light">Network Traffic Graphs</span>
                                                </li>
                                                <li className="flex items-center py-2 gap-2">
                                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                                    <span className="font-light">Memory Usage Graphs</span>
                                                </li>
                                                <li className="flex items-center py-2 gap-2">
                                                    <IoMdCheckmarkCircleOutline size={22} className="text-main"/>
                                                    <span className="font-light">CPU Usage Graphs</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className="flex items-center py-2 gap-2">
                                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                                    <span className="font-light">Advanced Node Selector</span>
                                                </li>
                                                <li className="flex items-center py-2 gap-2">
                                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                                    <span className="font-light">Disk Usage Graphs</span>
                                                </li>
                                                <li className="flex items-center py-2 gap-2">
                                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                                    <span className="font-light">Hardware Information</span>
                                                </li>
                                                <li className="flex items-center py-2 gap-2">
                                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                                    <span className="font-light">Hardware Location</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mt-4 opacity-20 text-sm">* This feature is only for support staff
                                            due to personal information.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="background-tr">
                        <div className="flex max flex-row  py-20 md:h-auto w-full px-8 xl:p-8">
                            <div
                                className="mx-auto w-full relative overflow-hidden h-full md:h-[70rem] px-4 flex flex-col">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                    }}
                                    className="div"
                                >
                                    <div className="flex flex-col gap-4">
                                        <Button className="w-fit h-fit font-mono text-black" variant="secondary"
                                                size="sm">
                                            <p>LOCATIONS</p>
                                        </Button>
                                        <p className="bg-clip-text drop-shadow-2xl text-white text-6xl">
                                            Powerful servers across the globe
                                        </p>
                                        <p className="opacity-50 font-light max-w-lg pb-12 mb:pb-0">
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            We have limited stock of servers, so keep an eye out here! Don&apos;t see
                                            the location that you want? Throw us a ticket in the
                                            Discord!
                                        </p>

                                        <h1 className="lg:text-4xl">
                                            Nine global low-latency locations
                                        </h1>
                                        <div className="flex flex-row flex-wrap gap-4">
                                            {/*<div*/}
                                            {/*    className="flex flex-row gap-2 items-center bg-white px-2 rounded text-black opacity-50 duration-300 hover:opacity-100">*/}
                                            {/*    <Flag code="USA" className="w-6"/>*/}
                                            {/*    <div>*/}
                                            {/*        Seattle (West USA)*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div*/}
                                            {/*    className="flex flex-row gap-2 items-center bg-white px-2 rounded text-black opacity-50 duration-300 hover:opacity-100">*/}
                                            {/*    <Flag code="USA" className="w-6"/>*/}
                                            {/*    <div>*/}
                                            {/*        St. Louis (Central USA)*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div
                                                className="flex flex-row gap-2 items-center bg-white px-2 rounded text-black opacity-50 duration-300 hover:opacity-100">
                                                <Flag code="USA" className="w-6"/>
                                                <div>
                                                    New York (East USA)
                                                </div>
                                            </div>
                                            {/*<div*/}
                                            {/*    className="flex flex-row gap-2 items-center bg-white px-2 rounded text-black opacity-50 duration-300 hover:opacity-100">*/}
                                            {/*    <Flag code="GBR" className="w-6"/>*/}
                                            {/*    <div>*/}
                                            {/*        London (UK)*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div
                                                className="flex flex-row gap-2 items-center bg-white px-2 rounded text-black opacity-50 duration-300 hover:opacity-100">
                                                <Flag code="DEU" className="w-6"/>
                                                <div>
                                                    Falkenstein (Germany)
                                                </div>
                                            </div>
                                            {/*<div*/}
                                            {/*    className="flex flex-row gap-2 items-center bg-white px-2 rounded text-black opacity-50 duration-300 hover:opacity-100">*/}
                                            {/*    <Flag code="IND" className="w-6"/>*/}
                                            {/*    <div>*/}
                                            {/*        India (Asia)*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div*/}
                                            {/*    className="flex flex-row gap-2 items-center bg-white px-2 rounded text-black opacity-50 duration-300 hover:opacity-100">*/}
                                            {/*    <Flag code="SGP" className="w-6"/>*/}
                                            {/*    <div>*/}
                                            {/*        Singapore (Asia)*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div*/}
                                            {/*    className="flex flex-row gap-2 items-center bg-white px-2 rounded text-black opacity-50 duration-300 hover:opacity-100">*/}
                                            {/*    <Flag code="aus" className="w-6"/>*/}
                                            {/*    <div>*/}
                                            {/*        Sydney (Australia)*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div*/}
                                            {/*    className="flex flex-row gap-2 items-center bg-white px-2 rounded text-black opacity-50 duration-300 hover:opacity-100">*/}
                                            {/*    <Flag code="jpn" className="w-6"/>*/}
                                            {/*    <div>*/}
                                            {/*        Japan (Asia)*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </motion.div>
                                <div className="w-full h-auto sm:h-[90rem] flex items-center justify-center">
                                    <MapComponent
                                        locations={[
                                            // {
                                            //     x: 44.5, y: 21.5, name: (
                                            //         <div className="flex items-center justify-center flex-col">
                                            //             <p>London - UK</p>
                                            //             <p className="opacity-50 text-xs">Coming soon</p>
                                            //         </div>
                                            //     )
                                            // },
                                            {x: 46, y: 25.5, name: `Germany - FSN`},
                                            // {
                                            //     x: 92, y: 80, name: (
                                            //         <div className="flex items-center justify-center flex-col">
                                            //             <p>Australia - SY</p>
                                            //             <p className="opacity-50 text-xs">Coming soon</p>
                                            //         </div>
                                            //     )
                                            // },
                                            // {
                                            //     x: 78, y: 60, name: (
                                            //         <div className="flex items-center justify-center flex-col">
                                            //             <p>Asia - SG</p>
                                            //             <p className="opacity-50 text-xs">Coming soon</p>
                                            //         </div>
                                            //     )
                                            // },
                                            // {
                                            //     x: 70, y: 50, name: (
                                            //         <div className="flex items-center justify-center flex-col">
                                            //             <p>Asia - IN</p>
                                            //             <p className="opacity-50 text-xs">Coming soon</p>
                                            //         </div>
                                            //     )
                                            // },
                                            // {
                                            //     x: 96.5, y: 90, name: (
                                            //         <div className="flex items-center justify-center flex-col">
                                            //             <p>Asia - JP</p>
                                            //             <p className="opacity-50 text-xs">Coming soon</p>
                                            //         </div>
                                            //     )
                                            // },
                                            {
                                                x: 25, y: 24, name: (
                                                    <div className="flex items-center justify-center flex-col">
                                                        <p>America - NYC</p>
                                                        <p className="text-xs font-bold">Most Popular</p>
                                                    </div>
                                                ), showTooltip: true
                                            },
                                            // {
                                            //     x: 8, y: 25, name: (
                                            //         <div className="flex items-center justify-center flex-col">
                                            //             <p>America - SEA</p>
                                            //             <p className="opacity-50 text-xs">Coming soon</p>
                                            //         </div>
                                            //     )
                                            // },
                                            // {
                                            //     x: 18, y: 30, name: (
                                            //         <div className="flex items-center justify-center flex-col">
                                            //             <p>America - MIS</p>
                                            //             <p className="opacity-50 text-xs">Coming soon</p>
                                            //         </div>
                                            //     )
                                            // },
                                        ]}
                                        mapSrc={
                                            "https://upload.wikimedia.org/wikipedia/commons/a/a0/World_map_with_points.svg"
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-br">
                    <div className="flex max flex-row  md:h-auto w-full px-8 xl:p-8">
                        <div
                            className="mx-auto w-full relative overflow-hidden h-full py-24 px-4 flex flex-col">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                }}
                                className="div"
                            >
                                <div className="flex flex-col gap-4">
                                    <Button className="w-fit h-fit font-mono text-black" variant="secondary"
                                            size="sm">
                                        <p>FREQUENTLY ASKED QUESTIONS</p>
                                    </Button>
                                    <p className="bg-clip-text drop-shadow-2xl text-white text-6xl">
                                        Have any questions?
                                    </p>
                                    <p className="opacity-50 font-light max-w-lg">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Don't worry if you don't right now, you can always throw us a ticket - either
                                        through Discord or the billing area!
                                    </p>
                                </div>
                            </motion.div>
                            <div className="flex flex-col lg:flex-row gap-4 w-full mt-4">
                                <div className="w-full flex flex-col gap-4">
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
                                            <AccordionTrigger>How long does it take for a server to be
                                                ready?</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="leading-7 mt-6 text-white/50">
                                                    Servers are available as soon as your payment has been processed,
                                                    typically
                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                    {' '}within a few minutes. If they aren't throw us a message.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Can I transfer my current server to
                                                PowerHut?</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="leading-7 mt-6 text-white/50">
                                                    Of course! Feel free to create a ticket on our Discord Server and we
                                                    will
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
                                                    As such, you can expect a fast, lag-free, and secure experience to take
                                                    care
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
                                </div>
                                <div className="w-full flex flex-col gap-4">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Can I upgrade or downgrade my server in the
                                                future?</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="leading-7 mt-6 text-white/50">
                                                    Absolutely, just create a ticket and we will handle everything!
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
                                                    We can only transfer servers as needed, as it depends on the situation
                                                    and
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
                                                    Terria, Factorio, Rust, Satisfactory and much more! Feel free to
                                                    recommend a
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
                        </div>
                    </div>
                </div>
                <Footer/>
            </motion.div>
        </>
// </FollowerPointerCard>
    )
        ;
}
