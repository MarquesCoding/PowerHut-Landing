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
                opacity: {duration: 1}
            }}
            className="w-full h-auto py-2 bg-[#FF4D14]/30 backdrop-blur border border-[#FF4D14] text-white fixed top-0 left-0 z-40 lg:text-lg text-sm flex justify-center items-center gap-2 shadow-lg shadow-[#FF4D14]/30">
            Use code <b>POWER</b> and
            enjoy 15% off your first month!
        </motion.div>
    )
}

export default Promo;