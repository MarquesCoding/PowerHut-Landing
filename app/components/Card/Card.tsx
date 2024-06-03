import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/app/components/ui/tooltip";
import {Button} from "@/app/components/ui/button";

interface CardProps {
    header: string;
    content: string;
    logo: JSX.Element;
}

const Card: React.FunctionComponent<CardProps> = ({
    header, content, logo
                                                  }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div
                        className="w-auto h-auto max-h-32 select-none hover:opacity-50 rounded-2xl bg-[#141414]/90 border border-white/10 relative flex items-center justify-center duration-300">
                        <div
                            className="w-full h-full absolute bg-dot-white/[0.23] rounded-2xl z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
                        <div className="flex flex-row justify-between p-4 gap-4 items-center relative z-10">
                            <div className="text-start">
                                <p className="font-semibold">{header}</p>
                            </div>
                            <div
                                className="w-8 min-w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center text-[#FF4D14]">
                                {logo}
                            </div>
                        </div>

                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="max-w-xs ">{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        // <div
        //     className="h-[50rem] w-full dark:bg-black bg-black  bg-grid-small-white/[0.2] relative flex items-center justify-center">
        // </div>
    )
}
export default Card;