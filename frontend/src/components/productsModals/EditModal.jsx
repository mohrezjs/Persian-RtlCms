import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { FaPen } from "react-icons/fa";
import { MdOutlineInventory } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbCurrencyDollar } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { BsStarFill, BsCardImage } from "react-icons/bs";
import { contextData } from "../../contexts/ContextData";

const EditModal = ({ data, closeAction, sendAction }) => {
    const [productNewTitle, setProductNewTitle] = useState(data.title);
    const [productNewPrice, setProductNewPrice] = useState(data.price);
    const [productNewCount, setProductNewCount] = useState(data.count);
    const [productNewImg, setProductNewImg] = useState(data.img);
    const [productNewPopularity, setProductNewPopularity] = useState(data.popularity);
    const [productNewSale, setProductNewSale] = useState(data.sale);
    const [productNewColors, setProductNewColors] = useState(data.colors);

    const changedProductData = {
        title: productNewTitle,
        price: productNewPrice,
        count: productNewCount,
        img: productNewImg,
        popularity: productNewPopularity,
        sale: productNewSale,
        colors: productNewColors,
    };

    const isDark = useContext(contextData);

    return ReactDOM.createPortal(
        <>
            {/* modal container*/}
            <div className={`${isDark.isDarkMode ? "dark" : null}`}>
                <div className="w-full h-full bg-gray-950 bg-opacity-70 flex items-center justify-center z-20 fixed ">
                    <div className="mx-auto border-2 dark:bg-darkCard bg-lightCard px-3 py-2 flex flex-col items-center justify-center rounded-xl text-base sm:text-2xl lg:text-2xl dark:border-darkBlue border-lightPurple">
                        <button
                            className="text-base flex justify-end items-center w-full mt-3"
                            onClick={() => closeAction()}
                        >
                            ❌
                        </button>
                        <h3 className="font-semibold dark:text-darkBlue text-lightPurple">اطلاعات جدید را وارد کنید</h3>

                        <form className="font-yekanReg w-auto text-base sm:text-2xl lg:text-2xl">
                            <div className="flex flex-col  lg:p-5 p-2 dark:bg-darkCard bg-lightCard w-full mt-8 rounded-xl ">
                                <div className="lg:flex flex-col lg:flex-row">
                                    <div className="flex-col mx-auto items-center justify-center">
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto ">
                                            <span>
                                                <FaPen className="me-3 dark:text-darkBlue text-lightPurple " />
                                            </span>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="عنوان  جدید"
                                                value={productNewTitle}
                                                onChange={(event) =>
                                                    setProductNewTitle(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto ">
                                            <span>
                                                <TbCurrencyDollar className="me-3 dark:text-darkBlue text-lightPurple " />
                                            </span>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="مبلغ  جدید"
                                                value={productNewPrice}
                                                onChange={(event) =>
                                                    setProductNewPrice(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto ">
                                            <span>
                                                <MdOutlineInventory className="me-3 dark:text-darkBlue text-lightPurple " />
                                            </span>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="موجودی  جدید"
                                                value={productNewCount}
                                                onChange={(event) =>
                                                    setProductNewCount(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto ">
                                            <span>
                                                <BsCardImage className="me-3 dark:text-darkBlue text-lightPurple " />
                                            </span>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="عکس  جدید"
                                                value={productNewImg}
                                                onChange={(event) =>
                                                    setProductNewImg(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto ">
                                            <span>
                                                <BsStarFill className="me-3 dark:text-darkBlue text-lightPurple " />
                                            </span>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="محبوبیت  جدید"
                                                value={productNewPopularity}
                                                onChange={(event) =>
                                                    setProductNewPopularity(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto ">
                                            <span>
                                                <HiShoppingCart className="me-3 dark:text-darkBlue text-lightPurple " />
                                            </span>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="میزان فروش جدید"
                                                value={productNewSale}
                                                onChange={(event) =>
                                                    setProductNewSale(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto ">
                                            <span>
                                                <IoColorPaletteOutline className="me-3 dark:text-darkBlue text-lightPurple " />
                                            </span>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder=" تعداد رنگ جدید"
                                                value={productNewColors}
                                                onChange={(event) =>
                                                    setProductNewColors(event.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:mt-2 mt-4 flex items-center lg:justify-end justify-center ">
                                    <Button
                                        btnAction={() => {
                                            sendAction(changedProductData);
                                        }}
                                        text={"ثبت اطلاعات جدید"}
                                        addClass={"dark:text-white text-black"}
                                    />
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

export default EditModal;
