"use client"

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import {cn} from "@/app/utils/cn";


const components: { title: string; href: string; description: string }[] = [
    // {
    //     title: "About us",
    //     href: "/about",
    //     description:
    //         "Wanna learn more about about our founding members? How we started our journey?",
    // },
    // {
    //     title: "Our Power Panel",
    //     href: "/panel",
    //     description:
    //         "Powered under the hood by Pterodactyl, our fully custom built Game Panel",
    // },
    {
        title: "Support",
        href: "/support",
        description:
            "Get all of your questions answered in our discord server or contact support.",
    },
    {
        title: "Guides",
        href: "https://billing.powerhut.pro/index.php?rp=/knowledgebase",
        description: "Learn how to manage your server to get the most out of it!",
    },
    {
        title: "Terms of Service",
        href: "/terms",
        description:
            "",
    },
    {
        title: "Privacy Policy",
        href: "/privacy",
        description:
            "",
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[100px] lg:w-[400px] bg-[#141414]">
                            <ListItem href="/web" title="Web Hosting">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Want to host a simple or complex website? We've got you!
                            </ListItem>
                            <ListItem href="/game" title="Game Hosting">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Looking to play games with your friends? Great, we can help!
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Information</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#141414]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className="bg-white text-black hover:bg-[#FF4D14] hover:text-white"
                    >Login</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1 bg-[#141414]">
                            <ListItem
                                key="Billing Panel"
                                title="Billing Panel"
                                href="https://billing.powerhut.pro"
                            >
                                Panel for where you order a server
                            </ListItem>
                            <ListItem
                                key="Game Panel"
                                title="Game Panel"
                                href="https://panel.powerhut.pro"
                            >
                                Panel for where you control & monitor your purchased servers
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3  no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium">{title}</div>
                    <p className="text-sm text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
