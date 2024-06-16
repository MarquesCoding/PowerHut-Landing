import React from 'react';
import Flag from 'react-world-flags'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import {IoPin} from "react-icons/io5";
import {MdCode} from "react-icons/md";
import {Button} from "@/app/components/ui/button";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import {describe} from "node:test";
export interface PricingTier {
    logo: JSX.Element;
    title: string;
    description: string;
    cpu: string;
    price: number;
    originalPrice?: number;
    features: string[];
    button: {
        text: string;
        link?: string;
    }
    pill?: {
        color?: boolean;
        text: string;
    }
    countries: {
        europe?: boolean;
        australia?: boolean;
        america?: boolean;
        asia?: boolean;
    }
}

const PricingCard: React.FC<PricingTier> = ({ logo, title, description, cpu, price, originalPrice, features, button, pill, countries }) => {
    return (

        <div className={`w-96 h-auto bg-[#141414]/60 hover:bg-[#141414] rounded-lg shadow text-white p-6 relative border border-white/10 hover:border-white/30 duration-300 hover:-translate-y-0.5`}>
            {/*<div className="w-full h-full absolute bg-dot-white/[0.23] pointer-events-none -m-6 rounded-2xl z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>*/}
            {pill && (
                <div
                    className="absolute top-0 right-5 bg-[#FF4D14] py-0.5 px-2 rounded-b-lg uppercase text-sm">
                    {pill.text}
                </div>
            )}
            {logo}
            <div className="divide-y divide-dashed divide-white/30 mt-4 flex flex-col gap-6">
                <div>
                    <div>
                        <p className="text-2xl text-[#FF4D14] font-semibold">{title}</p>
                        <p className="text-gray-400">{description}</p>
                    </div>
                    <div className="mt-2 flex flex-row gap-4 items-center">
                        <p className="text-6xl text-white font-semibold">${price}</p>
                        {originalPrice && (
                            <p className="text-6xl text-gray-400/20 line-through font-light">${originalPrice}</p>
                        )}
                    </div>
                </div>
                <ul className="py-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center py-2 gap-2">
                            <IoMdCheckmarkCircleOutline size={22} className="text-[#FF4D14]"/>
                            <span className="font-light">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-4 pt-4">
                {countries.america && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Flag code="us" className="w-8"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                New York City
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
                {countries.asia && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Flag code="SG" className="w-8 rounded"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                Singapore
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
                {countries.europe && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Flag code="EU" className="w-8"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                Falkenstein
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
                {countries.australia && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Flag code="aus" className="w-6 rounded"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                Sydney
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </div>
            <Button variant="outline"
                    onClick={() => window.location.href = `${button.link}`}
                    className="w-full h-16 mt-4 rounded-lg border-[0.1rem] text-lg font-semibold border-[#FF4D14]/50">Purchase</Button>
        </div>
        // <div className="w-auto min-w-full md:min-w-72 relative group md:px-0 px-4 duration-300">
        //     <div
        //         className="lg:max-w-xs max-w-4xl mx-auto bg-[#141414]/90 border border-white/10 hover:shadow-xl hover:border hover:border-opacity-20 duration-300 shadow-lg rounded-lg overflow-hidden group-hover:-translate-y-1 cursor-pointer">
        //         <div className="px-6 py-4">
        //             <div className="flex flex-col gap-2">
        //                 <div className="flex flex-row w-full justify-between items-center">
        //                     <h3 className={`text-xl font-semibold text-white`}>{title}</h3>
        //                     {pill && (
        //                         <>
        //                             {pill.color && (
        //                                 <p className="text-sm w-fit bg-orange-700 border border-white/10 text-white py-1 px-3 ml-4 rounded-full">
        //                                     {pill.text}
        //                                 </p>
        //                             )}
        //                             {!pill.color && (
        //                                 <p className="text-sm w-fit bg-zinc-800 border border-white/10 text-white py-1 px-3 ml-4 rounded-full animate-pulse">
        //                                 {pill.text}
        //                                 </p>
        //                             )}
        //                         </>
        //                     )}
        //                 </div>
        //                 <p className="text-xs opacity-80 italic">{cpu}</p>
        //             </div>
        //             <div className="flex flex-row font-semibold text-white mt-4 relative">
        //                 {originalPrice && (
        //                     <div
        //                         className="absolute w-auto h-full bg-[#FF4D14] rounded-lg z-10 text-white p-2 flex items-center rotate-3 group-hover:-translate-y-12 group-hover:translate-x-1.5 group-hover:rotate-12 duration-300 transition-transform">
        //                         <div className="absolute -top-4 right-0 h-4 w-4 rounded-full text-white rotate-12 animate-pulse">
        //                             <IoPin size={24} className={"rotate-12"} />
        //                         </div>
        //                         <span className="text-sm opacity-50">$</span>
        //                         <span className="text-4xl">{price}</span>
        //                     </div>
        //                 )}
        //                 <span className="text-sm opacity-50">$</span>
        //                 {originalPrice && (
        //                     <div className="flex items-center justify-center">
        //                         <div className="w-10 h-1 bg-[#FF4D14] rotate-[30deg] absolute">
        //
        //                         </div>
        //                         <span className="text-4xl opacity-50">{originalPrice}</span>
        //                     </div>
        //                 )}
        //                 {!originalPrice && (
        //                     <span className="text-4xl">{price}</span>
        //                 )}
        //             </div>
        //             <p className="text-white italic text-xs opacity-50">per month</p>
        //         </div>
        //         <ul className="mb-8 px-6">
        //             {features.map((feature, index) => (
        //                 <li key={index} className="flex items-center py-2">
        //                     <svg
        //                         className="w-5 h-5 mr-2 text-[#FF4D14]"
        //                         fill="none"
        //                         stroke="currentColor"
        //                         viewBox="0 0 24 24"
        //                         xmlns="http://www.w3.org/2000/svg"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             strokeWidth="2"
        //                             d="M5 13l4 4L19 7"
        //                         ></path>
        //                     </svg>
        //                     <span className="text-white text-sm">{feature}</span>
        //                 </li>
        //             ))}
        //         </ul>
        //         <div className="flex flex-row items-center justify-center gap-4 mb-4 -mt-4">
        //             {countries.america && (
        //                 <TooltipProvider>
        //                     <Tooltip>
        //                         <TooltipTrigger>
        //                             <Flag code="us" className="w-6 rounded" />
        //                         </TooltipTrigger>
        //                         <TooltipContent>
        //                             New York City
        //                         </TooltipContent>
        //                     </Tooltip>
        //                 </TooltipProvider>
        //             )}
        //             {countries.asia && (
        //                 <TooltipProvider>
        //                     <Tooltip>
        //                         <TooltipTrigger>
        //                             <Flag code="SG" className="w-6 rounded" />
        //                         </TooltipTrigger>
        //                         <TooltipContent>
        //                             Singapore
        //                         </TooltipContent>
        //                     </Tooltip>
        //                 </TooltipProvider>
        //             )}
        //             {countries.europe && (
        //                 <TooltipProvider>
        //                     <Tooltip>
        //                         <TooltipTrigger>
        //                             <Flag code="EU" className="w-6 rounded" />
        //                         </TooltipTrigger>
        //                         <TooltipContent>
        //                            Falkenstein
        //                         </TooltipContent>
        //                     </Tooltip>
        //                 </TooltipProvider>
        //                 )}
        //             {countries.australia && (
        //                 <TooltipProvider>
        //                     <Tooltip>
        //                         <TooltipTrigger>
        //                             <Flag code="aus" className="w-6 rounded" />
        //                         </TooltipTrigger>
        //                         <TooltipContent>
        //                             Sydney
        //                         </TooltipContent>
        //                     </Tooltip>
        //                 </TooltipProvider>
        //             )}
        //         </div>
        //         <div className="px-6 pb-6">
        //             <div
        //                 onClick={() => window.location.href = `${button.link}`}
        //
        //                 className={`text-center ${button.link ? 'cursor-pointer' : 'cursor-not-allowed'} duration-300 w-full px-4 py-2 bg-gradient-to-t to-[#FF4D14] from-[#FF4D14] text-white rounded hover:opacity-50`}>
        //                 {button.text}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default PricingCard;