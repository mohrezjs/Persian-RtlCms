import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBox from "../../ErrorBox";
import axios from "axios";
import DeleteModal from "../../DeleteModal";
import DetailModal from "../../productsModals/DetailModal";
import EditModal from "../../productsModals/EditModal";
import Button from "../../Button";

const ProductsTable = ({ productsData, getProductsData }) => {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

    const [isShowDetailModal, setIsShowDetailModal] = useState(false);

    const [isShowEditModal, setIsShowEditModal] = useState(false);

    const [productID, setProductID] = useState(null);

    const [productDetails, setProductDetails] = useState([]);

    const successToast = (msg) =>
        toast.success(`! ${msg}`, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            className: "w-[26rem]",
        });

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
            className: "w-[26rem]",
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
            className: "w-[26rem]",
        });

    const deleteModalCancelAction = () => {
        setIsShowDeleteModal(false);
    };

    const deleteModalSubmitAction = () => {
        axios
            .delete(`http://localhost:8000/api/products/${productID}`)
            .then((response) => {
                successToast("محصول با موفقیت حذف شد");
                setIsShowDeleteModal(false);
                getProductsData();
            })
            .catch((error) => {
                errorToast("حذف محصول ، ناموفق بود");
            });
    };

    const updateProductInfo = (changedProductData) => {
        axios
            .put(`http://localhost:8000/api/products/${productID}`, changedProductData)
            .then((response) => {
                defaultToast("با موفقیت ویراش شد");
                setIsShowEditModal(false);
                getProductsData();
            })
            .catch((error) => {
                errorToast("ویرایش ناموفق بود");
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
            {productsData.length === 0 ? (
                <ErrorBox msg={"هیچ محصولی یافت نشد !"} />
            ) : (
                <div className="text-base sm:text-2xl lg:text-2xl dark:bg-darkCard bg-lightCard mt-8 lg:p-6 md:p-5 sm:p-3 p-2 rounded-xl overflow-x-auto h-auto transition-all duration-200">
                    <table className=" w-full text-base lg:text-2xl text-center border-spacing-3">
                        <thead>
                            <tr>
                                <th className="p-3 border-b-2  font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    عکس
                                </th>
                                <th className="p-3 border-b-2  font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    اسم
                                </th>
                                <th className="p-3 border-b-2  font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    قیمت
                                </th>
                                <th className="p-3 border-b-2  font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    موجودی
                                </th>
                                <th className="p-3 border-b-2  font-semibold dark:text-darkText text-lightText transition-all duration-200"></th>
                            </tr>
                        </thead>
                        <tbody className="text-base lg:text-2xl h-full">
                            {productsData.map((product, index) => (
                                <tr key={index + 1}>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText">
                                        <div className="mx-auto w-full flex items-center justify-center">
                                            <img
                                                className="md:w-[120px] sm:w-[70px] w-[65px] rounded-md border-2 dark:border-darkBlue border-lightPurple transition-all duration-200"
                                                src={
                                                    product.img === ""
                                                        ? "/img/default.png"
                                                        : product.img
                                                }
                                                alt={product.title}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText">
                                        <p>{product.title}</p>
                                    </td>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText">
                                        <p> {product.price} تومان</p>
                                    </td>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText">
                                        <p>{product.count} عدد</p>
                                    </td>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText">
                                        <div className="flex items-center justify-around">
                                            <Button
                                                text={"جزئیات"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    setIsShowDetailModal(true);
                                                    setProductDetails(product);
                                                }}
                                            />
                                            <Button
                                                text={"حذف"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    setIsShowDeleteModal(true);
                                                    setProductID(product.id);
                                                }}
                                            />
                                            <Button
                                                text={"ویرایش"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    setIsShowEditModal(true);
                                                    setProductDetails(product);
                                                    setProductID(product.id);
                                                }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {isShowDeleteModal && (
                        <DeleteModal
                            submitAction={deleteModalSubmitAction}
                            cancelAction={deleteModalCancelAction}
                        />
                    )}

                    {isShowDetailModal && (
                        <DetailModal
                            closeAction={() => setIsShowDetailModal(false)}
                            data={productDetails}
                        />
                    )}

                    {isShowEditModal && (
                        <EditModal
                            closeAction={() => {
                                setIsShowEditModal(false);
                            }}
                            sendAction={(changedProductData) => {
                                updateProductInfo(changedProductData);
                            }}
                            data={productDetails}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default ProductsTable;
