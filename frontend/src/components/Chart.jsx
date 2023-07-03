import React, { useContext } from "react";
import { contextData } from "../contexts/ContextData";
import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey }) => {
    //

    const isDark = useContext(contextData);

    return (
        <div className={`${isDark.isDarkMode ? "dark" : null}  w-[99.9%] mx-auto`}>
            <div className="transition-all duration-200 bg-lightCard dark:bg-darkCard rounded-[0.6rem] text-base sm:text-2xl lg:text-xl ">
                <h3 className="transition-all duration-200 dark:text-darkText text-xl pt-3 ps-7 text-[#6625ff] font-bold">
                    {title}
                </h3>
                <div className="md:p-5 p-0 text-lightText" dir="ltr">
                    <ResponsiveContainer aspect={4}>
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="saleId" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor={isDark.isDarkMode ? "#0da6ff" : "#6625ff"}
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor={isDark.isDarkMode ? "#0da6ff" : "#6625ff"}
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>
                            <CartesianGrid
                                stroke={isDark.isDarkMode ? "#ccc" : "#6625ff"}
                                strokeDasharray="5 5"
                            />
                                <YAxis
                                    dataKey="sale"
                                    stroke={isDark.isDarkMode ? "#ccc" : "#6625ff"}
                                    width={70}
                                />
                            <XAxis
                                dataKey="name"
                                stroke={isDark.isDarkMode ? "#ccc" : "#6625ff"}
                                width={70}
                            />
                            <Area
                                type="monotone"
                                dataKey={dataKey}
                                stroke={isDark.isDarkMode ? "#0da6ff" : "#6625ff"}
                                fillOpacity={1}
                                fill="url(#saleId)"
                            />
                            <Tooltip />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Chart;
