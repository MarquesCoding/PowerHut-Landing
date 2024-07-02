import { NavigationMenuDemo } from "@/app/components/Navigation/Navigation";
import React, { useEffect, useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";

const useWindowSize = (): number => {
    const isClient = typeof window === 'object'; // Check if window object exists

    const [windowWidth, setWindowWidth] = useState<number>(
        isClient ? window.innerWidth : 0
    );

    useEffect(() => {
        if (!isClient) {
            return () => {};
        }

        const handleResize = (): void => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isClient]);

    return windowWidth;
};

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const windowWidth = useWindowSize();
    const threshold = 1024; // Define your threshold here

    useEffect(() => {
        if (isOpen) {
            handleWindowSmall();
        }
    }, [windowWidth]);

    const handleWindowSmall = (): void => {
        setIsOpen(false);
    };

    return (
        <div className="mt-24 pb-20 text-white relative w-full flex items-center justify-between gap-4 z-20 px-8">
            <div className="w-96">
                <img
                    onClick={() => window.location.href = "/"}
                    className="hover:opacity-50 duration-300 w-6 md:w-8"
                    src={"/logo-white.png"}
                    alt={"logo"}
                />
            </div>
            <div className="lg:flex hidden">
                <NavigationMenuDemo />
            </div>
            <div className="lg:hidden flex">
                <PiHamburgerBold size={32} onClick={() => setIsOpen(!isOpen)} />
            </div>
            {isOpen && (
                <div className="w-full min-h-32 h-auto top-[4rem] left-0 items-center justify-center flex absolute bg-zinc-900 z-[100]">
                    <NavigationMenuDemo className="flex flex-row gap-0 items-center justify-center" />
                </div>
            )}
        </div>
    );
};

export default NavigationBar;
