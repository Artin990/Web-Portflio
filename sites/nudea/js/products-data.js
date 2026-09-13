/*=================================
        PRODUCTS DATA
==================================*/

const PRODUCTS = [
    {
        id: 1,
        name: "سرم پوست The Ordinary",
        brand: "The Ordinary",
        price: 1365000,
        oldPrice: 2100000,
        image: "images/product1.jpg",
        description: "سرم نیاسینامید مناسب انواع پوست"
    },
    {
        id: 2,
        name: "عطر Chanel Coco",
        brand: "Chanel",
        price: 7565000,
        oldPrice: 8900000,
        image: "images/product2.jpg",
        description: "ادوپرفیوم زنانه Chanel Coco"
    },
    {
        id: 3,
        name: "رژ لب Dior",
        brand: "Dior",
        price: 3120000,
        oldPrice: 3900000,
        image: "images/product3.jpg",
        description: "رژ لب مات دیور"
    },
    {
        id: 4,
        name: "کرم آبرسان CeraVe",
        brand: "CeraVe",
        price: 1260000,
        oldPrice: 1800000,
        image: "images/care10.jpeg",
        description: "کرم آبرسان مناسب پوست خشک"
    },
    {
        id: 5,
        name: "رژگونه Rare Beauty",
        brand: "Rare Beauty",
        price: 2990000,
        oldPrice: null,
        image: "images/buti13.jpeg",
        description: "رژگونه مایع راری بیوتی"
    },
    {
        id: 6,
        name: "کرم پودر MAC Studio Fix",
        brand: "MAC",
        price: 3650000,
        oldPrice: 4800000,
        image: "images/buti17.jpeg",
        description: "کرم پودر حرفه‌ای"
    },
    {
        id: 7,
        name: "عطر Dior J'adore",
        brand: "Dior",
        price: 9400000,
        oldPrice: null,
        image: "images/atr5.jpeg",
        description: "ادوپarfum زنانه"
    },
    {
        id: 8,
        name: "سرم La Roche-Posay",
        brand: "La Roche-Posay",
        price: 2750000,
        oldPrice: 3450000,
        image: "images/care5.jpeg",
        description: "سرم ضد پیری"
    },
    {
        id: 9,
        name: "ریمل Sky High Maybelline",
        brand: "Maybelline",
        price: 1590000,
        oldPrice: null,
        image: "images/buti12.jpeg",
        description: "ریمل بلندکننده"
    },
    {
        id: 10,
        name: "رژ لب YSL Rouge",
        brand: "YSL",
        price: 4250000,
        oldPrice: 5100000,
        image: "images/buti14.jpeg",
        description: "رژ لب مات"
    },
    {
        id: 11,
        name: "پنکک Estée Lauder",
        brand: "Estée Lauder",
        price: 3450000,
        oldPrice: null,
        image: "images/buti7.jpeg",
        description: "پنکک فشرده"
    },
    {
        id: 12,
        name: "رژگونه Dior Backstage",
        brand: "Dior",
        price: 2950000,
        oldPrice: 4500000,
        image: "images/buti13.jpeg",
        description: "رژگونه پودری"
    },
    {
        id: 13,
        name: "کرم شب L'Oréal Paris",
        brand: "L'Oréal",
        price: 1850000,
        oldPrice: null,
        image: "images/care8.jpeg",
        description: "کرم شب ضد پیری"
    },
    {
        id: 14,
        name: "عطر Gucci Bloom",
        brand: "Gucci",
        price: 8900000,
        oldPrice: 10500000,
        image: "images/atr3.jpeg",
        description: "ادوپarfum زنانه"
    },
    {
        id: 15,
        name: "سرم ویتامین C Garnier",
        brand: "Garnier",
        price: 1450000,
        oldPrice: null,
        image: "images/IMG_1020.jpeg",
        description: "سرم روشن‌کننده"
    },
    {
        id: 16,
        name: "پالت سایه Huda Beauty",
        brand: "Huda Beauty",
        price: 5250000,
        oldPrice: 6550000,
        image: "images/26.jpeg",
        description: "پالت سایه ۱۸ رنگ"
    },
    {
        id: 17,
        name: "اسپری بدن Victoria's Secret",
        brand: "Victoria's Secret",
        price: 2150000,
        oldPrice: null,
        image: "images/atr7.jpeg",
        description: "اسپری خوشبوکننده بدن"
    },
    {
        id: 18,
        name: "ماسک مو Olaplex No.3",
        brand: "Olaplex",
        price: 3950000,
        oldPrice: 5300000,
        image: "images/care16.jpeg",
        description: "ماسک بازسازی مو"
    },
    {
        id: 19,
        name: "کرم دور چشم Clinique",
        brand: "Clinique",
        price: 2890000,
        oldPrice: null,
        image: "images/care7.jpeg",
        description: "کرم ضد چروک دور چشم"
    },
    {
        id: 20,
        name: "رژ لب Charlotte Tilbury",
        brand: "Charlotte Tilbury",
        price: 3650000,
        oldPrice: 5200000,
        image: "images/buti15.jpeg",
        description: "رژ لب مات Pillow Talk"
    },
    {
        id: 21,
        name: "پرایمر Benefit POREfessional",
        brand: "Benefit",
        price: 3290000,
        oldPrice: null,
        image: "images/buti8.jpeg",
        description: "پرایمر مات‌کننده"
    },
    {
        id: 22,
        name: "کرم ضد آفتاب Beauty of Joseon",
        brand: "Beauty of Joseon",
        price: 1840000,
        oldPrice: 2300000,
        image: "images/buti5.jpeg",
        description: "ضد آفتاب SPF50"
    },
    {
        id: 23,
        name: "میسلار واتر Bioderma",
        brand: "Bioderma",
        price: 1350000,
        oldPrice: null,
        image: "images/care3.jpeg",
        description: "پاک‌کننده آرایش"
    },
    {
        id: 24,
        name: "ریمل Lancôme Hypnôse",
        brand: "Lancôme",
        price: 3850000,
        oldPrice: 4700000,
        image: "images/buti24.jpeg",
        description: "ریمل حجم‌دهنده"
    },
    {
        id: 25,
        name: "کرم مرطوب‌کننده Nivea Soft",
        brand: "Nivea",
        price: 890000,
        oldPrice: null,
        image: "images/atr4.jpeg",
        description: "کرم مرطوب‌کننده سبک"
    },
    {
        id: 26,
        name: "رژ لب MAC Velvet Teddy",
        brand: "MAC",
        price: 2990000,
        oldPrice: 3850000,
        image: "images/buti26.jpeg",
        description: "رژ لب مات مخملی"
    },
    {
        id: 27,
        name: "سرم هیالورونیک اسید Vichy",
        brand: "Vichy",
        price: 2250000,
        oldPrice: null,
        image: "images/care16.jpeg",
        description: "سرم آبرسان عمیق"
    },
    {
        id: 28,
        name: "عطر Yves Saint Laurent Libre",
        brand: "YSL",
        price: 9990000,
        oldPrice: 11750000,
        image: "images/atr4.jpeg",
        description: "ادوپarfum زنانه"
    },
    {
        id: 29,
        name: "ماسک لب Laneige",
        brand: "Laneige",
        price: 1990000,
        oldPrice: null,
        image: "images/care17.jpeg",
        description: "ماسک لب شبانه"
    },
    {
        id: 30,
        name: "پالت سایه Anastasia Beverly Hills",
        brand: "Anastasia Beverly Hills",
        price: 4990000,
        oldPrice: 8300000,
        image: "images/buti8.jpeg",
        description: "پالت سایه ۱۴ رنگ"
    }
];
