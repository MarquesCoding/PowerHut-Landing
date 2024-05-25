'use client';
import { motion } from "framer-motion";
import PricingCard from "./components/PricingCard/PricingCard";
import { NavigationMenuDemo } from "./components/Navigation/Navigation";
import React from "react";
import { BackgroundBeams } from "./components/Backgrounds/Beam";
import GameCard from "./components/GameCard/GameCard";
import MapComponent from "./components/Globe/Globe";
import {HiLightningBolt} from "react-icons/hi";
import {PiGameControllerFill} from "react-icons/pi";
import {FaMoneyBill, FaShieldHeart, FaToolbox, FaXTwitter} from "react-icons/fa6";
import {LuNetwork} from "react-icons/lu";
import {RiHardDriveFill} from "react-icons/ri";
import Card from "@/app/components/Card/Card";
import {BsFillMouseFill} from "react-icons/bs";
import Footer from "@/app/components/Footer";
import {pricingTiers} from "@/app/utils/pricing";

export default function Home() {
  return (
      // <FollowerPointerCard>
      <>
          <div className="w-full h-full flex flex-col max-w-screen">
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
                  Use code : <span
                  className="font-semibold font-mono hover:opacity-50 duration-300 bg-white px-2 rounded-md">POWER</span> and
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
                      <div className="w-96">
                          <img className="hover:opacity-50 duration-300 mx-8 md:mx-24 w-6 md:w-8"
                               src={"/logo-white.png"}
                               alt={"logo"}/>
                      </div>
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
                          <motion.div
                              className="w-fit h-auto px-4 py-1 rounded-full border border-white/30"
                              initial={{
                                  opacity: 0,
                              }}
                              animate={{
                                  opacity: 100,
                                  translateY: [30, 0]
                              }}
                              transition={{
                                  ease: "linear",
                                  opacity: {duration: 1}
                              }}
                          >
                              <p className="text-sm bg-gradient-to-br from-orange-500 to-orange-600 text-transparent bg-clip-text">Game
                                  Server Hosting</p>
                          </motion.div>
                          <p
                              className="text-7xl lg:text-9xl font-semibold">PowerHut<span
                              className="text-xs text-[#FF4D14]">TM</span>
                          </p>
                          <motion.div
                              initial={{
                                  opacity: 0,
                              }}
                              animate={{
                                  opacity: 100,
                              }}
                              transition={{
                                  ease: "linear",
                                  opacity: {duration: 1},
                                  delay: 2,
                              }}
                          >
                              <p className="text-zinc-600 mt-4 lg:max-w-full max-w-sm font-mono font-semibold">
                                  We guarantee the <span className="text-[#FF4D14]">best hosting experience</span> from
                                  hardware to support.
                              </p>
                          </motion.div>
                      </motion.div>
                  </div>
                  <BackgroundBeams/>
                  <div className="w-full h-4 flex flex-row items-center justify-center">
                      <BsFillMouseFill className="mb-24 animate-bounce opacity-50" size={32}/>
                  </div>
              </motion.div>
              <div
                  className="w-full h-auto flex flex-col justify-center p-12 items-center bg-gradient-to-tl to-[#FF4D14]/10 from-transparent pb-48">
                  <div className="mb-20 text-center flex flex-col gap-4">
                      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl">Key
                          Features</p>
                      <p className="opacity-50 font-light">A few things that we like to boast about</p>
                  </div>
                  <div className="flex w-full h-auto flex-wrap justify-center gap-6 max-w-[100rem]">
                      <Card logo={(<HiLightningBolt size={44}/>)} header={"Instant Deployments"}
                            content={"Get started within minutes with our instant deployment technology."}/>
                      <Card logo={(<PiGameControllerFill size={44}/>)} header={"Easy to use Power Panel"}
                            content={"We've compiled our best features into one single panel, easy to use and ready whenever you want."}/>
                      <Card logo={(<FaShieldHeart size={44}/>)} header={"DDoS Protection"}
                            content={"All of our servers are outfitted with DDoS protection to help you avoid downtime."}/>
                      <Card logo={(<FaMoneyBill size={44}/>)} header={"Pro-rated"}
                            content={"All of our servers are pro-rated, cancel and request a refund for the difference! *Subject to terms*"}/>
                      <Card logo={(<FaToolbox size={44}/>)} header={"One-click Installer"}
                            content={"Want to play modded? Want to play vanilla? Change games and modpacks with one click."}/>
                      <Card logo={(<LuNetwork size={44}/>)} header={"Free Dedicated IP"}
                            content={"When you choose any of our servers above Basic you get a dedicated IP, with up to 5 additional ports."}/>
                      <Card logo={(<RiHardDriveFill size={44}/>)} header={"Solid-Slate Drives"}
                            content={"No Hard-Drivers here. Our servers are exclusively hosted on NVMe Solid Slate Drives in RAID 0."}/>
                      {/*<Card logo={(<FaGlobeEurope size={44}/>)}*/}
                      {/*      header={"Low Latency Servers"}*/}
                      {/*      content={"We have over 6 different locations worldwide to choose from, so that you have low latency wherever you're located."}*/}
                  </div>
              </div>
              <div className="w-full h-auto bg-gradient-to-bl to-[#FF4D14]/10 from-transparent py-24">
                  <div className="mb-20 text-center flex flex-col gap-4">
                      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl">Supported
                          Games</p>
                      <p className="opacity-50 font-light">{`We've got a huge library of supported games.`}</p>
                      <p className="opacity-30 text-xs italic -mt-4">If you have any suggestions, throw them in the
                          Discord!</p>
                  </div>
                  <div className="flex w-full h-auto flex-wrap justify-center gap-6">
                      <GameCard imageSrc={'/minecraft.webp'}/>
                      <GameCard imageSrc={'/rust.webp'}/>
                      <GameCard imageSrc={'/satisfactory.webp'}/>
                      <GameCard imageSrc={'/palworld.webp'}/>
                      <GameCard imageSrc={'/terraria.webp'}/>
                      <GameCard imageSrc={'/tf2.webp'}/>
                  </div>
              </div>
              <div
                  className="flex flex-col justify-center item-center w-full h-full py-24 bg-gradient-to-tl to-[#FF4D14]/10 from-transparent pb-40">
                  <div className="mb-20 text-center flex flex-col gap-4">
                      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl">Top-Tier
                          Panel</p>
                      <p className="opacity-50 font-light">{`We've compiled our best features into one single panel, easy to
                          use and ready whenever you want.`}</p>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
                      <div
                          className="w-full flex items-center justify-center max-w-2xl opacity-80 lg:translate-x-40 p-4">
                          <img src={'/panel-01.png'} alt="panel"
                               className="rounded-lg"/>
                      </div>
                      <div
                          className="w-full flex items-center justify-center max-w-5xl relative z-10 hover:scale-150 duration-300 p-4">
                          <img src={'/panel.png'} alt="panel"
                               className="rounded-lg shadow-2xl shadow-[#FF4D14]/30"/>
                      </div>
                      <div
                          className="w-full flex items-center justify-center max-w-2xl opacity-80 lg:-translate-x-40 p-4">
                          <img src={'/panel-02.png'} alt="panel"
                               className="rounded-lg"/>
                      </div>
                  </div>
              </div>
              <div
                  className="flex flex-col justify-center item-center w-full h-auto bg-gradient-to-tr from-[#FF4D14]/10 to-transparent pb-24">
                  <div className="mb-20 text-center flex flex-col gap-4">
                      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl">Great Transparency</p>
                      <p className="opacity-50 font-light">We want to be as open as possible with you guys! Feel free to see our server stats etc</p>
                  </div>
                  <div
                      className="flex w-full h-auto justify-center items-center flex-col">
                      <img src={'/grafana.png'} alt="panel"
                           className="rounded-lg border-2 border-[#FF4D14] lg:max-w-6xl shadow-2xl shadow-[#FF4D14]/30"/>
                  </div>
              </div>
              <div
                  className="flex flex-col justify-center item-center w-full h-auto bg-gradient-to-tl to-[#FF4D14]/10 from-transparent pb-24">
                  <div className="mb-20 text-center flex flex-col gap-4">
                      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl">Awesome
                          Prices!</p>
                      <p className="opacity-50 font-light">Choose from our wide range of plans to fit your
                          needs</p>
                  </div>
                  <div
                      className="flex w-full h-auto justify-center items-center flex-col">
                      <div className="flex w-full h-auto flex-wrap justify-center gap-2">
                          {pricingTiers.map((tier, index) => (
                              <PricingCard key={index} {...tier} />
                          ))}
                      </div>
                      <div className="opacity-60 mt-4">
                          <p className="text-center text-white opacity-50 w-full text-xs">*CPU will vary based on
                              server
                              location - will be equivalent</p>
                          <p className="text-center text-white opacity-50 w-full text-xs">** Additional RAM can be
                              purchased through a support ticket (billing / discord)</p>
                          <p className="text-center text-white opacity-50 w-full text-xs">*** Fair Use Policy</p>
                      </div>
                  </div>
              </div>
              <div
                  className="flex flex-row items-center justify-center py-20 md:h-auto bg-gradient-to-bl to-[#FF4D14]/10 from-transparent relative w-full">
                  <div
                      className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4 flex flex-col items-center">
                      <motion.div
                          initial={{
                              opacity: 0,
                              y: 20,
                          }}
                          animate={{
                              opacity: 1,
                              y: 0,
                          }}
                          transition={{
                              duration: 1,
                          }}
                          className="div"
                      >
                          <div className="mb-20 text-center flex flex-col gap-4">
                              <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl">
                                  Our Locations
                              </p>
                              <p className="opacity-50 font-light">We currently only offer in Germany & USA, but are
                                  expanding!</p>
                              {/* eslint-disable-next-line react/no-unescaped-entities */}
                              <p className="opacity-50 font-light"> Don't see the location that you want? Throw us a
                                  ticket in the Discord!</p>
                          </div>
                      </motion.div>
                      <div className="w-full h-auto sm:h-96 flex items-center justify-center">
                          <MapComponent locations={[
                              // {x: 44.5, y: 21.5, name: `London - UK`},
                              {x: 46, y: 25.5, name: `Germany - FSN`},
                              // {x: 92, y: 80, name: `Australia - SYD`},
                              // {x: 78, y: 60, name: `Asia - SGP`},
                              {x: 25, y: 24, name: `America - NYC`},
                              {x: 8, y: 35, name: `America - LA`},
                          ]}
                                        mapSrc={'https://upload.wikimedia.org/wikipedia/commons/a/a0/World_map_with_points.svg'}/>
                      </div>
                  </div>
              </div>
              <Footer/>
          </div>
      </>
      // </FollowerPointerCard>
  );
}
