"use client"
import axios from "axios";
import { motion } from "motion/react";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Promo = ({ hide, changecoodes }) => {

    const [cood, setCood] = useState("");
    const [err, setErr] = useState(false);
    const [good, setGood] = useState(false);

    const getPromo = async () => {

        try {
            await axios
                .put(`https://daily-api-tan.vercel.app/code/${cood.toUpperCase()}`)
                .then((res) => {
                    if (!res.data.good) {
                        setErr(true);
                        return;
                    }
                    setGood(true);
                    changecoodes(res.data.result);
                });
        } catch {
            setErr(true);
        }
    };

    return (
        <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="fixed z-50 flex justify-center items-center w-full h-screen left-0 top-0 bg-black/60 backdrop-blur-sm"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                className="bg-white relative flex flex-col w-10/12 md:w-6/12 overflow-y-auto rounded-xl shadow-lg py-3 px-5"
            >
                {good ? (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center p-4"
                    >
                        <IoCloseSharp
                            onClick={hide}
                            size={30}
                            className="absolute top-0 right-2 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors"
                        />
                        <p className="text-green-600 text-4xl">✅</p>
                        <h1 className="text-green-600 text-xl font-bold mt-2 text-center">
                            لقد تم تطبيق الرمز الترويجي الخاص بك
                        </h1>
                    </motion.div>
                ) : err ? (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center p-4"
                    >
                        <IoCloseSharp
                            onClick={hide}
                            size={30}
                            className="absolute top-5 right-5 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors"
                        />
                        <h1 className="text-red-600 text-xl text-center font-bold mt-2">
                            الرمز الترويجي غير موجود أو انتهت صلاحيته.
                        </h1>
                    </motion.div>
                ) : (
                    <>
                        <div
                            className="mb-3 flex justify-between items-center"
                        >

                            <p >تطبيق رمز ترويجي</p>
                            <IoCloseSharp
                                onClick={hide}
                                size={30}
                                className=" text-gray-600 cursor-pointer hover:text-purple-600 transition-colors"
                            />
                        </div>
                        <input
                            value={cood}
                            onChange={(e) => {
                                setCood(e.currentTarget.value);
                                setErr(false);
                            }}
                            type="text"
                            className="w-full md:w-8/12 px-5 py-1 mb-3 border border-[#0007] rounded-xl shadow-sm focus:ring-2 focus:ring-[#dd2a5b] focus:outline-none text-gray-700"
                        />
                        <div className="w-full flex justify-end">
                            <button
                                onClick={hide}
                                className="mx-1 bg-[#3338] text-white uppercase text-xs p-2 rounded-xl"
                            >
                                اغلاق
                            </button>
                            <button
                                onClick={getPromo}
                                className="mx-1 bg-[#dd2a5b] text-white uppercase text-xs p-2 rounded-xl"
                            >
                                تطبيق
                            </button>
                        </div>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Promo;
