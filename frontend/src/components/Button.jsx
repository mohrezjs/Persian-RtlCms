import React from "react";

const Button = ({ text, addClass, btnAction }) => {
    return (
        <>
            <button
                className={`dark:bg-darkBack  dark:text-darkText text-lightText md:py-3 md:px-4 py-2 px-3 rounded-lg border-2 dark:border-darkBlue border-lightPurple dark:hover:bg-darkBlue hover:bg-lightPurple hover:text-lightCard duration-200 transition-all hover:bg-opacity-70 hover:border-white text-base sm:text-2xl lg:text-2x lg:me-4 ${addClass}`}
                onClick={(event) => {
                    event.preventDefault();
                    btnAction();
                }}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
