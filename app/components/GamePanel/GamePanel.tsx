import {Button} from "@/app/components/ui/button";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import React from "react";

const GamePanel = () => {
    return (
        <div className="flex max flex-col justify-center item-center w-full h-full  pb-40 px-8 xl:p-8">
            <div className="mb-20 flex flex-col gap-4">
                <Button className="w-fit h-fit font-mono text-black" variant="secondary" size="sm">
                    <p>CUSTOM GAME PANEL</p>
                </Button>
                <p className="bg-clip-text drop-shadow-2xl text-white text-6xl">
                    Custom Pterodactyl Panel
                </p>
                <p className="opacity-50 font-light max-w-lg">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    We've jam packed our custom game panel with features we know you'll enjoy! Want to
                    suggest a feature, throw it in the Discord.
                </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
                <div className="flex flex-col xl:flex-row-reverse gap-4 w-full">
                    <img
                        src={"/panel.png"}
                        alt="panel"
                        className="rounded-lg max-w-4xl"
                    />
                    <div>
                        <p className="text-3xl font-bold">Proudly powered by <span
                            className="text-main">BOLT</span></p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className="mt-4 opacity-80">
                            <span className="text-main opacity-100">BOLT</span> is our bespoke game
                            server management panel based on the very popular <span
                            className="text-main">Pterodactyl Panel</span>.
                            {' '}
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We've jam packed our custom game panel with features we know you'll enjoy!
                        </p>
                        <div className="w-full flex gap-4 flex-row mt-4">
                            <ul>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                    <span className="font-light">Automatic Updates</span>
                                </li>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                    <span className="font-light">Powerful Game Switcher</span>
                                </li>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                    <span className="font-light">Backup Manager</span>
                                </li>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-main/50"/>
                                    <span className="font-light">Free Subdomain*</span>
                                </li>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-main/50"/>
                                    <span className="font-light">Free Reverse Proxy*</span>
                                </li>
                            </ul>
                            <ul>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                    <span className="font-light">Advanced Schedular</span>
                                </li>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                    <span className="font-light">Advanced File Manager</span>
                                </li>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                    <span className="font-light">Real-Time Console</span>
                                </li>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                                    <span className="font-light">Crash Logs</span>
                                </li>
                                <li className="flex items-center py-2 gap-2">
                                    <IoMdCheckmarkCircleOutline size={22} className="text-main/50"/>
                                    <span className="font-light">Server Splitting*</span>
                                </li>
                            </ul>
                        </div>
                        <p className="mt-4 opacity-20 text-sm">* Early Access -- Coming soon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePanel;