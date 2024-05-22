import {FaDiscord, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#FF4D14] w-full h-auto p-12">
            <div className="flex flex-col lg:flex-row gap-24 justify-between text-white">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-row gap-4 items-center">
                        <img className="cursor-pointer hover:opacity-50 duration-300 w-auto h-10 mr-4" src={"/logo-white.png"}
                             alt={"logo"}/>
                        <p className="max-w-xs opacity-70">
                            PowerHut is a game focused hosting company that started in late 2023.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <a href={'https://discord.gg/invite/powerhut'}>
                            <FaDiscord size={33}
                                       className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                        </a>
                        <a href="https://twitter.com/PowerHutpro">
                        <FaSquareXTwitter size={33}
                                          className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                        </a>
                            <a href="https://www.tiktok.com/@powerhutpro">
                                <FaTiktok size={33}
                                          className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                            </a>
                    </div>
                    <p className="max-w-lg opacity-70 text-sm">
                        © 2024 | PowerHut, LTD. | All rights reserved.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-12">
                    <div className="flex flex-col gap-2">
                        <p className="underline font-semibold">Support</p>
                        <a href={'/support'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>FAQ</a>
                        <a href={'https://discord.gg/invite/powerhut'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Discord</a>
                        <a href={'https://billing.powerhut.pro/index.php?rp=/knowledgebase'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Knowledgebase</a>
                        <a href={'https://monitor.powerhut.pro'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Server
                            Status</a>
                        <a href={'https://grafana.powerhut.pro'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Grafana</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="underline font-semibold">Client</p>
                        <a href={'https://billing.powerhut.pro/register.php'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Register</a>
                        <a href={'https://billing.powerhut.pro/index.php?rp=/login'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Login</a>
                        <a href={'https://panel.powerhut.pro'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Game
                            Panel</a>
                        <a href={'https://billing.powerhut.pro/submitticket.php?step=2&deptid=1'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Submit
                            a Ticket</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href={'/'} className="underline font-semibold">Legal</a>
                        <a href={'/terms'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Terms
                            of Service</a>
                        <a href={'/policy'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Privacy
                            Policy</a>
                        <a href={'/fair'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Fair
                            Usage Policy</a>
                        <a href={'https://www.minecraft.net/en-us/eula'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Minecraft
                            EULA</a>
                        <a href={'/support'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Abuse</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;