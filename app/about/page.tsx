'use client';
import React from "react";
import {motion} from "framer-motion";
import {NavigationMenuDemo} from "@/app/components/Navigation/Navigation";
import {BackgroundBeams} from "@/app/components/Backgrounds/Beam";
import {BsFillMouseFill} from "react-icons/bs";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function Page() {
   return (
       <div className="w-full h-full flex flex-col">
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
               className="w-full h-auto py-2 bg-[#FF4D14] text-[#141414] fixed top-0 left-0 z-40 lg:text-lg text-sm flex justify-center items-center gap-2 shadow-lg shadow-[#141414]">
               Use code : <span className="font-semibold font-mono hover:opacity-50 duration-300 bg-white px-2 rounded-md">POWER</span> and
               enjoy 15% off your first month!
           </motion.div>
           <motion.div
               initial={{
                   opacity: 0
               }}
               animate={{
                   opacity: 100
               }}
               transition={{
                   ease: "linear",
                   opacity: {duration: 1}
               }}

               className="w-full h-screen bg-gradient-to-tr from-[#FF4D14]/10 to-transparent bg-opacity-50 relative">
               <div className="mt-24 -mb-44 text-white relative w-full flex items-center justify-between gap-4 z-20">
                   <Link href="/" className="w-96">
                       <img className="hover:opacity-50 duration-300 mx-8 md:mx-24 w-6 md:w-8"
                            src={"/logo-white.png"}
                            alt={"logo"}/>
                   </Link>
                   <div className="">
                       <NavigationMenuDemo/>
                   </div>
                   <div className="w-96">

                   </div>
               </div>
               <div
                   className="w-full h-full flex items-center justify-center relative z-10 flex-col pt-48 text-center">
                   <motion.div
                       initial={{
                           opacity: 0,
                       }}
                       animate={{
                           opacity: 100,
                       }}
                       transition={{
                           ease: "linear",
                           opacity: {duration: 1}
                       }}
                       className="flex flex-col items-center"
                   >
                       <p className="text-8xl font-bold">Our Story</p>
                       <div className="max-w-2xl text-start mt-12 flex flex-col gap-4">
                           <p>Coming soon...</p>

                       </div>
                   </motion.div>
               </div>
           </motion.div>
           <Footer/>
       </div>
   )
}
