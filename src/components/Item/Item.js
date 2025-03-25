"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import Image from "next/image";
import state from "@/stor/stor";

const Item = () => {
    const [myItem, setMyItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const snap = useSnapshot(state);
    const searchParams = useSearchParams();
    const router = useRouter();

    const itemParam = searchParams.get("item");

    useEffect(() => {
        if (!itemParam) return;

        const getItem = async () => {
            try {
                const response = await axios.get(
                    `https://daily-api-tan.vercel.app/item/${itemParam}`
                );
                setMyItem(response.data.result);
                setLoading(false);
            } catch {
                setError("Failed to fetch item details.");
                setLoading(false);
            }
        };

        getItem();
    }, [itemParam]);

    const closeModal = () => {
        const url = new URL(window.location.href);
        url.searchParams.delete("item"); // إزالة `item` من الـ URL
        window.history.pushState({}, "", url); // تحديث الـ URL بدون إعادة تحميل الصفحة
    };

    const handleAddItem = () => {
        const existingItem = snap.items.find((e) => e.name === myItem.name);
        if (existingItem) {
            state.items = state.items.map((e) =>
                e.name === myItem.name ? { ...e, q: e.q + 1 } : e
            );
        } else {
            state.items = [...state.items, { ...myItem, q: 1 }];
        }
        closeModal();
    };

    if (!itemParam) return null;

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
                className="bg-white relative flex flex-col w-10/12 md:w-6/12 h-4/6 overflow-y-auto rounded-xl shadow-lg"
            >
                {/* زر الإغلاق */}
                <IoCloseSharp
                    onClick={closeModal}
                    size={30}
                    className="absolute top-4 right-4 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors"
                />

                {/* المحتوى */}
                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <p className="text-gray-500 font-medium">Loading...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col justify-center items-center h-full">
                        <p className="text-red-500 font-semibold">{error}</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center mt-6">
                        <Image
                            width={300}
                            height={300}
                            src={myItem?.img || "/placeholder.png"}
                            alt={myItem?.name || "Item"}
                            className="w-10/12 h-60 object-contain rounded-lg"
                        />
                        <p className="w-9/12 text-center font-bold text-gray-700 mt-4">
                            {myItem?.name || "Unknown Item"}
                        </p>
                        <div className="mt-4 px-4 text-center">
                            <p className="text-gray-600">
                                {myItem?.description || "No description available."}
                            </p>
                        </div>
                        <button
                            onClick={handleAddItem}
                            className="mt-4 px-6 py-2 bg-[#dd2a5b] text-white rounded-lg hover:bg-[#c12350] transition-all"
                        >
                            Add
                        </button>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Item;
