import React, { useEffect } from "react";
import { useContext } from "react";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { contextData } from "../contexts/ContextData";
import { Link } from "react-router-dom";

const TopBar = () => {
    const isDark = useContext(contextData);

    return (
        <div className={`${isDark.isDarkMode ? "dark" : null}`}>
            <div className="flex items-center transition-all duration-200">
                <div className="w-full flex items-center justify-between">
                    {/* admin section */}
                    <div className="flex justify-around items-center">
                        {/* admin image */}
                        <div>
                            <img
                                src="/img/me.jpg"
                                alt=""
                                className="md:w-[65px] sm:w-[55px] w-[50px] rounded-full me-4"
                            />
                        </div>

                        {/* admin name */}
                        <div className="flex flex-col items-start ">
                            <span className="font-yekanMed font-[600] md:text-xl  sm:text-lg text-base dark:text-darkText text-lightText transition-all duration-200">
                                محمدرضا خیرآبادی
                            </span>
                            <span className="font-yekanLight lg:text-lg sm:text-base text-sm dark:text-darkText text-lightText transition-all duration-200">
                                برنامه نویس فرانت اند
                            </span>
                        </div>
                    </div>

                    {/* search box and icons */}
                    <div className="sm:flex items-center hidden ">
                        {/* search bar  */}
                        <div className="dark:bg-darkCard bg-lightCard flex items-center  py-2  rounded-s-2xl rounded-e-2xl px-4 text-xl transition-all duration-200">
                            <input
                                type="text"
                                className="outline-none bg-transparent block"
                                placeholder="جست و جو کنید ..."
                            />
                            <button
                                className="pt-3 px-2 p-1 dark:bg-darkBlue bg-lightPurple transition-all duration-200 bg-opacity-50 hover rounded-full 
                        
                        
                        hover:bg-darkBlue hover:bg-opacity-80 "
                            >
                                🔎
                            </button>
                        </div>

                        <div
                            className="md:block hidden dark:bg-darkCard bg-lightCard border-2 dark:border-darkBlue border-lightPurple dark:hover:bg-darkBlue hover:bg-lightPurple hover:bg-opacity-40 dark:hover:border-darkText hover:border-lightText  rounded-full ms-4 p-[12px] cursor-pointer transition-all duration-200"
                            onClick={() => {
                                isDark.setIsDarkMode((prevDark) => !prevDark);
                            }}
                        >
                            {isDark.isDarkMode ? (
                                <FaSun className="text-amber-500 text-[28px]" />
                            ) : (
                                <BsMoonStarsFill className="text-yellow-400 text-[28px]" />
                            )}
                        </div>

                        <div className="md:block hidden">
                            <Link to={"/notification"}>
                                <button className="pt-3 px-[0.6rem] p-1  border-2 dark:bg-darkCard bg-lightCard dark:border-darkBlue border-lightPurple dark:hover:bg-darkBlue hover:bg-lightPurple hover:bg-opacity-40 dark:hover:border-darkText hover:border-lightText rounded-full ms-4 transition-all duration-200">
                                    🔔
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
