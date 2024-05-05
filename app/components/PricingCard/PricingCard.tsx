import React from 'react';
import Flag from 'react-world-flags'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
export interface PricingTier {
    title: string;
    cpu: string;
    price: number;
    features: string[];
    button: string;
    pill?: {
        text: string;
    }
    countries: {
        europe?: boolean;
        australia?: boolean;
        america?: boolean;
        asia?: boolean;
    }
}

const PricingCard: React.FC<PricingTier> = ({ title, cpu, price, features, button, pill, countries }) => {
    return (
        <div className="w-auto min-w-72 relative hover:-translate-y-1 duration-300">
            <div
                className="max-w-xs mx-auto bg-[#141414]/90 border border-white/10 hover:shadow-xl hover:border hover:border-opacity-20 duration-300 shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row w-full justify-between items-center">
                            <h3 className={`text-xl font-semibold text-white`}>{title}</h3>
                            {pill && (
                                <p className="text-sm w-fit bg-zinc-800 border border-white/10 text-white py-1 px-3 rounded-full">
                                    {pill.text}
                                </p>
                            )}
                        </div>
                        <p className="text-xs opacity-80 italic">{cpu}</p>
                    </div>
                    <div className="flex flex-row font-semibold text-white mt-4">
                        <span className="text-sm opacity-50">$</span>
                        <span className="text-4xl">{price}</span>
                    </div>
                    <p className="text-white italic text-xs opacity-50">per month</p>
                </div>
                <ul className="mb-8 px-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center py-2">
                            <svg
                                className="w-5 h-5 mr-2 text-[#FF4D14]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                ></path>
                            </svg>
                            <span className="text-white text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row items-center justify-center gap-4 mb-4 -mt-4">
                    {countries.america && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Flag code="us" className="w-6 rounded" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Florida, New Jersey
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                    {countries.asia && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Flag code="SG" className="w-6 rounded" />
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
                                    <Flag code="EU" className="w-6 rounded" />
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
                                    <Flag code="aus" className="w-6 rounded" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Sydney
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
                <div className="px-6 pb-6">
                    <div
                        className="text-center cursor-pointer duration-300 w-full px-4 opacity-30 cursor-not-allowed py-2 bg-gradient-to-t to-[#FF4D14] from-[#FF4D14] text-white rounded hover:opacity-50">
                        {button}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;