import {FaDiscord, FaInstagramSquare, FaTiktok, FaTwitter} from "react-icons/fa";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#FF4D14] w-full h-auto p-12">
            <div className="flex flex-col lg:flex-row gap-24 justify-between text-black">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-row gap-4">
                        <img className="cursor-pointer hover:opacity-50 duration-300 w-8" src={"/logo-black.png"}
                             alt={"logo"}/>
                        <p className="max-w-xs opacity-70">
                            PowerHut is a game focused hosting company that started in early 2021.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FaDiscord size={33}
                                   className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                        <FaTwitter size={33}
                                   className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                        <FaInstagramSquare size={33}
                                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                        <FaTiktok size={33}
                                  className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                    </div>
                    <p className="max-w-lg opacity-70 text-sm">
                        © 2019 - 2024 | PowerHut, LLC. | All rights reserved.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-12">
                    <div className="flex flex-col gap-2">
                        <p className="underline font-semibold">Support</p>
                        <a href={'https://docs.powerhut.pro/faq'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>FAQ</a>
                        <a href={'https://discord.powerhut.pro'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Discord</a>
                        <a href={'https://docs.powerhut.pro'}
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
                        <a href={'/'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Terms
                            of Service</a>
                        <a href={'/'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Privacy
                            Policy</a>
                        <a href={'/'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Fair
                            Usage Policy</a>
                        <a href={'/'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Minecraft
                            EULA</a>
                        <a href={'/'}
                           className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Abuse</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;