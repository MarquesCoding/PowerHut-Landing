'use client';
import { motion } from "framer-motion";
import PricingCard, { PricingTier } from "./components/PricingCard/PricingCard";
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
import {FaDiscord, FaGlobeEurope, FaInstagramSquare, FaTiktok, FaTwitter} from "react-icons/fa";
import Card from "@/app/components/Card/Card";
import {BsFillMouseFill} from "react-icons/bs";

export default function Home() {
    const pricingTiers: PricingTier[] = [
        // {
        //     title: 'Web',
        //     cpu: 'Ryzen 5 3600*',
        //     price: 3,
        //     features: ['3 Domains', '3 Databases','AutoSSL - CPanel', '50GB NVMe SSD', 'Unlimited Bandwidth', 'Shared IP'],
        //     button: 'Get Started',
        //     countries: {
        //         america: true,
        //         europe: true,
        //     }
        // },
        {
            title: 'Dev',
            cpu: 'Ryzen 5 8700GE*',
            price: 0.5,
            features: ['Shared CPU Core', '512MB DDR5 RAM','1GBit/s Connection', '15GB NVMe SSD', 'Shared IP', 'Free Reverse Proxy'],
            button: 'Coming soon',
            countries: {
                europe: true,
            }
        },
        {
            title: 'Basic',
            cpu: 'Ryzen 5 8700GE*',
            price: 4,
            features: ['Shared CPU Core', '4GB DDR5 RAM**','1GBit/s Connection', '30GB NVMe SSD', 'Shared IP', 'Free Reverse Proxy'],
            button: 'Coming soon',
            countries: {
                europe: true,
            }
        },
        {
            title: 'Advanced',
            cpu: 'Ryzen 7 7700*',
            price: 10,
            features: ['Dedicated CPU Core', '10GB DDR5 RAM**','1GBit/s Connection', '50GB NVMe SSD', 'Dedicated IP', 'Free Reverse Proxy'],
            button: 'Coming soon',
            pill: {
                text: 'Most Popular',
            },
            countries: {
                europe: true,
            }
        },
        {
            title: 'Pro',
            cpu: 'Ryzen 7 7950X3D*',
            price: 12,
            features: ['Dedicated CPU Core', '12GB DDR5 RAM**','1GBit/s Connection', '100GB NVMe SSD', 'Dedicated IP' , 'Free Reverse Proxy'],
            button: 'Coming soon',
            countries: {
                europe: true,
            }
        },
        {
            title: 'Top',
            cpu: 'Ryzen 7 7950X3D*',
            price: 16,
            features: ['Dedicated CPU Core', '16GB DDR5 RAM**','1GBit/s Connection', 'Unmetered NVMe SSD***', 'Dedicated IP' , 'Free Reverse Proxy'],
            button: 'Coming soon',
            countries: {
                europe: true,
            }
        },
    ];
  return (
      // <FollowerPointerCard>
      <>
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
                  Use code : <span className="font-semibold hover:opacity-50 duration-300">POWER</span> and
                  enjoy 25% off your first month!
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
                              <p className="text-zinc-600 mt-4 lg:max-w-full max-w-sm">
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
                      <div className="w-full flex items-center justify-center max-w-2xl opacity-80 translate-x-40">
                          <img src={'/panel-01.png'} alt="panel"
                               className="rounded-lg"/>
                      </div>
                      <div
                          className="w-full flex items-center justify-center max-w-5xl relative z-10 hover:scale-150 duration-300">
                          <img src={'/panel.png'} alt="panel"
                               className="rounded-lg shadow-2xl shadow-[#FF4D14]/30"/>
                      </div>
                      <div className="w-full flex items-center justify-center max-w-2xl opacity-80 -translate-x-40">
                          <img src={'/panel-02.png'} alt="panel"
                               className="rounded-lg"/>
                      </div>
                  </div>
              </div>
              <div
                  className="flex flex-col justify-center item-center w-full h-auto bg-gradient-to-bl to-[#FF4D14]/10 from-transparent pb-24">
                  <div className="mb-20 text-center flex flex-col gap-4">
                      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl">Awesome
                          Prices!</p>
                      <p className="opacity-50 font-light">Choose from our wide range of plans to fit your
                          server</p>
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
                              purchased
                              at checkout</p>
                          <p className="text-center text-white opacity-50 w-full text-xs">*** Fair Use Policy</p>
                      </div>
                  </div>
              </div>
              <div
                  className="flex flex-row items-center justify-center py-20 md:h-auto bg-gradient-to-tl to-[#FF4D14]/10 from-transparent relative w-full">
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
                              <p className="opacity-50 font-light">We currently only offer in Germany, but are
                                  expanding!</p>
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
                              // {x: 21, y: 30, name: `America - NJ`},
                              // {x: 18.5, y: 40, name: `America - FL`},
                          ]}
                                        mapSrc={'https://upload.wikimedia.org/wikipedia/commons/a/a0/World_map_with_points.svg'}/>
                      </div>
                  </div>
              </div>
              <div className="bg-[#FF4D14] w-full h-auto p-12">
                  <div className="flex flex-col lg:flex-row gap-24 justify-between text-black">
                      <div className="flex flex-col gap-12">
                          <div className="flex flex-row gap-4">
                              <img className="cursor-pointer hover:opacity-50 duration-300 w-8" src={"/logo-black.png"}
                                   alt={"logo"}/>
                              <p className="max-w-xs opacity-70">
                                  PowerHut is a game focused hosting company that started in early 2021.
                              </p>
                          </div>
                          <div className="flex flex-row gap-4">
                              <FaDiscord size={33}
                                         className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                              <FaTwitter size={33}
                                         className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                              <FaInstagramSquare size={33}
                                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                              <FaTiktok size={33}
                                        className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}/>
                          </div>
                          <p className="max-w-lg opacity-70 text-sm">
                              © 2019 - 2024 | PowerHut, LLC. | All rights reserved.
                          </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-12">
                          <div className="flex flex-col gap-2">
                              <p className="underline font-semibold">Support</p>
                              <a href={'https://docs.powerhut.pro/faq'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>FAQ</a>
                              <a href={'https://discord.powerhut.pro'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Discord</a>
                              <a href={'https://docs.powerhut.pro'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Knowledgebase</a>
                              <a href={'https://monitor.powerhut.pro'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Server
                                  Status</a>
                              <a href={'https://grafana.powerhut.pro'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Grafana</a>
                          </div>
                          <div className="flex flex-col gap-2">
                              <p className="underline font-semibold">Client</p>
                              <a href={'https://billing.powerhut.pro/register.php'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Register</a>
                              <a href={'https://billing.powerhut.pro/index.php?rp=/login'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Login</a>
                              <a href={'https://panel.powerhut.pro'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Game
                                  Panel</a>
                              <a href={'https://billing.powerhut.pro/submitticket.php?step=2&deptid=1'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Submit
                                  a Ticket</a>
                          </div>
                          <div className="flex flex-col gap-2">
                              <a href={'/'} className="underline font-semibold">Legal</a>
                              <a href={'/'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Terms
                                  of Service</a>
                              <a href={'/'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Privacy
                                  Policy</a>
                              <a href={'/'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Fair
                                  Usage Policy</a>
                              <a href={'/'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Minecraft
                                  EULA</a>
                              <a href={'/'}
                                 className={"hover:opacity-100 opacity-70 duration-300 cursor-pointer hover:text-white"}>Abuse</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
      // </FollowerPointerCard>
  );
}
