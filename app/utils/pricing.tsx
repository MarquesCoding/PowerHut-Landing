import {PricingTier} from "@/app/components/PricingCard/PricingCard";
import {MdCode, MdGroup, MdSignalWifi1Bar, MdSignalWifi2Bar, MdSignalWifi3Bar, MdSignalWifi4Bar} from "react-icons/md";
import React from "react";
import {HiMiniUserGroup} from "react-icons/hi2";
import {FaBolt, FaGamepad, FaUserFriends} from "react-icons/fa";

export const pricingTiers: PricingTier[] = [
    {
        logo: (
            <MdCode
                className="p-2 bg-white/10 w-10 h-10 flex  items-center justify-center rounded-xl"/>
        ),
        title: 'Dev',
        description: 'Perfect for proxy servers',
        cpu: 'Ryzen 7 8700GE*',
        price: 2,
        features: ['Shared CPU Core', '2GB DDR5 RAM','1GBit/s Connection', '10GB NVMe SSD', 'Shared IP', 'Custom Game Changer'],
        button: {
            text: 'Purchase',
            link: "https://billing.powerhut.pro/index.php?rp=/store/game-server-hosting/test-server"
        },
        countries: {
            europe: true,
            america: true
        }
    },
    {
        logo: (
            <FaUserFriends
                className="p-2 bg-white/10 w-10 h-10 flex items-center justify-center rounded-xl"/>
        ),
        title: 'Friends',
        description: 'Recommended for 4-8 friends',
        cpu: 'Ryzen 7 8700GE*',
        price: 4,
        features: ['Shared CPU Core', '4GB DDR5 RAM','1GBit/s Connection', '15GB NVMe SSD', 'Shared IP' , 'Custom Game Changer'],
        button: {
            text: 'Purchase',
            link: "https://billing.powerhut.pro/index.php?rp=/store/game-server-hosting/friends"
        },
        countries: {
            europe: true,
            america: true
        }
    },
    {
        logo: (
            <HiMiniUserGroup
                className="p-2 bg-white/10 w-10 h-10 flex items-center justify-center rounded-xl"/>
        ),
        title: 'Basic',
        description: 'Good for small modpacks',
        cpu: 'Ryzen 7 8700GE*',
        price: 8,
        originalPrice: 12,
        features: ['Shared CPU Core', '6GB DDR5 RAM**','1GBit/s Connection', '30GB NVMe SSD', 'Shared IP', 'Custom Game Changer'],
        button: {
            text: 'Purchase',
            link: "https://billing.powerhut.pro/index.php?rp=/store/game-server-hosting/basic"
        },
        countries: {
            europe: true,
            america: true
        }
    },
    {
        logo: (
            <MdGroup
                className="p-2 bg-white/10 w-10 h-10 flex  items-center justify-center rounded-xl"/>
        ),
        title: 'Advanced',
        description: 'Awesome for large modpacks',
        cpu: 'Ryzen 7 8700GE*',
        price: 12,
        originalPrice: 16,
        features: ['Dedicated CPU Core', '8GB DDR5 RAM**','1GBit/s Connection', '50GB NVMe SSD', 'Dedicated IP', 'Custom Game Changer'],
        button: {
            text: 'Purchase',
            link: "https://billing.powerhut.pro/index.php?rp=/store/game-server-hosting/advanced"
        },
        pill: {
            text: 'Most Popular',
        },
        countries: {
            europe: true,
            america: true
        }
    },
    {
        logo: (
            <FaGamepad
                className="p-2 bg-white/10 w-10 h-10 flex items-center justify-center rounded-xl"/>
        ),
        title: 'Pro',
        description: 'Great for small communities',
        cpu: 'Ryzen 9 7950X*',
        price: 16,
        originalPrice: 20,
        features: ['Dedicated CPU Core', '12GB DDR5 RAM**','1GBit/s Connection', '100GB NVMe SSD', 'Dedicated IP' , 'Custom Game Changer'],
        button: {
            text: 'Purchase',
            link: "https://billing.powerhut.pro/index.php?rp=/store/game-server-hosting/pro"
        },
        countries: {
            europe: true,
            america: true
        }
    },
    {
        logo: (
            <FaBolt
                className="p-2 bg-white/10 w-10 h-10 flex text-[#FF4D14] items-center justify-center rounded-xl"/>
        ),
        title: 'Top',
        description: 'Top tier for large communities',
        cpu: 'Ryzen 9 7950X*',
        price: 20,
        originalPrice: 24,
        features: ['Dedicated CPU Core', '16GB DDR5 RAM**','1GBit/s Connection', 'Unmetered NVMe SSD***', 'Dedicated IP' , 'Custom Game Changer'],
        button: {
            text: 'Purchase',
            link: "https://billing.powerhut.pro/index.php?rp=/store/game-server-hosting/top"
        },
        countries: {
            europe: true,
            america: true
        }
    },
];

export const webTiers: PricingTier[] = [
    {
        logo: (
            <MdSignalWifi1Bar
                className="p-2 bg-white/10 w-10 h-10 flex  items-center justify-center rounded-xl"/>
        ),
        title: 'Beginner',
        description: 'Perfect for beginners',
        cpu: 'Ryzen 9 7950X*',
        price: 2,
        originalPrice: 5,
        features: ['50GB NVMe SSD', '100GB Bandwidth','50 FTP Accounts', '50 Email Addresses', '25 Databases' , 'Auto SSL Certificates'],
        button: {
            text: 'Coming Soon',
            link: "#"
        },
        countries: {
            europe: true,
        }
    },
    {
        logo: (
            <MdSignalWifi2Bar
                className="p-2 bg-white/10 w-10 h-10 flex  items-center justify-center rounded-xl"/>
        ),
        title: 'Standard',
        description: 'Great for personal websites',
        cpu: 'Ryzen 9 7950X*',
        price: 4,
        originalPrice: 8,
        features: ['100GB NVMe SSD', '200GB Bandwidth','75 FTP Accounts', '75 Email Addresses', '50 Databases' , 'Auto SSL Certificates'],
        button: {
            text: 'Coming Soon',
            link: "#"
        },
        countries: {
            europe: true,
        }
    },
    {
        logo: (
            <MdSignalWifi4Bar
                className="p-2 bg-white/10 w-10 h-10 flex text-[#FF4D14] items-center justify-center rounded-xl"/>
        ),
        title: 'Extreme',
        description: 'Level up with more power',
        cpu: 'Ryzen 9 7950X*',
        price: 6,
        originalPrice: 12,
        features: ['200GB NVMe SSD', 'Unlimited Bandwidth***','100 FTP Accounts', '100 Email Addresses', '60 Databases' , 'Auto SSL Certificates'],
        button: {
            text: 'Coming Soon',
            link: "#"
        },
        countries: {
            europe: true,
        }
    },
];