import {NavigationMenuDemo} from "@/app/components/Navigation/Navigation";
import React from "react";

const NavigationBar = () => {
    return (
        <div
            className="mt-24 -mb-44 text-white relative w-full flex items-center justify-between gap-4 z-20">
            <div className="w-96">
                <img
                    onClick={() => window.location.href = "/"}
                    className="hover:opacity-50 duration-300 w-6 md:w-8"
                    src={"/logo-white.png"}
                    alt={"logo"}
                />
            </div>
            <div className="">
                <NavigationMenuDemo/>
            </div>
        </div>
    )
}
export default NavigationBar;