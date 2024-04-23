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
    {
        title: "About us",
        href: "/docs/primitives/alert-dialog",
        description:
            "Wanna learn more about about our founding members? How we started our journey?",
    },
    {
        title: "Our Power Panel",
        href: "/docs/primitives/hover-card",
        description:
            "Powered under the hood by Pterodactyl, our fully custom built Game Panel",
    },
    {
        title: "Support",
        href: "/docs/primitives/progress",
        description:
            "Get all of your questions answered in our discord server or contact support.",
    },
    {
        title: "Guides",
        href: "/docs/primitives/scroll-area",
        description: "Learn how to manage your server to get the most out of it!",
    },
    {
        title: "Terms of Service",
        href: "/docs/primitives/tabs",
        description:
            "",
    },
    {
        title: "Privacy Policy",
        href: "/docs/primitives/tooltip",
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
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/docs" title="Server Hosting">
                                Looking to play games with your friends? Great, we can help!
                            </ListItem>
                            <ListItem href="/docs/installation" title="Dedicated Servers">
                                Maybe you want to create your very own network or multiple games all from a single machine.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Discord Bots">
                                Supercharge your Discord server your own bot, wanna play music? Feel free to use our free lavalink music server!
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Information</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-white text-black hover:bg-[#FF4D14] hover:text-white"
                        )}>
                            Login
                        </NavigationMenuLink>
                    </Link>
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
