"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ استبدال useNavigate بـ useRouter
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import { IoPricetagOutline } from "react-icons/io5";
import axios from "axios";
import Promo from "@/components/Promo/Promo";
import state from "@/stor/stor"; // تأكد من استيراد `state` بشكل صحيح
import dz from "@/constants/dz";

const Checkout = () => {
    const router = useRouter(); // ✅ استخدام useRouter بدلاً من useNavigate
    const snap = useSnapshot(state);
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({
        user: "",
        phone: "",
        position: { name: "", price: 0 },
    });
    const [promoCode, setPromoCode] = useState({});
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        position: false,
    });

    const hide = () => setShow(false);
    const changeCodes = (e) => setPromoCode(e);

    const price = () => {
        return snap.items.reduce(
            (acc, e) => acc + e.q * (e.offer ? e.newprice : e.price),
            0
        );
    };

    const finalPrice = () => {
        return promoCode.type === "descouante"
            ? price() * (1 - promoCode.per / 100)
            : price();
    };

    const total = () => {
        if (promoCode.type === "free delevery") return price();
        if (promoCode.type === "descouante")
            return finalPrice() + info.position.price;
        return price() + info.position.price;
    };

    const postOrder = async () => {
        try {
            const response = await axios.post(
                "https://daily-api-tan.vercel.app/order",
                {
                    ...info,
                    price: finalPrice(),
                    ride: info.position.price,
                    promo: !!promoCode.type,
                    promotype: promoCode.type || "none",
                    items: snap.items,
                    location: info.position,
                }
            );

            if (response.data.good) {
                router.push("/thanks"); // ✅ التنقل إلى صفحة الشكر بعد الطلب
                state.items = [];
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            name: !info.user.trim(),
            phone: !info.phone.trim(),
            position: !info.position.name.trim(),
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        postOrder();
    };

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-full bg-white pt-6 pb-8 rounded-xl shadow-lg max-w-lg mx-auto"
        >
            <h1 className="text-center text-3xl font-bold text-gray-800">
                حدد البلدية
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-6 w-11/12 mx-auto">
                <input
                    value={info.user}
                    onChange={(e) => setInfo({ ...info, user: e.target.value })}
                    type="text"
                    placeholder="اكتب اسمك"
                    className={`w-10/12 md:w-8/12 px-5 py-2 rounded-xl shadow-sm focus:ring-2 focus:outline-none mb-3 text-gray-700 border ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#dd2a5b]"
                        }`}
                />
                <input
                    value={info.phone}
                    onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                    type="text"
                    placeholder="أدخل رقم هاتفك"
                    className={`w-10/12 md:w-8/12 px-5 py-2 rounded-xl shadow-sm focus:ring-2 focus:outline-none mb-3 text-gray-700 border ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#dd2a5b]"
                        }`}
                />
                <select
                    className={`w-10/12 md:w-8/12 px-5 py-2 rounded-xl shadow-sm focus:ring-2 focus:outline-none mb-3 bg-white text-gray-700 border ${errors.position ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#dd2a5b]'
                        }`}
                    value={info.position.name}
                    onChange={(e) => {
                        const selectedPosition = dz.find(item => item.name === e.target.value);
                        setInfo({ ...info, position: selectedPosition });
                        // Remove error when a valid option is selected
                        setErrors({ ...errors, position: false });
                    }}
                >
                    <option value="" disabled>{"حدد البلدية"}</option>
                    {dz.map(e => (
                        <option key={e.name} value={e.name}>{e.name}</option>
                    ))}
                </select>
                <p onClick={() => setShow(true)} className="bg-green-400 flex items-center text-white w-10/12 px-2 rounded-xl py-1 cursor-pointer my-5">
                    <IoPricetagOutline className="mx-3" />
                    تطبيق رمز ترويجي
                </p>
                <div className="flex w-10/12 my-1 justify-between">
                    <p>تكاليف التوصيل</p>
                    <p className={`${promoCode.type === "free delevery" && "line-through"} py-2 px-4 rounded-xl bg-[#3337]`}>
                        {info.position.price} DA
                    </p>
                </div>
                <div className="flex w-10/12 my-1 justify-between">
                    <p>المشتريات</p>
                    <div className="flex">
                        <p className={`${promoCode.type === "descouante" && "line-through"}`}>{price()} DA</p>
                        {promoCode.type === "descouante" && (
                            <p className="ml-4 text-green-700">{finalPrice()} DA</p>
                        )}
                    </div>
                </div>
                <div className="flex w-10/12 my-1 justify-between">
                    <p>الكل</p>
                    <p className="text-green-600">{total()} DA</p>
                </div>
                <button
                    type="submit"
                    className="w-8/12 bg-[#dd2a5b] mt-5 flex justify-center rounded-xl text-center py-2 text-white text-lg font-semibold transition-all duration-300"
                >
                    تأكيد
                </button>
            </form>
            {show && <Promo hide={hide} changecoodes={changeCodes} />}
        </motion.div>
    );
};

export default Checkout;
