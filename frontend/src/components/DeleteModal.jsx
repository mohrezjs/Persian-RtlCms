import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { contextData } from "../contexts/ContextData";

const DeleteModal = ({ submitAction, cancelAction }) => {
    const isDark = useContext(contextData);

    return ReactDOM.createPortal(
        <>
            {/* modal container*/}
            <div className={`${isDark.isDarkMode ? "dark" : null}`}>
                <div className="w-full h-full bg-gray-950 bg-opacity-70 flex items-center justify-center z-20 fixed ">
                    <div className="mx-auto border-2 font-semibold dark:bg-darkCard   bg-lightCard darK:border-darkBlue dark:text-darkText text-lightText  border-lightPurple dark:border-darkBlue px-8 py-7 flex flex-col items-center justify-center rounded-xl text-base sm:text-2xl lg:text-2xl">
                        <h3 className="text-5xl">⛔</h3>
                        <h3 className="md:mt-8 mt-4">آیا از حذف اطمینان دارید؟</h3>
                        <div className="flex items-center justify-evenly mt-4">
                            <Button
                                text={"بله"}
                                addClass={
                                    "dark:bg-lime-600 bg-lime-600 dark:hover:bg-lime-500 hover:bg-lime-500 border-white mx-4 text-white"
                                }
                                btnAction={submitAction}
                            />
                            <Button
                                text={"خیر"}
                                addClass={
                                    "dark:bg-rose-500 bg-rose-500  dark:hover:bg-rose-700 hover:bg-rose-700 border-white mx-4 text-white"
                                }
                                btnAction={cancelAction}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("modals-parent")
    );
};

export default DeleteModal;
