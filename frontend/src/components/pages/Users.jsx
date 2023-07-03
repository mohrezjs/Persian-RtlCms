import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox";
import { ToastContainer, toast } from "react-toastify";
import Button from "../Button";
import axios from "axios";
import DeleteModal from "../DeleteModal";
import EditUsersModal from "../usersModal/EditUsersModal";
import UsersInfoModal from "../usersModal/UsersInfoModal";

const Users = () => {
    const [isShowEditUserModal, setIsShowEditUserModal] = useState(false);

    const [isShowUserInfoModal, setIsShowUserInfoModal] = useState(false);

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

    const [users, setUsers] = useState([]);

    const [userDetails, setUserDetails] = useState([]);

    const [userID, setUserID] = useState(null);

    useEffect(() => {
        getUsers();
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

    const getUsers = () => {
        axios
            .get("http://localhost:8000/api/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                errorToast("دریافت کاربران از سرور با خطا مواجه شد");
            });
    };

    const deleteUserHandler = (userId) => {
        axios
            .delete(`http://localhost:8000/api/users/${userId}`)
            .then((response) => {
                setIsShowDeleteModal(false);
                successToast("کاربر با موفقیت حذف شد");
                getUsers();
            })
            .catch((error) => {
                errorToast("حذف کاربر با خطا مواجه شد");
            });
    };

    const sendActionToDB = (editedUser, userId) => {
        axios
            .put(`http://localhost:8000/api/users/${userId}`, editedUser)
            .then((response) => {
                successToast("کاربر با موفقیت ویرایش شد");
                setIsShowEditUserModal(false);
                getUsers();
            })
            .catch((error) => {
                errorToast("ویرایش کاربر با خطا مواجه شد");
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

            {users.length === 0 ? (
                <ErrorBox msg={"هیچ کاربری یافت نشد !"} />
            ) : (
                <div className="transition-all duration-200 text-base sm:text-2xl lg:text-2xl dark:bg-darkCard bg-lightCard mt-8 lg:p-6 md:p-5 sm:p-3 p-2 rounded-xl overflow-x-auto h-auto">
                    <table className=" w-full text-base lg:text-2xl text-center border-spacing-3">
                        <thead>
                            <tr>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">
                                    نام و نام خانوادگی
                                </th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">یوزرنیم</th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">رمزعبور</th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">شماره تماس</th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200">ایمیل</th>
                                <th className="p-3 border-b-2 font-semibold dark:text-darkText text-lightText transition-all duration-200"></th>
                            </tr>
                        </thead>
                        <tbody className="text-base lg:text-2xl h-full">
                            {users.map((user, index) => (
                                <tr key={index + 1}>
                                    <td className="py-3 dark:text-darkText text-lightText transition-all duration-200">
                                        <p>
                                            {user.firsname} {user.lastname}
                                        </p>
                                    </td>
                                    <td className="py-3 dark:text-darkText text-lightText transition-all duration-200">
                                        <p>{user.username}</p>
                                    </td>

                                    <td className="py-3 dark:text-darkText text-lightText transition-all duration-200">
                                        <p>{user.password}</p>
                                    </td>
                                    <td className="py-3 dark:text-darkText text-lightText transition-all duration-200">
                                        <p>{user.phone}</p>
                                    </td>
                                    <td className="py-3 dark:text-darkText text-lightText transition-all duration-200">
                                        <p>{user.email}</p>
                                    </td>
                                    <td className="py-3 dark:text-darkText text-lightText transition-all duration-200">
                                        <div className="flex items-center justify-around">
                                            <Button
                                                text={"حذف"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    setIsShowDeleteModal(true);
                                                    setUserID(user.id);
                                                }}
                                            />

                                            <Button
                                                text={"جزئیات"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    setIsShowUserInfoModal(true);
                                                    setUserDetails(user);
                                                }}
                                            />

                                            <Button
                                                text={"ویرایش"}
                                                addClass={"mx-1"}
                                                btnAction={() => {
                                                    setIsShowEditUserModal(true);
                                                    setUserDetails(user);
                                                    setUserID(user.id);
                                                    console.log("hello");
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
                            cancelAction={() => setIsShowDeleteModal(false)}
                            submitAction={() => deleteUserHandler(userID)}
                        />
                    )}

                    {isShowUserInfoModal && (
                        <UsersInfoModal
                            closeAction={() => setIsShowUserInfoModal(false)}
                            data={userDetails}
                        />
                    )}

                    {isShowEditUserModal && (
                        <EditUsersModal
                            userData={userDetails}
                            closeAction={() => setIsShowEditUserModal(false)}
                            sendAction={(newUserData) => sendActionToDB(newUserData, userID)}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default Users;
