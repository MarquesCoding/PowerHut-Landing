import {motion} from "framer-motion";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/app/components/ui/accordion";
import React from "react";

const FAQ = () => {
    return (
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

            className="w-full h-auto flex items-center justify-center flex-col bg-gradient-to-tr from-[#FF4D14]/10 to-transparent bg-opacity-50 pb-24 p-4 lg:0">
            <div className="mb-20 text-center flex flex-col gap-4">
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl">
                    FAQs
                </p>
                <p className="opacity-50 font-light">
                    Our frequently asked questions
                </p>
            </div>
            <div className="flex flex-col min-w-2xl w-full items-center">
                <div className="flex flex-col gap-4 max-w-2xl min-w-2xl w-full">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How can I contact support?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We utilize Discord to provide realtime support!
                                    Moreover, we can also be contacted through our Billing Portal.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How long does it take for a server to be ready?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Servers are available as soon as your payment has been processed, typically
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    {' '}within a few minutes. If they aren't throw us a message.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Can I transfer my current server to PowerHut?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Of course! Feel free to create a ticket on our Discord Server and we will
                                    help you out.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What game panel do you use?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We use a heavily customized version of the Pterodactyl panel.
                                    As such, you can expect a fast, lag-free, and secure experience to take care
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    {' '}of all your server's needs!
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Which payment methods do you accept?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We currently accept payments through Stripe and PayPal.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Can I upgrade or downgrade my server in the
                                future?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Absolutely, just create a ticket and we will handle everything! And the best
                                    part?
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    {' '}Upgrades are pro-rated so, you won't have to worry about being overcharged!
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Where are your servers located?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We have servers in Germany & USA with more locations coming soon!
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <AccordionTrigger>Can I change my server location after I've
                                purchased?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We can only transfer servers as needed, as it depends on the situation and
                                    available stock.
                                    Feel free to open a ticket with us if you wish to change your location!
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Which games do you support?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We have a huge variety of supported games such as Minecraft, Valheim,
                                    Terria, Factorio, Rust, Satisfactory and much more! Feel free to recommend a
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    {' '}game in the discord if we don't currently support it!
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How can I cancel my server?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Damn, that sucks for you to go. But no worries. You can request a
                                    cancellation through the billing panel!
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </motion.div>
    )
};
export default FAQ;