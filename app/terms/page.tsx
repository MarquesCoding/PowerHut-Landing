'use client';
import React from "react";
import {motion} from "framer-motion";
import {NavigationMenuDemo} from "@/app/components/Navigation/Navigation";
import Footer from "@/app/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

                className="w-full h-[50vh] bg-gradient-to-tr from-[#FF4D14]/10 to-transparent bg-opacity-50 relative">
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
                        <p className="text-8xl font-bold">Terms of Service</p>
                        <div className="max-w-2xl text-start mt-12 flex flex-col gap-4">
                            <p>Last Updated : 05/12/2024</p>

                        </div>
                    </motion.div>
                </div>
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

                className="w-full h-auto flex items-center justify-center bg-gradient-to-br from-[#FF4D14]/10 to-transparent bg-opacity-50 mb-24">
                <div className="mt-12 flex flex-col gap-4 max-w-2xl min-w-2xl w-full">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Overview</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    This website is operated by PowerHut. Throughout the site, the terms “we”, “us”
                                    and
                                    “our” refer to
                                    PowerHut. PowerHut offers this website, including all information, tools
                                    and
                                    services
                                    available
                                    from this site to you, the user, conditioned upon your acceptance of all terms,
                                    conditions, policies and
                                    notices stated here.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    By visiting our site and/ or purchasing something from us, you engage in our
                                    “Service”
                                    and agree to be
                                    bound
                                    by the following terms and conditions (“Terms of Service”, “Terms”), including those
                                    additional terms
                                    and
                                    conditions and policies referenced herein and/or available by hyperlink. These Terms
                                    of
                                    Service apply to
                                    all
                                    users of the site, including without limitation users who are browsers, vendors,
                                    customers, merchants,
                                    and/
                                    or contributors of content.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    Please read these Terms of Service carefully before accessing or using our website.
                                    By
                                    accessing or
                                    using
                                    any part of the site, you agree to be bound by these Terms of Service. If you do not
                                    agree to all the
                                    terms
                                    and conditions of this agreement, then you may not access the website or use any
                                    services. If these
                                    Terms of
                                    Service are considered an offer, acceptance is expressly limited to these Terms of
                                    Service.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Interpretation and Definitions</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-2 mt-2">
                                    <strong>Interpretation</strong>
                                </p>
                                <p className="leading-7 mt-2 text-white/50">
                                    The words of which the initial letter is capitalized have meanings defined under the
                                    following
                                    conditions. The following definitions shall have the same meaning regardless of
                                    whether
                                    they appear in
                                    singular or in plural.
                                </p>
                                <p className="leading-2 mt-2">
                                    <strong>Definitions</strong>
                                </p>
                                <div className="leading-7 mt-2">
                                    <div>
                                        <p className="text-white/50">For the purposes of these Terms and Conditions:</p>
                                        <ul className="ml-6 list-disc [&>li]:mt-2">
                                            <li>
                                                <strong>Account</strong><b className="text-white/50 font-medium"> means
                                                a
                                                unique account created
                                                for You to
                                                access our Service or parts of
                                                our Service.</b>
                                            </li>
                                            <li>
                                                <strong>Country</strong><b className="text-white/50 font-medium"> refers
                                                to:
                                                London, United
                                                Kingdom</b>
                                            </li>
                                            <li>
                                                <strong>Company</strong><b
                                                className="text-white/50 font-medium"> (referred
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                to as either "the
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                Company", "We", "Us" or "Our" in this
                                                Agreement) refers to PowerHut.</b>
                                            </li>
                                            <li>
                                                <strong>Content</strong><b className="text-white/50 font-medium"> refers
                                                to
                                                content such as text,
                                                images, or other information that can be
                                                posted, uploaded, linked to or otherwise made available by You,
                                                regardless
                                                of the form of that
                                                content.</b>
                                            </li>
                                            <li>
                                                <strong>Device</strong><b className="text-white/50 font-medium"> means
                                                any
                                                device that can access
                                                the Service such as a computer, a
                                                cellphone or a digital tablet.</b>
                                            </li>
                                            <li>
                                                <strong>Feedback</strong><b className="text-white/50 font-medium"> means
                                                feedback, innovations or
                                                suggestions sent by You regarding the
                                                attributes, performance or features of our Service.</b>
                                            </li>
                                            <li>
                                                <strong>Goods</strong><b className="text-white/50 font-medium"> refer to
                                                the
                                                items offered for
                                                sale on the Service.</b>
                                            </li>
                                            <li>
                                                <strong>Service</strong><b className="text-white/50 font-medium"> refers
                                                to
                                                the Website.</b>
                                            </li>
                                            <li>
                                                <strong>Subscriptions</strong><b
                                                className="text-white/50 font-medium"> refers to the services or
                                                access to the Service offered on a
                                                subscription basis by the Company to You.</b>
                                            </li>
                                            <li>
                                                <strong>Terms and Conditions</strong><b
                                                className="text-white/50 font-medium"> (also referred as
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                "Terms") mean these Terms and Conditions
                                                that form the entire agreement between You and the Company regarding the
                                                use
                                                of the Service.</b>
                                            </li>
                                            <li>
                                                <strong>Third-party Social media Services</strong><b
                                                className="text-white/50 font-medium"> means
                                                any services or content (including data,
                                                information, products or services) provided by a third-party that may be
                                                displayed, included or
                                                made available by the Service.</b>
                                            </li>
                                            <li>
                                                <strong>Website</strong><b className="text-white/50 font-medium"> refers
                                                to
                                                PowerHut,
                                                accessible from</b> <a
                                                href={"https://powerhut.pro"}>https://powerhut.pro</a>
                                            </li>
                                            <li>
                                                <strong>You</strong><b className="text-white/50 font-medium"> means the
                                                individual accessing or
                                                using the Service, or the company, or other
                                                legal entity on behalf of which such individual is accessing or using
                                                the
                                                Service, as
                                                applicable.</b>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Acknowledgement</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    These are the Terms and Conditions governing the use of this Service and the
                                    agreement
                                    that operates
                                    between You and the Company. These Terms and Conditions set out the rights and
                                    obligations of all users
                                    regarding the use of the Service.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    Your access to and use of the Service is conditioned on Your acceptance of and
                                    compliance with these
                                    Terms and Conditions. These Terms and Conditions apply to all visitors, users and
                                    others
                                    who access or
                                    use the Service.

                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    By accessing or using the Service You agree to be bound by these Terms and
                                    Conditions.
                                    If You disagree
                                    with any part of these Terms and Conditions then You may not access the Service.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    You represent that you are over the age of 18. The Company does not permit those
                                    under
                                    18 to use the
                                    Service.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    Your access to and use of the Service is also conditioned on Your acceptance of and
                                    compliance with the
                                    Privacy Policy of the Company. Our Privacy Policy describes Our policies and
                                    procedures
                                    on the
                                    collection, use and disclosure of Your personal information when You use the
                                    Application
                                    or the Website
                                    and tells You about Your privacy rights and how the law protects You. Please read
                                    Our
                                    Privacy Policy
                                    carefully before using Our Service.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Subscriptions</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-2 mt-2">
                                    <strong>Subscription period</strong>
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    The Service or some parts of the Service are available only with a paid
                                    Subscription.
                                    You will be billed
                                    in advance on a recurring and periodic basis (such as daily, weekly, monthly, or
                                    annually), depending on
                                    the type of Subscription plan you select when purchasing the Subscription.
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    At the end of each period, Your Subscription will automatically renew under the
                                    exact
                                    same conditions
                                    unless You cancel it or the Company cancels it. You may cancel Your Subscription
                                    renewal
                                    either through
                                    Your online account management page or by contacting the Company customer support
                                    team.
                                </p>
                                <p className="leading-2 mt-6">
                                    <strong>Subscription cancellations</strong>
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    You may cancel Your Subscription at any time. You will not receive any refund for
                                    the
                                    fees You already
                                    paid for Your current Subscription period and You will be able to access the Service
                                    until the end of
                                    Your current Subscription period.
                                </p>
                                <p className="leading-2 mt-6">
                                    <strong>Billing</strong>
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    You shall provide the Company with accurate and complete billing information
                                    including
                                    full name,
                                    address, state, zip code, telephone number, and a valid payment method information.
                                    By
                                    submitting such
                                    payment information, You automatically authorize the Company to charge all
                                    Subscription
                                    fees incurred
                                    through Your account to any such payment instruments.
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    Should automatic billing fail to occur for any reason, the Company will issue an
                                    electronic invoice
                                    indicating that you must proceed manually, within a certain deadline date, with the
                                    full
                                    payment
                                    corresponding to the billing period as indicated on the invoice.
                                </p>
                                <p className="leading-2 mt-6">
                                    <strong>Fee changes</strong>
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    The Company, in its sole discretion and at any time, may modify the Subscription
                                    fees.
                                    Any Subscription
                                    fee change will become effective at the end of the then-current Subscription period.
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    The comapny will provide You with reasonable prior notice of any change in
                                    Subscription
                                    fees to give You
                                    an opportunity to terminate Your Subscription before such change becomes effective.
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    Your continued use of the Service after the Subscription fee change comes into
                                    effect
                                    constitutes Your
                                    agreement to pay the modified Subscription fee amount.
                                </p>
                                <p className="leading-2 mt-6">
                                    <strong>Refunds</strong>
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    Except when required by law, paid Subscription fees are non-refundable.
                                </p>
                                <p className="leading-7 mt-4 text-white/50">
                                    Certain refund requests for Subscriptions may be considered by the Company on a
                                    case-by-case basis and
                                    in the sole discretion of the Company.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>User accounts</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    When You create an account with Us, You must provide Us information that is
                                    accurate,
                                    complete, and
                                    current at all times. Failure to do so constitutes a breach of the Terms, which may
                                    result in immediate
                                    termination of Your account on Our Service.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    You are responsible for safeguarding the password that You use to access the Service
                                    and
                                    for any
                                    activities or actions under Your password, whether Your password is with Our Service
                                    or
                                    a Third-Party
                                    Social Media Service.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    You agree not to disclose Your password to any third party. You must notify Us
                                    immediately upon becoming
                                    aware of any breach of security or unauthorized use of Your account.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    You may not use as a username the name of another person or entity or that is not
                                    lawfully available for
                                    use, a name or trademark that is subject to any rights of another person or entity
                                    other
                                    than You
                                    without appropriate authorization, or a name that is otherwise offensive, vulgar or
                                    obscene.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Personal Information</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Your subscription to our Service is also governed by our Privacy Policy. Please
                                    review
                                    our Privacy
                                    Policy.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Disclaimer of warranties; limitation of liability</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We do not guarantee, represent or warrant that your use of our service will be
                                    uninterrupted, timely,
                                    secure or error-free.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    We do not warrant that the results that may be obtained from the use of the service
                                    will
                                    be accurate or
                                    reliable.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    You agree that from time to time we may remove the service for indefinite periods of
                                    time or cancel the
                                    service at any time, without notice to you. You expressly agree that your use of, or
                                    inability to use,
                                    the service is at your sole risk. The service and all products and services
                                    delivered to
                                    you through the
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    service are (except as expressly stated by us) provided 'as is' and 'as available'
                                    for
                                    your use, without
                                    any representation, warranties or conditions of any kind, either express or implied,
                                    including all
                                    implied warranties or conditions of merchantability, merchantable quality, fitness
                                    for a
                                    particular
                                    purpose, durability, title, and non-infringement.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Severability</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    In the event that any provision of these Terms of Service is determined to be
                                    unlawful,
                                    void or
                                    unenforceable, such provision shall nonetheless be enforceable to the fullest extent
                                    permitted by
                                    applicable law, and the unenforceable portion shall be deemed to be severed from
                                    these
                                    Terms of Service,
                                    such determination shall not affect the validity and enforceability of any other
                                    remaining provisions.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Termination</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We may terminate or suspend Your account immediately, without prior notice or
                                    liability,
                                    for any reason
                                    whatsoever, including without limitation if You breach these Terms and Conditions.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    Upon termination, Your right to use the Service will cease immediately. If You wish
                                    to
                                    terminate Your
                                    account, You may simply discontinue using the Service.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Entire agreement</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    The failure of us to exercise or enforce any right or provision of these Terms of
                                    Service shall not
                                    constitute a waiver of such right or provision.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    These Terms of Service and any policies or operating rules posted by us on this site
                                    or
                                    in respect to
                                    The Service constitutes the entire agreement and understanding between You and us
                                    and
                                    govern Your use of
                                    the Service, superseding any prior or contemporaneous agreements, communications and
                                    proposals, whether
                                    oral or written, between You and us (including, but not limited to, any prior
                                    versions
                                    of the Terms of
                                    Service). Any ambiguities in the interpretation of these Terms of Service shall not
                                    be
                                    construed against
                                    the drafting party.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Changes to terms of service</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We reserve the right, at Our sole discretion, to modify or replace these Terms at
                                    any
                                    time. If a
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    revision is material We will make reasonable efforts to provide at least 30 days'
                                    notice
                                    prior to any
                                    new terms taking effect. What constitutes a material change will be determined at
                                    Our
                                    sole discretion.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    By continuing to access or use Our Service after those revisions become effective,
                                    You
                                    agree to be bound
                                    by the revised terms. If You do not agree to the new terms, in whole or in part,
                                    please
                                    stop using the
                                    website and the Service.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Contact information</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    If you have any questions about these Terms, please contact us at:
                                </p>
                                <p className="leading-7 mt-6">
                                    <a href={"mailto:support@powerhut.pro"}>support@powerhut.pro</a>
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </motion.div>
            <Footer/>
        </div>
    )
}
