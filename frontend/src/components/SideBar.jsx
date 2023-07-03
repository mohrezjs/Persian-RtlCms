import React, { useContext } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { FaSun } from "react-icons/fa";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { BsBagCheck, BsMoonStarsFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { contextData } from "../contexts/ContextData";

const SideBar = () => {
    const isDark = useContext(contextData);

    return (
        <div className={`${isDark.isDarkMode ? "dark" : null}`}>
            <div
                className="dark:bg-darkCard dark:text-darkText bg-lightCard text-lightText lg:w-[15rem] h-[100vh] sticky top-0
             sm:w-14 w-10 pt-4 transition-all duration-200"
            >
                <h1 className="font-yekanMed font-semibold text-[1.4rem] p-4 border-b-2 dark:text-darkBlue text-lightPurple text-center text-lithPurple lg:block hidden text-3xl mx-auto  transition-all duration-200">
                    داشبورد ادمین
                </h1>
                <ul className="lg:mt-7 mt-0 ">
                    <NavLink
                        to={"/"}
                        className={(isActive) => [
                            `${
                                isActive.isActive && isDark.isDarkMode
                                    ? "activeDark"
                                    : isActive.isActive && isDark.isDarkMode === false
                                    ? "activeLight"
                                    : null
                            }
                            transition-all duration-200 lg:w-[95%] lg:rounded-e-full dark:hover:text-darkBlue hover:text-lightPurple dark:hover:bg-darkBack hover:bg-lightPurple2 hover:border-lightPurple lg:hover:border-r-[5px] dark:hover:border-darkBlue py-7 cursor-pointer lg:justify-start sm:px-4 h-12 flex items-center justify-center`,
                        ]}
                    >
                        <div className="w-fit list-none lg:flex justify-start items-center ">
                            <AiOutlineHome className="lg:me-3" />

                            <span className="ml-3 hidden lg:block font-semibold tracking-wide transition-colors">
                                صفحه ی اصلی
                            </span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/products"}
                        className={(isActive) => [
                            `${
                                isActive.isActive && isDark.isDarkMode
                                    ? "activeDark"
                                    : isActive.isActive && isDark.isDarkMode === false
                                    ? "activeLight"
                                    : null
                            }
                            transition-all duration-200 lg:w-[95%] lg:rounded-e-full dark:hover:text-darkBlue hover:text-lightPurple dark:hover:bg-darkBack hover:bg-lightPurple2 hover:border-lightPurple lg:hover:border-r-[5px] dark:hover:border-darkBlue py-7 cursor-pointer lg:justify-start sm:px-4 h-12 flex items-center justify-center`,
                        ]}
                    >
                        <div className="w-fit list-none lg:flex justify-start items-center ">
                            <AiOutlineShoppingCart className="lg:me-3" />

                            <span className="ml-3 hidden lg:block font-semibold tracking-wide transition-colors">
                                محصولات
                            </span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/comments"}
                        className={(isActive) => [
                            `${
                                isActive.isActive && isDark.isDarkMode
                                    ? "activeDark"
                                    : isActive.isActive && isDark.isDarkMode === false
                                    ? "activeLight"
                                    : null
                            }
                            transition-all duration-200 lg:w-[95%] lg:rounded-e-full dark:hover:text-darkBlue hover:text-lightPurple dark:hover:bg-darkBack hover:bg-lightPurple2 hover:border-lightPurple lg:hover:border-r-[5px] dark:hover:border-darkBlue py-7 cursor-pointer lg:justify-start sm:px-4 h-12 flex items-center justify-center`,
                        ]}
                    >
                        <div className="w-fit list-none lg:flex justify-start items-center ">
                            <FaRegCommentDots className="lg:me-3" />

                            <span className="ml-3 hidden lg:block font-semibold tracking-wide transition-colors">
                                کامنت ها
                            </span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/users"}
                        className={(isActive) => [
                            `${
                                isActive.isActive && isDark.isDarkMode
                                    ? "activeDark"
                                    : isActive.isActive && isDark.isDarkMode === false
                                    ? "activeLight"
                                    : null
                            }
                            transition-all duration-200 lg:w-[95%] lg:rounded-e-full dark:hover:text-darkBlue hover:text-lightPurple dark:hover:bg-darkBack hover:bg-lightPurple2 hover:border-lightPurple lg:hover:border-r-[5px] dark:hover:border-darkBlue py-7 cursor-pointer lg:justify-start sm:px-4 h-12 flex items-center justify-center`,
                        ]}
                    >
                        <div className="w-fit list-none lg:flex justify-start items-center ">
                            <FiUsers className="lg:me-3" />

                            <span className="ml-3 hidden lg:block font-semibold tracking-wide transition-colors">
                                کاربران
                            </span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/orders"}
                        className={(isActive) => [
                            `${
                                isActive.isActive && isDark.isDarkMode
                                    ? "activeDark"
                                    : isActive.isActive && isDark.isDarkMode === false
                                    ? "activeLight"
                                    : null
                            }
                            transition-all duration-200 lg:w-[95%] lg:rounded-e-full dark:hover:text-darkBlue hover:text-lightPurple dark:hover:bg-darkBack hover:bg-lightPurple2 hover:border-lightPurple lg:hover:border-r-[5px] dark:hover:border-darkBlue py-7 cursor-pointer lg:justify-start sm:px-4 h-12 flex items-center justify-center`,
                        ]}
                    >
                        <div className="w-fit list-none lg:flex justify-start items-center ">
                            <BsBagCheck className="lg:me-3" />

                            <span className="ml-3 hidden lg:block font-semibold tracking-wide transition-colors">
                                سفارشات
                            </span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/offs"}
                        className={(isActive) => [
                            `${
                                isActive.isActive && isDark.isDarkMode === true
                                    ? "activeDark"
                                    : isActive.isActive && isDark.isDarkMode === false
                                    ? "activeLight"
                                    : null
                            }
                            transition-all duration-200 lg:w-[95%] lg:rounded-e-full dark:hover:text-darkBlue hover:text-lightPurple dark:hover:bg-darkBack hover:bg-lightPurple2 hover:border-lightPurple lg:hover:border-r-[5px] dark:hover:border-darkBlue py-7 cursor-pointer lg:justify-start sm:px-4 h-12 flex items-center justify-center`,
                        ]}
                    >
                        <div className="w-fit list-none lg:flex justify-start items-center ">
                            <TbDiscount2 className="lg:me-3" />

                            <span className="ml-3 hidden lg:block font-semibold tracking-wide transition-colors">
                                تخفیف ها
                            </span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/notification"}
                        className={(isActive) => [
                            `${
                                isActive.isActive && isDark.isDarkMode === true
                                    ? "activeDark"
                                    : isActive.isActive && isDark.isDarkMode === false
                                    ? "activeLight"
                                    : null
                            }
                        transition-all duration-200 lg:w-[95%] lg:rounded-e-full dark:hover:text-darkBlue dark:hover:bg-darkBack lg:hover:border-r-[5px] dark:hover:border-darkBlue py-7 hover:text-lightPurple hover:bg-lightPurple2 hover:border-lightPurple cursor-pointer lg:justify-start sm:px-4 h-12 flex items-center justify-center md:hidden`,
                        ]}
                    >
                        <div className="w-fit list-none lg:flex justify-start items-center ">
                            <IoNotifications className="md:me-3 lg:hidden block" />
                        </div>
                    </NavLink>

                    <li
                        className="md:hidden flex transition-all duration-200 lg:w-[95%] lg:rounded-e-full lg:hover:border-r-[5px]  py-7 cursor-pointer lg:justify-start px-4 h-12  items-center justify-center lg:hidden"
                        onClick={() => {
                            isDark.setIsDarkMode((prevMode) => !prevMode);
                        }}
                    >
                        <div className="w-fit list-none lg:flex justify-start items-center">
                            {isDark.isDarkMode ? (
                                <FaSun className="md:me-3  text-amber-500" />
                            ) : (
                                <BsMoonStarsFill className="md:me-3  text-yellow-400" />
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
