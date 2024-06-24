import {motion} from "framer-motion";
import React from "react";

const Promo = () => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 100,
                translateY: [-40, 0]
            }}
            transition={{
                ease: "linear",
                opacity: {duration: 1},
                translateY: {duration:1}
            }}
            className="w-full h-auto py-2 bg-[#FF4D14]/10 backdrop-blur border border-[#FF4D14]/30 justify-between text-white fixed top-0 left-0 z-40 lg:text-lg text-sm flex lg:px-36 px-4 gap-2">
            <p>New customer offer: Get 25% off your first order with promo code POWER</p>
            <p onClick={() => window.location.href="https://monitor.powerhut.pro"} className="cursor-pointer hover:opacity-50 duration-300">Server Status</p>
        </motion.div>
    )
}

export default Promo;