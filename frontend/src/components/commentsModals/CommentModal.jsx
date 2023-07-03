import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { contextData } from "../../contexts/ContextData";

const CommentModal = ({ closeAction, commentBody }) => {
    const isDark = useContext(contextData);

    return ReactDOM.createPortal(
        <>
            {/* modal container*/}
            <div className={`${isDark.isDarkMode ? "dark" : null}`}>
                <div className="w-full h-full bg-gray-950 bg-opacity-70 flex items-center justify-center z-20 fixed">
                    <div className="mx-auto border-2 dark:border-darkBlue border-lightPurple dark:bg-darkCard bg-lightCard px-8 py-7 flex flex-col items-center justify-center rounded-xl text-base sm:text-xl lg:text-2xl my-2 sm:my-3 md:my-5 lg:mx-16 w-[70%] md:w-[80%]">
                        <button
                            className="text-base flex justify-end items-center w-full"
                            onClick={() => closeAction()}
                        >
                            ❌
                        </button>
                        <h3 className="font-semibold text-sky-500">متن کامنت</h3>
                        <div className="flex items-center justify-evenly mt-4 text-center dark:text-darkText text-lightText">
                            {commentBody}
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("modals-parent")
    );
};

export default CommentModal;
