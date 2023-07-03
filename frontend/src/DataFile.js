import { FaChartLine } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";

let xAxisData = [
    {
        name: "اسفند",
        sale: 100_000,
    },

    {
        name: "بهمن",
        sale: 99_000,
    },

    {
        name: "دی",
        sale: 103_000,
    },

    {
        name: "آذر",
        sale: 63_450,
    },

    {
        name: "آبان",
        sale: 76_000,
    },

    {
        name: "مهر",
        sale: 83_000,
    },

    {
        name: "شهریور",
        sale: 120_000,
    },

    {
        name: "مرداد",
        sale: 82_480,
    },

    {
        name: "تیر",
        sale: 56_300,
    },

    {
        name: "خرداد",
        sale: 66_420,
    },

    {
        name: "اردیبهشت",
        sale: 107_220,
    },

    {
        name: "فروردین",
        sale: 51_380,
    },
];

let dataCard = [
    {
        icon: FaChartLine,
        title: "فروش امروز",
        price: "1,200,000 تومان",
        bg: "bg-gradient-to-r from-[#2fbfc7] via-[#237ca6] to-[#25314b] ",
        id: 1,
    },
    {
        icon: FaChartBar,
        title: "کل فروش",
        price: "2,000,000 تومان",
        bg: "bg-gradient-to-r from-[#ea7e61] via-[#b85b78] to-[#25314b] ",
        id: 2,
    },
    {
        icon: FaChartArea,
        title: "درآمد امروز",
        price: "1,400,00 تومان",
        bg: "bg-gradient-to-r from-[#ffb805] via-[#df8546] to-[#25314b] ",
        id: 3,
    },
    {
        icon: FaChartPie,
        title: "کل درآمدها",
        price: "2,500,000 تومان",
        bg: "bg-gradient-to-r from-[#7a7bff] via-[#a858f5] to-[#25314b] ",
        id: 4,
    },
];

export { xAxisData, dataCard };
