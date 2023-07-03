import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { contextData } from "../../contexts/ContextData";

const DetailModal = ({ closeAction, data }) => {
    const popularity = data.popularity;

    const isDark = useContext(contextData);

    return ReactDOM.createPortal(
        <>
            {/* modal container*/}
            <div className={`${isDark.isDarkMode ? "dark" : null}`}>
                <div className="w-full h-full bg-gray-950 bg-opacity-70 flex items-center justify-center z-20 fixed ">
                    <div className="mx-auto border-2 dark:border-darkBlue border-lightPurple dark:bg-darkCard bg-lightCard  px-8 py-7 flex flex-col items-center justify-center rounded-xl text-base sm:text-2xl lg:text-2xl">
                        <button
                            className="text-base flex justify-end items-center w-full"
                            onClick={() => closeAction()}
                        >
                            ❌
                        </button>
                        <h3 className="font-semibold dark:text-sky-500 text-lightPurple ">جزئیات</h3>
                        <div className="flex items-center justify-evenly mt-4">
                            <table className=" leading-normal w-full text-base lg:text-2xl text-center">
                                <thead className="font-semibold">
                                    <tr>
                                        <th className="p-3 border-b-2  font-semibold  uppercase tracking-wider dark:text-darkText text-lightText">
                                            اسم
                                        </th>
                                        <th className="p-3 border-b-2  font-semibold  uppercase tracking-wider dark:text-darkText text-lightText">
                                            قیمت
                                        </th>
                                        <th className="p-3 border-b-2  font-semibold  uppercase tracking-wider dark:text-darkText text-lightText">
                                            محبوبیت
                                        </th>
                                        <th className="p-3 border-b-2  font-semibold  uppercase tracking-wider dark:text-darkText text-lightText">
                                            رنگ بندی
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-base lg:text-2xl">
                                    <tr>
                                        <td className="p-2">
                                            <p className="whitespace-no-wrap dark:text-darkText text-lightText">{data.title}</p>
                                        </td>
                                        <td className="p-2">
                                            <p className="whitespace-no-wrap dark:text-darkText text-lightText">{data.price} تومان</p>
                                        </td>
                                        <td className="p-2">
                                            <p
                                                className={`whitespace-no-wrap ${
                                                    popularity > 50
                                                        ? "text-green-400"
                                                        : popularity < 50
                                                        ? "text-rose-700"
                                                        : null
                                                }`}
                                            >
                                                {data.popularity}%
                                            </p>
                                        </td>
                                        <td className="p-2">
                                            <p className="whitespace-no-wrap dark:text-darkText text-lightText">{data.colors}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("modals-parent")
    );
};

export default DetailModal;
