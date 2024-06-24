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
import { FaShieldHeart, FaToolbox } from "react-icons/fa6";
import { LuNetwork } from "react-icons/lu";
import { RiHardDriveFill } from "react-icons/ri";
import Card from "@/app/components/Card/Card";
import Footer from "@/app/components/Footer";
import {VscGraph, VscLayoutPanelRight} from "react-icons/vsc";
import {TbBrandMinecraft, TbChevronLeftPipe} from "react-icons/tb";
import {FaBolt, FaGlobeAfrica, FaRegCheckCircle, FaRegHandPointer} from "react-icons/fa";
import {pricingTiers, webTiers} from "@/app/utils/pricing";
import axios from "axios";
import Intercom from "@intercom/messenger-js-sdk";
import Promo from "@/app/components/Promo/Promo";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import {Button} from "@/app/components/ui/button";
import AnimatedCursor from "react-animated-cursor";
import Space from "@/app/components/Space/Space";
import {BiSupport} from "react-icons/bi";

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
    },[])


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
                <Space/>
                <BackgroundBeams/>
                <div className="w-full h-auto background-tr flex items-center justify-center">
                    <div className="w-full h-[70vh] max">
                        <NavigationBar/>
                        <div
                            className="w-full h-full flex items-center justify-center relative z-10 flex-col pt-48">
                            <div className="flex flex-col w-full px-4 md:p-0">
                                <div
                                    className="w-fit h-auto rounded-full mb-4 text-sm flex items-center gap-4 py-1 px-2 border border-[#FF4D14]/50 bg-[#FF4D14]/10"
                                >
                                    <TbBrandMinecraft fill={"#141414"} size={22}/>
                                    Minecraft 1.21: The Tricky Trails Update, released!
                                </div>
                                <div className="text-5xl lg:text-9xl font-semibold selection:bg-white">
                                <span className="selection:bg-main ">
                                    Power up your play.
                                </span>
                                    {' '}
                                    <br/>
                                    <span className="text-zinc-400 selection:bg-white">
                                    Host
                                </span>,
                                    {' '}
                                    <span className="text-zinc-400 selection:bg-white">
                                    Game
                                </span>,
                                    {' '}
                                    <span className="text-main selection:bg-white">
                                    Dominate
                                </span>.
                                </div>
                                <div>
                                    <p className="mt-8 max-w-[40rem] selection:bg-main">
                                        We are committed to transparency and user-friendly features, ensuring a superior
                                        gaming experience for our customers worldwide.
                                    </p>
                                </div>
                                <div className="flex flex-row gap-5 mt-12">
                                    <Button variant="secondary" onClick={() => window.location.href = "https://billing.powerhut.pro"}>
                                        GET STARTED
                                    </Button>
                                    <Button variant="outline" className={"flex gap-2"} onClick={() => window.location.href = "https://billing.powerhut.pro/knowledgebase"}>
                                        <BiSupport size={22} />SUPPORT
                                    </Button>
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
                                <div className="flex flex-col md:flex-row gap-2 items-center">
                                    <div>
                                        {/*<p className="mb-2 opacity-50 text-xl text-center">Web Hosting</p>*/}
                                        <div className="flex w-fit h-fit flex-wrap justify-center gap-2">
                                            {webTiers
                                                .filter((_, index) => [0].includes(index))
                                                .map((tier, index) => (
                                                    <PricingCard key={index} {...tier} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="md:w-0.5 md:h-96 w-96 h-0.5 bg-orange-500 opacity-50"></div>
                                    <div>
                                        {/*<p className="mb-2 opacity-50 text-xl text-center">Game Hosting</p>*/}
                                        <div className="flex w-fit h-fit flex-wrap justify-center gap-2">
                                            {pricingTiers
                                                .filter((_, index) => [2, 3, 5].includes(index))
                                                .map((tier, index) => (
                                                    <PricingCard key={index} {...tier} />
                                                ))
                                            }
                                        </div>
                                    </div>
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
                            <div className="mb-20 flex flex-col gap-4 items-center lg:items-start">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>SUPPORTED GAMES</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl text-center md:text-start">
                                    Old & New supported games
                                </p>
                                <p className="opacity-50 font-light max-w-lg">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Don't see a game that you want to host, no problem! Throw us a suggesting in the
                                    Discord.
                                </p>
                            </div>
                            <div className="flex w-full h-auto flex-wrap gap-6 items-center lg:items-start justify-center lg:justify-start">
                                <GameCard imageSrc={"/minecraft.webp"}/>
                                <GameCard imageSrc={"/rust.webp"}/>
                                <GameCard imageSrc={"/satisfactory.webp"}/>
                                <GameCard imageSrc={"/palworld.webp"}/>
                                <GameCard imageSrc={"/terraria.webp"}/>
                                <GameCard imageSrc={"/tf2.webp"}/>
                                <GameCard imageSrc={"/garrys.jpg"}/>
                                <GameCard imageSrc={"/cs2.jpg"}/>
                                <GameCard />
                            </div>
                        </div>
                    </div>
                    <div className="background-br">
                        <div className="w-full max h-auto flex flex-col pb-48">
                            <div className="mb-20 flex flex-col gap-4">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>FEATURES</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl text-center md:text-start">
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
                                    logo={<FaShieldHeart size={32}/>}
                                    header={"DDoS Protection"}
                                    content={
                                        "All of our servers are outfitted with DDoS protection to help you avoid downtime."
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
                                <Card
                                    logo={<RiHardDriveFill size={32}/>}
                                    header={"Solid-Slate Drives"}
                                    content={
                                        "Our servers are exclusively hosted on NVMe Solid Slate Drives in RAID 0."
                                    }
                                />
                                {/*<Card logo={(<FaGlobeEurope size={44}/>)}*/}
                                {/*      header={"Low Latency Servers"}*/}
                                {/*      content={"We have over 6 different locations worldwide to choose from, so that you have low latency wherever you're located."}*/}
                            </div>
                        </div>
                    </div>
                    <div className="background-tr">
                        <div className="flex max flex-col w-full h-full  pb-40">
                            <div className="mb-20 flex flex-col gap-4">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>PRICING</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl text-center md:text-start">
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
                                            <td className="p-4 lg:p-6">Server Splitting</td>
                                            <td className="p-4 lg:p-6 opacity-50">Coming soon</td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6">Dedicated CPU cores</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6">Free dedicated IP</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6">Free user-managed off-site backups</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 ">Free reverse proxy</td>
                                            <td className="p-4 lg:p-6 opacity-50">Coming soon</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6 ">Free subdomain</td>
                                            <td className="p-4 lg:p-6 opacity-50">Early Access*</td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                            <td className="p-4 lg:p-6 opacity-50"><FaRegCheckCircle size={24}/></td>
                                            <td className="p-4 lg:p-6 opacity-50"></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6">Price</td>
                                            <td className="p-4 lg:p-6 text-lg text-orange-600 font-bold">$12/mo. <span
                                                className="text-xs">(8GB)</span></td>
                                            <td className="p-4 lg:p-6">$28/mo. <span
                                                className="text-xs">(8GB)</span></td>
                                            <td className="p-4 lg:p-6">$42/mo. <span
                                                className="text-xs">(8GB)</span></td>
                                            <td className="p-4 lg:p-6">$20/mo. <span
                                                className="text-xs">(8GB)</span></td>
                                            <td className="p-4 lg:p-6">$40/mo. <span
                                                className="text-xs">(8GB)</span></td>
                                            <td className="p-4 lg:p-6">$42/mo. <span
                                                className="text-xs">(8GB)</span></td>
                                            <td className="p-4 lg:p-6 ">$40/mo. <span
                                                className="text-xs">(8GB)</span></td>
                                        </tr>
                                        <tr className="hover:bg-white/10 duration-300">
                                            <td className="p-4 lg:p-6">CPU</td>
                                            <td className="p-4 lg:p-6 opacity-50">8700GE*, 7950X*</td>
                                            <td className="p-4 lg:p-6 opacity-50">3600, 5950X & 7950X</td>
                                            <td className="p-4 lg:p-6 opacity-50">Unknown</td>
                                            <td className="p-4 lg:p-6 opacity-50">E-2386, 3600X</td>
                                            <td className="p-4 lg:p-6 opacity-50">Unknown</td>
                                            <td className="p-4 lg:p-6 opacity-50">E-1630V3, 7700K</td>
                                            <td className="p-4 lg:p-6 opacity-50">5700X, 5900X</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-xs mt-2 opacity-50">
                                        Comparison data accurate as of June 1st, 2024
                                    </p>
                                    <p className="text-xs mt-2 opacity-50">
                                        * This is currently a work in progress, but you might see it in the panel already!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="background-br">
                        <div className="flex max flex-col justify-center item-center w-full h-full  pb-40">
                            <div className="mb-20 flex flex-col gap-4">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>CUSTOM GAME PANEL</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl text-center md:text-start">
                                    Custom Pterodactyl Panel
                                </p>
                                <p className="opacity-50 font-light max-w-lg">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    We've jam packed our custom game panel with features we know you'll enjoy! Want to suggest a feature, throw it in the Discord.
                                </p>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
                                <div
                                    className="w-full flex items-center justify-center max-w-2xl p-4 hover:scale-150 duration-300 hover:z-20 ">
                                    <img
                                        src={"/panel-01.png"}
                                        alt="panel"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div
                                    className="w-full flex items-center justify-center max-w-5xl relative z-10 hover:scale-150 duration-300 p-4 hover:z-20">
                                    <img
                                        src={"/panel.png"}
                                        alt="panel"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div
                                    className="w-full flex items-center justify-center max-w-2xl p-4 hover:scale-150 duration-300 hover:z-20">
                                    <img
                                        src={"/panel-02.png"}
                                        alt="panel"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="background-tr">
                        <div className="flex max flex-col justify-center item-center w-full h-auto pb-24">
                            <div className="mb-20 flex flex-col gap-4">
                                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                    <p>MONITORING</p>
                                </Button>
                                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl text-center md:text-start">
                                    Great Transparency
                                </p>
                                <p className="opacity-50 font-light max-w-lg">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    We want to be as open as possible with you guys! Feel free to see
                                    our server stats etc
                                </p>
                            </div>
                            <div className="flex w-full h-auto flex-col">
                                <img
                                    onClick={() => (window.location.href = "https://grafana.powerhut.pro")}
                                    src={"/grafana.png"}
                                    alt="panel"
                                    className="rounded-lg border-2 border-[#FF4D14] shadow-2xl shadow-[#FF4D14]/30 cursor-pointer hover:opacity-50 duration-300 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="background-br">
                        <div className="flex max flex-row  py-20 md:h-auto w-full">
                            <div
                                className="mx-auto w-full relative overflow-hidden h-full md:h-[60rem] px-4 flex flex-col">
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
                                        <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                                            <p>LOCATIONS</p>
                                        </Button>
                                        <p className="bg-clip-text drop-shadow-2xl text-white text-6xl text-center md:text-start">
                                            Powerful servers across the globe
                                        </p>
                                        <p className="opacity-50 font-light max-w-lg">
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            We have limited stock of servers, so keep an eye out here! Don&apos;t see the location that you want? Throw us a ticket in the
                                            Discord!
                                        </p>
                                    </div>
                                </motion.div>
                                <div className="w-full h-auto sm:h-[80rem] flex items-center justify-center">
                                    <MapComponent
                                        locations={[
                                            {
                                                x: 44.5, y: 21.5, name: (
                                                    <div className="flex items-center justify-center flex-col">
                                                        <p>London - UK</p>
                                                        <p className="opacity-50 text-xs">Coming soon</p>
                                                    </div>
                                                )
                                            },
                                            {x: 46, y: 25.5, name: `Germany - FSN`},
                                            {
                                                x: 92, y: 80, name: (
                                                    <div className="flex items-center justify-center flex-col">
                                                        <p>Australia - SY</p>
                                                        <p className="opacity-50 text-xs">Coming soon</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                x: 78, y: 60, name: (
                                                    <div className="flex items-center justify-center flex-col">
                                                        <p>Asia - SG</p>
                                                        <p className="opacity-50 text-xs">Coming soon</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                x: 70, y: 50, name: (
                                                    <div className="flex items-center justify-center flex-col">
                                                        <p>Asia - IN</p>
                                                        <p className="opacity-50 text-xs">Coming soon</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                x: 96.5, y: 90, name: (
                                                    <div className="flex items-center justify-center flex-col">
                                                        <p>Asia - JP</p>
                                                        <p className="opacity-50 text-xs">Coming soon</p>
                                                    </div>
                                                )
                                            },
                                            {x: 25, y: 24, name: `America - NYC`},
                                            {
                                                x: 8, y: 25, name: (
                                                    <div className="flex items-center justify-center flex-col">
                                                        <p>America - SEA</p>
                                                        <p className="opacity-50 text-xs">Coming soon</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                x: 18, y: 30, name: (
                                                    <div className="flex items-center justify-center flex-col">
                                                        <p>America - MIS</p>
                                                        <p className="opacity-50 text-xs">Coming soon</p>
                                                    </div>
                                                )
                                            },
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
                    <Footer/>
            </motion.div>
        </>
// </FollowerPointerCard>
)
    ;
}
