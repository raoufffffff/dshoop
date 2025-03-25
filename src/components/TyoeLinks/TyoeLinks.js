"use client"
import TypesOfType from "@/constants/typesOfType";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const TypeLinks = ({ id }) => {
    const searchparams = useSearchParams();


    if (id === "offer") {
        return null;
    }

    const typeObject = TypesOfType.find((e) => e.name === id);



    const ourTypes = typeObject.types.map((type, i) => (
        <Link
            href={`/itemtype/${id}?typeof=${type.name}`}
            key={i}
            className={`${searchparams.get("typeof") === type.name &&
                "font-bold text-[#dd2a5b] underline border-b-[#dd2a5b] border-[#dd2a5b] md:text-black"
                } flex items-center px-5 py-2 flex-1 mx-1 min-w-fit md:border-none`}
        >
            {type.key}
        </Link>
    ));

    return (
        <ul className="w-full overflow-x-scroll a pb-3 flex">
            <Link
                key="all"
                href={`/itemtype/${id}`}
                className={`${!searchparams.get("typeof") && "font-bold text-[#dd2a5b] underline border-b-[#dd2a5b] border-[#dd2a5b] md:text-black"
                    } flex items-center px-5 py-2 flex-1 mx-1 min-w-fit md:border-none`}
            >
                الكل
            </Link>
            {ourTypes}
        </ul>
    );
};

export default TypeLinks;
