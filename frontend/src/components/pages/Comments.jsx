import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ErrorBox from "../ErrorBox";
import Button from "../Button";
import CommentModal from "../commentsModals/CommentModal";
import axios from "axios";
import DeleteModal from "../DeleteModal";
import EditCommentModal from "../commentsModals/EditCommentModal";
import ResCommentModal from "../commentsModals/ResCommentModal";

const Comments = () => {
    const [isShowCommentModal, setIsShowCommentModal] = useState(false);

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

    const [isShowEditModal, setIsShowEditModal] = useState(false);

    const [isShowResponseModal, setIsShowResponseModal] = useState(false);

    const [comments, setComments] = useState([]);

    const [commentBody, setCommentBody] = useState([]);

    const [commentID, setCommentID] = useState(null);

    useEffect(() => {
        getComments();
    }, []);

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

    const getComments = () => {
        axios
            .get("http://localhost:8000/api/comments")
            .then((response) => {
                setComments(response.data);
            })
            .catch((error) => {
                errorToast("دریافت کامنت ها از سرور با خطا مواجه شد");
            });
    };

    const deleteCommentHandler = (commentId) => {
        axios
            .delete(`http://localhost:8000/api/comments/${commentId}`)
            .then((response) => {
                setIsShowDeleteModal(false);
                successToast("کامنت با موفقیت حذف شد");
                getComments();
            })
            .catch((error) => {
                errorToast("حذف کامنت با خطا مواجه شد");
            });
    };

    const sendActionToDB = (editedComment, commentId) => {
        axios
            .put(`http://localhost:8000/api/comments/${commentId}`, editedComment)
            .then((response) => {
                successToast("کامنت با موفقیت ویرایش شد");
                setIsShowEditModal(false);
                getComments();
            })
            .catch((error) => {
                errorToast("ویرایش کامنت ها با خطا مواجه شد");
            });
    };

    const sendResponseToComment = () => {
        setIsShowResponseModal(false);
        successToast("پاسخ شما با موفقیت ثبت شد");
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
            {comments.length === 0 ? (
                <ErrorBox msg={"هیج کامنتی یافت نشد!"} />
            ) : (
                <div className="transition-all duration-200 text-base sm:text-2xl lg:text-2xl dark:bg-darkCard bg-lightCard mt-8 lg:p-6 md:p-5 sm:p-3 p-2 rounded-xl overflow-x-auto h-auto">
                    <table className=" w-full text-base lg:text-2xl text-center border-spacing-3">
                        <thead>
                            <tr>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    نام کاربر
                                </th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    محصول
                                </th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    کامنت
                                </th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    تاریخ
                                </th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    ساعت
                                </th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200"></th>
                            </tr>
                        </thead>
                        <tbody className="text-base lg:text-2xl h-full">
                            {comments.map((comment, index) => (
                                <tr key={index + 1}>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText ">
                                        <p>{comment.userID}</p>
                                    </td>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText ">
                                        <p>{comment.productID}</p>
                                    </td>

                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText ">
                                        <Button
                                            text={"متن"}
                                            addClass={"mx-1"}
                                            btnAction={() => {
                                                setIsShowCommentModal(true);
                                                setCommentBody(comment.body);
                                            }}
                                        />
                                    </td>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText ">
                                        <p>{comment.date}</p>
                                    </td>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText ">
                                        <p>{comment.hour}</p>
                                    </td>
                                    <td className="py-3 transition-all duration-200 dark:text-darkText text-lightText ">
                                        <div className="flex items-center justify-around">
                                            <Button
                                                text={"حذف"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    setIsShowDeleteModal(true);
                                                    setCommentID(comment.id);
                                                }}
                                            />
                                            <Button
                                                text={"ویرایش"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    setIsShowEditModal(true);
                                                    setCommentBody(comment.body);
                                                    setCommentID(comment.id);
                                                }}
                                            />
                                            <Button
                                                text={"پاسخ"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    setIsShowResponseModal(true);
                                                }}
                                            />
                                            <Button
                                                text={"تایید"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    successToast("کامنت کاربر با موفقیت تایید شد");
                                                }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {isShowCommentModal && (
                        <CommentModal
                            closeAction={() => setIsShowCommentModal(false)}
                            commentBody={commentBody}
                        />
                    )}

                    {isShowDeleteModal && (
                        <DeleteModal
                            cancelAction={() => setIsShowDeleteModal(false)}
                            submitAction={() => deleteCommentHandler(commentID)}
                        />
                    )}

                    {isShowEditModal && (
                        <EditCommentModal
                            closeAction={() => setIsShowEditModal(false)}
                            sendAction={(editedComment) => sendActionToDB(editedComment, commentID)}
                            commentBodyForEdit={commentBody}
                        />
                    )}

                    {isShowResponseModal && (
                        <ResCommentModal
                            closeAction={() => setIsShowResponseModal(false)}
                            sendAction={sendResponseToComment}
                            commentBodyForEdit={commentBody}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default Comments;
