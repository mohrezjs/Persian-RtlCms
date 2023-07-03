import React from "react";

const ErrorBox = ({ msg }) => {
    return (
        <div className="mt-10 bg-[#ff969d] text-[#79000c] lg:w-[80%] w-full lg:p-3 p-1 lg:text-3xl md:text-xl text-base font-semibold text-center mx-auto rounded-lg">
            <h1>{msg}</h1>
        </div>
    );
};

export default ErrorBox;
