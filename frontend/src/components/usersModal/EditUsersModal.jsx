import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { contextData } from "../../contexts/ContextData";

const EditUsersModal = ({ userData, closeAction, sendAction }) => {
    const [firstName, setFirstName] = useState(userData.firsname);
    const [lastName, setLastName] = useState(userData.lastname);
    const [username, setUsername] = useState(userData.username);
    const [password, setPassword] = useState(userData.password);
    const [phone, setPhone] = useState(userData.phone);
    const [city, setCity] = useState(userData.city);
    const [email, setEmail] = useState(userData.email);
    const [address, setAddress] = useState(userData.address);
    const [score, setScore] = useState(userData.score);
    const [buy, setBuy] = useState(userData.buy);

    const changedUserInfos = {
        firsname: firstName,
        lastname: lastName,
        username: username,
        password: password,
        phone: phone,
        city: city,
        email: email,
        address: address,
        score: score,
        buy: buy,
    };

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
                        <h3 className="font-semibold dark:text-sky-500 text-lightPurple">اطلاعات جدید را وارد کنید</h3>

                        <form className="font-yekanReg w-auto text-base sm:text-2xl lg:text-2xl">
                            <div className="flex flex-col  lg:p-5 p-2 dark:bg-darkCard bg-lightCard w-full mt-8 rounded-xl ">
                                <div className="lg:flex flex-col lg:flex-row">
                                    <div className="flex-col mx-auto items-center justify-center">
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="نام جدید"
                                                value={firstName}
                                                onChange={(event) =>
                                                    setFirstName(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="نام خانوادگی جدید"
                                                value={lastName}
                                                onChange={(event) =>
                                                    setLastName(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="یوزرنیم جدید"
                                                value={username}
                                                onChange={(event) =>
                                                    setUsername(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="پسوورد جدید"
                                                value={password}
                                                onChange={(event) =>
                                                    setPassword(event.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="شماره تماس جدید"
                                                value={phone}
                                                onChange={(event) => setPhone(event.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="شهر جدید"
                                                value={city}
                                                onChange={(event) => setCity(event.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="ایمیل جدید"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="آدرس جدید"
                                                value={address}
                                                onChange={(event) => setAddress(event.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="امتیاز جدید"
                                                value={score}
                                                onChange={(event) => setScore(event.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center lg:px-3 px-2 dark:bg-darkBack bg-lightBack dark:text-darkText text-lightText p-0 h-12 w-full mb-4 rounded-lg mx-auto">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="outline-none my-4 rounded-lg w-full bg-inherit items-center"
                                                style={{ margin: 0 }}
                                                placeholder="میزان خرید جدید"
                                                value={buy}
                                                onChange={(event) => setBuy(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:mt-2 mt-4 flex items-center lg:justify-end justify-center">
                                    <Button
                                        btnAction={() => {
                                            sendAction(changedUserInfos);
                                        }}
                                        text={"ثبت اطلاعات جدید"}
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

export default EditUsersModal;
