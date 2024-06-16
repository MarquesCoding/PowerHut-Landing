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
        <div
            className="w-96 h-32 flex-1 hover:scale-105 overflow-ellipsis overflow-hidden min-w-96 select-none rounded-lg hover:border-main bg-[#141414]/90 border border-white/10 relative flex duration-300">
            <div
                className="w-full h-full absolute bg-dot-white/[0.23] rounded-2xl z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            <div className="flex flex-row justify-between p-4 gap-4 relative z-10">
                <div className="text-start">
                    <p className="font-semibold text-2xl">{header}</p>
                    <p className="max-w-xs opacity-50">{content}</p>
                </div>
            </div>

        </div>
        // <div
        //     className="h-[50rem] w-full dark:bg-black bg-black  bg-grid-small-white/[0.2] relative flex items-center justify-center">
        // </div>
    )
}
export default Card;