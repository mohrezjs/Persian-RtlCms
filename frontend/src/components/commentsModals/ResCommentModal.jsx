import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { contextData } from "../../contexts/ContextData";

const ResCommentModal = ({ closeAction, sendAction }) => {
    const [message, setMessage] = useState("");

    const isDark = useContext(contextData);

    return ReactDOM.createPortal(
        <>
            {/* modal container*/}
            <div className={`${isDark.isDarkMode ? "dark" : null}`}>
                <div className="w-full h-full bg-gray-950 bg-opacity-70 flex items-center justify-center z-20 fixed ">
                    <div className="mx-auto border-2 dark:border-darkBlue border-lightPurple dark:bg-darkCard bg-lightCard px-3 py-2 flex flex-col items-center justify-center rounded-xl text-base sm:text-2xl lg:text-2xl">
                        <button
                            className="text-base flex justify-end items-center w-full mt-3"
                            onClick={() => closeAction()}
                        >
                            ❌
                        </button>
                        <h3 className="font-semibold dark:text-sky-500 text-lightPurple">
                            به کامنت این کاربر پاسخ دهید
                        </h3>

                        <form className="font-yekanReg w-auto text-base sm:text-2xl lg:text-2xl">
                            <div className="flex flex-col  lg:p-5 p-2 dark:bg-darkCard bg-lightCard w-full mt-8 rounded-xl ">
                                <div className="lg:flex flex-col items-center justify-center">
                                    <div className="flex-col mx-auto items-center justify-center">
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 w-full mb-4 rounded-lg mx-auto">
                                            <textarea
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center p-3"
                                                style={{ margin: 0 }}
                                                cols="25"
                                                rows="6"
                                                placeholder="پاسخ شما به این کامنت"
                                                onChange={(event) => setMessage(event.target.value)}
                                                alt={message}
                                                value={message}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="lg:mt-2 mt-4 flex items-center lg:justify-end justify-center">
                                        <Button
                                            text={"ثبت اطلاعات جدید"}
                                            btnAction={() => sendAction()}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("modals-parent")
    );
};

export default ResCommentModal;
