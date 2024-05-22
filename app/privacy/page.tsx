'use client';
import React from "react";
import {motion} from "framer-motion";
import {NavigationMenuDemo} from "@/app/components/Navigation/Navigation";
import Footer from "@/app/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
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
                        <p className="text-3xl lg:text-8xl font-bold">Privacy Policy</p>
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

                className="w-full h-auto flex items-center justify-center bg-gradient-to-br from-[#FF4D14]/10 to-transparent bg-opacity-50 mb-24 p-4 lg:0">
                <div className="mt-12 flex flex-col gap-4 max-w-2xl min-w-2xl w-full">
                    {/* OVERVIEW*/}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Overview</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    This Privacy Policy describes Our policies and procedures on the collection, use and
                                    disclosure of Your information when You use the Service and tells You about Your
                                    privacy rights and how the law protects You.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* INTERPRETATION AND DEFINITIONS*/}
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
                                                <strong>Business</strong><b
                                                className="text-white/50 font-medium">
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.</b>
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
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-white/50">For the purpose of the GDPR, the Company is the
                                            Data Controller.</p>
                                        <ul className="ml-6 list-disc [&>li]:mt-2">
                                            <li>
                                                <strong>Consumer</strong><b className="text-white/50 font-medium"> for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.</b>
                                            </li>
                                            <li>
                                                <strong>Cookies</strong><b
                                                className="text-white/50 font-medium"> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</b>
                                            </li>
                                            <li>
                                                <strong>Country</strong><b
                                                className="text-white/50 font-medium"> refers to: London, United Kingdom</b>
                                            </li>
                                            <li>
                                                <strong>Data Controller</strong><b
                                                className="text-white/50 font-medium"> for the purposes of the GDPR (General Data Protection Regulation), refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.</b>
                                            </li>
                                            <li>
                                                <strong>Device</strong><b
                                                className="text-white/50 font-medium"> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</b>
                                            </li>
                                            <li>
                                                <strong>Do Not Track</strong><b
                                                className="text-white/50 font-medium"> (DNT) is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.</b>
                                            </li>
                                            <li>
                                                <strong>Personal Data</strong><b
                                                className="text-white/50 font-medium"> is any information that relates to an identified or identifiable individual.</b>
                                            </li>
                                        </ul>
                                        <p className="text-white/50">For the purposes for GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity.</p>
                                    </div>
                                    <br/>
                                    <div>
                                        <p className="text-white/50">For the purposes of the CCPA, Personal Data means
                                            any information that identifies, relates to, describes or is capable of
                                            being associated with, or could reasonably be linked, directly or
                                            indirectly, with You.</p>
                                        <ul className="ml-6 list-disc [&>li]:mt-2">
                                            <li>
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                <strong>Sale</strong><b className="text-white/50 font-medium"> for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's personal information to another business or a third party for monetary or other valuable consideration.</b>
                                            </li>
                                            <li>
                                                <strong>Service</strong><b
                                                className="text-white/50 font-medium"> refers to the Website.</b>
                                            </li>
                                            <li>
                                                <strong>Service Provider</strong><b
                                                className="text-white/50 font-medium"> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are considered Data Processors.</b>
                                            </li>
                                            <li>
                                                <strong>Third-party Social Media Service</strong><b
                                                className="text-white/50 font-medium"> refers to any website or any social network website through which a User can log in or create an account to use the Service.</b>
                                            </li>
                                            <li>
                                                <strong>Usage data</strong><b
                                                className="text-white/50 font-medium"> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</b>
                                            </li>
                                            <li>
                                                <strong>Website</strong><b
                                                className="text-white/50 font-medium"> refers to PowerHut, LTD, accessible from <a className="text-white underline" href="https://powerhut.pro/">https://powerhut.pro</a></b>
                                            </li>
                                            <li>
                                                <strong>You</strong><b
                                                className="text-white/50 font-medium"> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</b>
                                            </li>
                                        </ul>
                                        <p className="text-white/50">Under GDPR (General Data Protection Regulation), You can be referred to as the Data Subject or as the User as you are the individual using the Service.</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* COLLECTING PERSONAL DATA*/}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Collecting and using your personal data</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    TO BE FILLED OUT
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* DETAILED INFORMATION AND PROCESSING OF PERSONAL DATA */}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Detailed information on the processing of your personal data</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    TO BE FILLED OUT
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* GDPR PRIVACY*/}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>GDPR PRIVACY</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    TO BE FILLED OUT
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* CCPA PRIVACY*/}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>CCPA PRIVACY</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    TO BE FILLED OUT
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* DO NOT TRACK POLICY */}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <AccordionTrigger>"DO NOT TRACK" policy as required by california online privacy protection act (CALOPPA)</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    Our Service does not respond to Do Not Track signals.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    However, some third party websites do keep track of Your browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked. You can enable or disable DNT by visiting the preferences or settings page of Your web browser.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* CHILDREN PRIVACY */}
                    <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <AccordionTrigger>Children's Privacy</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    The Service may contain content appropriate for children under the age of 13. As a
                                    parent, you should know that through the Service children under the age of 13 may
                                    participate in activities that involve the collection or use of personal
                                    information. We use reasonable efforts to ensure that before we collect any personal
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    information from a child, the child"s parent receives notice of and consents to our
                                    personal information practices.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    We also may limit how We collect, use, and store some of the information of Users
                                    between 13 and 18 years old. In some cases, this means We will be unable to provide
                                    certain functionality of the Service to these Users. If We need to rely on consent
                                    as a legal basis for processing Your information and Your country requires consent
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    from a parent, We may require Your parent"s consent before We collect and use that
                                    information.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    We may ask a User to verify its date of birth before collecting any personal
                                    information from them. If the User is under the age of 13, the Service will be
                                    either blocked or redirected to a parental consent process.
                                </p>
                                <p className="leading-2 mt-2">
                                    <strong>Information collected from children under the age of 13</strong>
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    We may collect and store other personal information about children if this
                                    information is submitted by a child with prior parent consent or by the parent or
                                    guardian of the child.
                                </p>
                                <div className="leading-7 mt-2">
                                    <div>
                                        <p className="text-white/50">The Company may collect and store the following
                                            types of personal information about
                                            a child when submitted by a child with prior parental consent or by the
                                            parent or
                                            guardian of the child:</p>
                                        <ul className="ml-6 list-disc [&>li]:mt-2">
                                            <li>
                                                <strong>First and/or last name</strong>
                                            </li>
                                            <li>
                                                <strong>Date of birth</strong>
                                            </li>
                                            <li>
                                                <strong>Gender</strong>
                                            </li>
                                            <li>
                                                <strong>Email address</strong>
                                            </li>
                                            <li>
                                                <strong>Telephone number</strong>
                                            </li>
                                            <li>
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                <strong>Parent's or guardian's name</strong>
                                            </li>
                                            <li>
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                <strong>Parent's or guardian's email address</strong>
                                            </li>
                                        </ul>
                                        <p className="leading-7 mt-6 text-white/50">
                                            For further details on the information We might collect, You can refer to
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            the "Types of Data Collected" section of this Privacy Policy. We follow our
                                            standard Privacy Policy for the disclosure of personal information collected
                                            from and about children.
                                        </p>
                                    </div>
                                    <p className="leading-2 mt-2">
                                        <strong>Parental Access</strong>
                                    </p>
                                    <p className="leading-7 mt-6 text-white/50">
                                        A parent who has already given the Company permission to collect and use his child personal information can, at any time:
                                    </p>
                                    <div>
                                        <ul className="ml-6 list-disc [&>li]:mt-2">
                                            <li>
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                <strong>Review, correct or delete the child's personal information</strong>
                                            </li>
                                            <li>
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                <strong>Discontinue further collection or use of the child's personal information</strong>
                                            </li>
                                        </ul>
                                        <p className="leading-7 mt-6 text-white/50">
                                            To make such a request, You can write to Us using the contact information provided in this Privacy Policy.
                                        </p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* CALIFORNIA PRIVACY RIGHTS */}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <AccordionTrigger>Your california privacy rights (California's shine the light
                                law)</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Under California Civil Code Section 1798 (California's Shine the Light law),
                                    California residents with an established business relationship with us can request
                                    information once a year about sharing their Personal Data with third parties for the
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    third parties' direct marketing purposes.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    If you'd like to request more information under the California Shine the Light law,
                                    and if You are a California resident, You can contact Us using the contact
                                    information provided below.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* CALIFORNIA MINOR RIGHTS*/}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>California privacy rights for minor users (california business and
                                professions code section 22581)</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    California Business and Professions Code section 22581 allow California residents
                                    under the age of 18 who are registered users of online sites, services or
                                    applications to request and obtain removal of content or information they have
                                    publicly posted.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    To request removal of such data, and if You are a California resident, You can contact Us using the contact information provided below, and include the email address associated with Your account.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    Be aware that Your request does not guarantee complete or comprehensive removal of content or information posted online and that the law may not permit or require removal in certain circumstances.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* LINKS TO OTHER WEBSITES */}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Links to other websites</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* CHANGES TO THIS PRIVACY POLICY*/}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Changes to this privacy policy</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 mt-6 text-white/50">
                                    We may update Our Privacy Policy from time to time. We will notify You of any
                                    changes by posting the new Privacy Policy on this page.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
                                </p>
                                <p className="leading-7 mt-6 text-white/50">
                                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* CONTACT US*/}
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
