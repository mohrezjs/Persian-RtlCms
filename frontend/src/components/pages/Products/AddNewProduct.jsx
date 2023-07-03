import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../Button";
import { FaPen } from "react-icons/fa";
import { MdOutlineInventory } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbCurrencyDollar } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { BsStarFill, BsCardImage } from "react-icons/bs";
import axios from "axios";

const AddNewProduct = ({ updateAllProducts }) => {
    // make  a random number for id
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateUniqueRandomNumbers = (count, min, max) => {
        var numbers = [];
        while (numbers.length < count) {
            var randomNumber = generateRandomNumber(min, max);
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    };

    const [productTitle, setProductTitle] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCount, setProductCount] = useState("");
    const [productImg, setProductImg] = useState("");
    const [productPopularity, setProductPopularity] = useState("");
    const [productSale, setProductSale] = useState("");
    const [productColors, setProductColors] = useState("");
    const [productId, setProductId] = useState(generateUniqueRandomNumbers(1, 10, 1000));

    const defaultToast = (msg) =>
        toast(`🚀! ${msg}`, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            className : "w-[26rem]"
        });

    const errorToast = (msgError) =>
        toast.error(`! ${msgError}`, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            className : "w-[26rem]"
        });

    const addNewProduct = () => {
        const makeNewProduct = {
            id: productId,
            title: productTitle,
            price: productPrice,
            count: productCount,
            img: productImg,
            popularity: productPopularity,
            sale: productSale,
            colors: productColors,
        };

        const makeEmptyVar = () => {
            setProductTitle("");
            setProductPrice("");
            setProductCount("");
            setProductImg("");
            setProductPopularity("");
            setProductSale("");
            setProductColors("");
        };

        axios
            .post("http://localhost:8000/api/products/", makeNewProduct)
            .then((response) => {
                defaultToast("محصول با موفقیت اضافه شد");
                setProductId(generateUniqueRandomNumbers(1, 10, 1000));
                makeEmptyVar();
                updateAllProducts();
            })
            .catch((error) => {
                errorToast("افزودن محصول با خطا مواجه شد");
            });
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold transition-all duration-200 dark:text-darkText text-lightText">
                افزودن محصول جدید
            </h2>
            <form action="#" className="font-yekanReg w-auto text-base sm:text-2xl lg:text-2xl">
                <div className="flex flex-col  lg:p-5 p-2 dark:bg-darkCard bg-lightCard w-full mt-8 rounded-xl transition-all duration-200">
                    <div className="lg:flex flex-col lg:flex-row">
                        <div className="flex-col lg:w-[50%] mx-auto items-center justify-center">
                            <div className="flex items-center lg:px-3 px-1 dark:bg-darkBack bg-lightBack transition-all duration-200 d p-0 h-12 md:w-[95%] w-full mb-4 rounded-lg mx-auto">
                                <span>
                                    <FaPen className="me-3 dark:text-darkBlue text-lightPurple duration-200 transition-all" />
                                </span>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="outline-none my-4 rounded-lg w-full bg-inherit items-center dark:bg-darkBack bg-lightBack transition-all duration-200 dark:text-darkText text-lightText"
                                    style={{ margin: 0 }}
                                    placeholder="اسم محصول"
                                    value={productTitle}
                                    onChange={(event) => setProductTitle(event.target.value)}
                                />
                            </div>
                            <div className="flex items-center lg:px-3 px-1 dark:bg-darkBack bg-lightBack transition-all duration-200  p-0 h-12 md:w-[95%] w-full mb-4 rounded-lg mx-auto">
                                <span>
                                    <MdOutlineInventory className="me-3 dark:text-darkBlue text-lightPurple duration-200 transition-all" />
                                </span>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="outline-none my-4 rounded-lg w-full bg-inherit items-center dark:bg-darkBack bg-lightBack transition-all duration-200 dark:text-darkText text-lightText "
                                    style={{ margin: 0 }}
                                    placeholder="موجودی محصول"
                                    value={productCount}
                                    onChange={(event) => setProductCount(event.target.value)}
                                />
                            </div>
                            <div className="flex items-center lg:px-3 px-1 dark:bg-darkBack bg-lightBack transition-all duration-200 p-0 h-12 md:w-[95%] w-full mb-4 rounded-lg mx-auto">
                                <span>
                                    <BsStarFill className="me-3 dark:text-darkBlue text-lightPurple duration-200 transition-all" />
                                </span>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="outline-none my-4 rounded-lg w-full bg-inherit items-center dark:bg-darkBack bg-lightBack transition-all duration-200 dark:text-darkText text-lightText "
                                    style={{ margin: 0 }}
                                    placeholder="میزان محبوبیت محصول"
                                    value={productPopularity}
                                    onChange={(event) => setProductPopularity(event.target.value)}
                                />
                            </div>
                            <div className="flex items-center lg:px-3 px-1 dark:bg-darkBack bg-lightBack transition-all duration-200 p-0 h-12 md:w-[95%] w-full  rounded-lg mx-auto">
                                <span>
                                    <IoColorPaletteOutline className="me-3 dark:text-darkBlue text-lightPurple duration-200 transition-all" />
                                </span>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="outline-none my-4 rounded-lg w-full bg-inherit items-center dark:bg-darkBack bg-lightBack transition-all duration-200 dark:text-darkText text-lightText "
                                    style={{ margin: 0 }}
                                    placeholder="تعداد رنگ بندی محصول"
                                    value={productColors}
                                    onChange={(event) => setProductColors(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex-col lg:w-[50%] mx-auto lg:mt-0 mt-4 ">
                            <div className="flex items-center lg:px-3 px-1 dark:bg-darkBack bg-lightBack transition-all duration-200 p-0 h-12 md:w-[95%] w-full mb-4 rounded-lg mx-auto">
                                <span>
                                    <TbCurrencyDollar className="me-3 dark:text-darkBlue text-lightPurple duration-200 transition-all" />
                                </span>
                                <input
                                    type="text"
                                    className="outline-none my-4 rounded-lg w-full bg-inherit items-center dark:bg-darkBack bg-lightBack transition-all duration-200 dark:text-darkText text-lightText "
                                    style={{ margin: 0 }}
                                    placeholder="قیمت محصول"
                                    value={productPrice}
                                    onChange={(event) => setProductPrice(event.target.value)}
                                />
                            </div>
                            <div className="flex items-center lg:px-3 px-1 dark:bg-darkBack bg-lightBack transition-all duration-200 p-0 h-12 md:w-[95%] w-full mb-4 rounded-lg mx-auto">
                                <span>
                                    <BsCardImage className="me-3 dark:text-darkBlue text-lightPurple duration-200 transition-all" />
                                </span>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="outline-none my-4 rounded-lg w-full bg-inherit items-center dark:bg-darkBack bg-lightBack transition-all duration-200 dark:text-darkText text-lightText "
                                    style={{ margin: 0 }}
                                    placeholder="آدرس عکس محصول"
                                    value={productImg}
                                    onChange={(event) => setProductImg(event.target.value)}
                                />
                            </div>
                            <div className="flex items-center lg:px-3 px-1 dark:bg-darkBack bg-lightBack transition-all duration-200 p-0 h-12 md:w-[95%] w-full  rounded-lg mx-auto">
                                <span>
                                    <HiShoppingCart className="me-3 dark:text-darkBlue text-lightPurple duration-200 transition-all" />
                                </span>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="outline-none my-4 rounded-lg w-full bg-inherit items-center dark:bg-darkBack bg-lightBack transition-all duration-200 dark:text-darkText text-lightText "
                                    style={{ margin: 0 }}
                                    placeholder="میزان فروش محصول"
                                    value={productSale}
                                    onChange={(event) => setProductSale(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-2 mt-4 flex items-center lg:justify-end justify-center">
                        <Button text={"ثبت محصول"} btnAction={addNewProduct} />
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddNewProduct;
