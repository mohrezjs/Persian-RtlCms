import React from "react";
import { dataCard } from "../DataFile";


const InfoCard = () => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pb-4 lg:pb-5 mt-4">
            {dataCard.map((card) => (
                <div className={["flex items-center justify-around text-darkText  lg:p-4 xl:p-6 rounded-[0.6rem]", card.bg].join(" ")} key={card.id}>
                    <div className="text-[5rem] w-full p-3 lg:p-0">{card.icon && <card.icon />}</div>
                    <div className="flex flex-col text-2xl w-full">
                        <div  className="text-lightBack font-bold text-base sm:text-2xl lg:text-2xl">{card.title}</div>
                        <div className="font-bold text-base sm:text-2xl lg:text-2xl">{card.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoCard;
