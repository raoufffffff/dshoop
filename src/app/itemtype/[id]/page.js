import Categories from "@/components/Categories/Categories";
import Item from "@/components/Item/Item";
import Items from "@/components/Items/Items";
import TypeLinks from "@/components/TyoeLinks/TyoeLinks";
import VieCard from "@/components/VieCard/VieCard";
import { types } from "@/constants/type";
import React from "react";

// ✅ **إضافة Metadata للـ SEO بناءً على ID مع async**
export async function generateMetadata({ params }) {
    const { id } = await params

    const a = decodeURIComponent(id);

    // ✅ انتظار العثور على العنصر المناسب
    const typeData = types.find(e => e.name === a);

    // ✅ التحقق من وجود `key` قبل استخدامه
    const key = typeData ? typeData.key : "منتجات مميزة";

    return {
        title: `Dshoop | ${key}`,
        description: `Dshoop ${key} تفقد افضل الاسعار  مع توصيل سريع للمنزل و باسعار معقولة 
        دي شوب ${key}`,
        openGraph: {
            title: `d-shoop | ${key} أفضل العروض`,
            description: `Dshoop ${key} تفقد افضل الاسعار  مع توصيل سريع للمنزل و باسعار معقولة 
            دي شوب ${key}`,
            url: `https://raouf-protfoloi.onrender.com/`,
            images: [`/logo.png`],
            type: "website",
        },
    };
}

const Page = async ({ params }) => {
    const { id } = await params

    const a = decodeURIComponent(id);

    return (
        <div className="w-full">
            <Categories id={a} />
            <TypeLinks id={a} />
            <Items id={a} />
            <Item />
            <VieCard />
        </div>
    );
};

export default Page;
