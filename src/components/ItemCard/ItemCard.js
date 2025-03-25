"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCircleInfo, FaCircleMinus } from "react-icons/fa6";
import { useSnapshot } from "valtio";
import state from "@/stor/stor";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, usePathname } from "next/navigation";

const ItemCard = ({ item }) => {
    const snap = useSnapshot(state);
    const [animate, setAnimate] = useState(false);
    const searchparams = useSearchParams();
    const pathname = usePathname();


    const handleAnimation = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000);
    };

    const handleAddItem = () => {
        handleAnimation();

        const existingItem = snap.items.find((e) => e.name === item.name);

        if (existingItem) {
            // Update the quantity for an existing item
            state.items = state.items.map((e) =>
                e.name === item.name ? { ...e, q: e.q + 1 } : e
            );
        } else {
            // Add the new item with quantity 1
            let n = { ...item, q: 1 }
            state.items = [...state.items, n];
        }
    };

    const handleRemoveItem = (event) => {
        event.stopPropagation();

        const existingItem = state.items.find((e) => e.name === item.name);

        if (existingItem) {
            if (existingItem.q > 1) {
                state.items = state.items.map((e) =>
                    e.name === item.name ? { ...e, q: e.q - 1 } : e
                );
            } else {
                // Remove the item entirely if quantity reaches 0
                state.items = state.items.filter((e) => e.name !== item.name);
            }
            handleAnimation();
        }
    };

    const existingItem = state.items.find((e) => e.name === item.name);
    const mylink = () => {
        return !!searchparams.get("typeof");
    };

    return (
        <motion.div
            onClick={handleAddItem}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-[45%] pb-1.5 relative my-2 mx-0.5 flex flex-col md:w-3/12 lg:w-[21%] md:mx-2 border bg-white border-gray-200 rounded-lg overflow-hidden max-h-[280px] min-h-[280px] hover:shadow-xl hover:scale-105"
        >
            {existingItem?.q > 0 && (
                <div className="absolute top-2 left-0 w-full flex justify-between px-1">
                    <button onClick={handleRemoveItem} aria-label="Remove Item">
                        <FaCircleMinus className="text-red-600 mx-2" size={30} />
                    </button>
                    <motion.span
                        animate={animate ? { scale: [1, 1.25, 0.75, 1] } : {}}
                        transition={{ duration: 1 }}
                        className="rounded-full bg-green-800 py-1 px-3 text-white"
                    >
                        {existingItem.q}
                    </motion.span>
                </div>
            )}
            <Image
                width={200}
                height={200}
                src={item.img}
                alt={item.name}
                className="min-h-[160px] max-h-[160px] w-full"
            />

            <p className="one-line mt-3 text-center font-medium px-1">{item.name}</p>
            <p className="one-line text-[#0008]  mr-auto mt-auto font-medium px-5">{item.g}</p>
            <div className="flex mt-auto flex-col">
                <div className="flex items-center px-3">
                    <span
                        className={`ml - auto font - normal ${item.offer ? "line-through text-sm text-gray-600 font-medium" : ""
                            } `}
                    >
                        {item.price} DA
                    </span>
                    {item.offer && (
                        <span className="mx-2 text-[#dd2a5b] underline">{item.newprice} DA</span>
                    )}
                </div>
            </div>
            <Link
                href={`/itemtype/${pathname.includes("offer") ? "offer" : item.type}?${mylink() ? `typeof=${searchparams.get("typeof")}&` : ""}item=${item._id}`}
                className="absolute right-1 top-[55%]"
                onClick={(event) => event.stopPropagation()}
                aria-label="View Item Details"
            >
                <FaCircleInfo size={20} className="text-gray-700" />
            </Link>

        </motion.div>
    );
};

export default ItemCard;
