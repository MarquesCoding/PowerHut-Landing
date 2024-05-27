import {PricingTier} from "@/app/components/PricingCard/PricingCard";

export const pricingTiers: PricingTier[] = [
    // {
    //     title: 'Web',
    //     cpu: 'Ryzen 5 3600*',
    //     price: 1,
    //     features: ['3 Domains', '3 Databases','AutoSSL - CPanel', '50GB NVMe SSD', 'Unlimited Bandwidth', 'Shared IP'],
    //     button: {
    //         text: 'Coming soon',
    //     },
    //     countries: {
    //         europe: true,
    //     }
    // },
    {
        title: 'Dev',
        cpu: '',
        price: 2,
        features: ['Shared CPU Core', '1GB DDR5 RAM','1GBit/s Connection', '15GB NVMe SSD', 'Shared IP'],
        button: {
            text: 'Order',
            link: "https://billing.powerhut.pro"
        },
        countries: {
            europe: true,
            america: true
        }
    },
    {
        title: 'Basic',
        cpu: '',
        price: 8,
        features: ['Shared CPU Core', '4GB DDR5 RAM**','1GBit/s Connection', '30GB NVMe SSD', 'Shared IP'],
        button: {
            text: 'Order',
            link: "https://billing.powerhut.pro"
        },
        countries: {
            europe: true,
            america: true
        }
    },
    {
        title: 'Advanced',
        cpu: '',
        price: 12,
        originalPrice: 16,
        features: ['Dedicated CPU Core', '6GB DDR5 RAM**','1GBit/s Connection', '50GB NVMe SSD', 'Dedicated IP'],
        button: {
            text: 'Order',
            link: "https://billing.powerhut.pro"
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
        title: 'Pro',
        cpu: '',
        price: 16,
        originalPrice: 20,
        features: ['Dedicated CPU Core', '12GB DDR5 RAM**','1GBit/s Connection', '100GB NVMe SSD', 'Dedicated IP'],
        button: {
            text: 'Order',
            link: "https://billing.powerhut.pro"
        },
        countries: {
            europe: true,
            america: true
        }
    },
    {
        title: 'Top',
        cpu: '',
        price: 20,
        originalPrice: 24,
        features: ['Dedicated CPU Core', '16GB DDR5 RAM**','1GBit/s Connection', 'Unmetered NVMe SSD***', 'Dedicated IP'],
        button: {
            text: 'Order',
            link: "https://billing.powerhut.pro"
        },
        countries: {
            europe: true,
            america: true
        }
    },
];