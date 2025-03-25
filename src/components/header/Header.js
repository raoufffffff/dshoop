"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

// import Lang from "./Lang";
import Search from "./Search/Search";
import Image from "next/image";

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    // const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");
    const hide = () => setShowSearch(false)
    useEffect(() => {
        const dir = "rtl";
        document.documentElement.setAttribute("dir", dir);
    }, [])

    const searchSubmit = (e) => {
        setSearch(e);
        setShowSearch(false);
        router.push(`/search?to=${e}`);
    };

    return (
        <header className="flex flex-wrap px-5 py-1.5 lg:py-3 items-center lg:justify-between bg-[#dd2a5b] transition-all fixed top-0 left-0 z-50 w-full">

            {/* Logo */}
            <Link href="/" className="flex mx-auto items-center text-2xl font-bold text-white">
                <Image
                    src={'/logo.png'}
                    alt="logo"
                    width={100}
                    height={50}
                    className="h-[24]"
                />
            </Link>

            {/* Search Bar */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (search.length > 0) {
                        setShowSearch(false);
                        router.push(`/search?to=${search}`);
                    }
                }}
                className="w-9/12 lg:w-6/12 mx-auto"
            >
                <label
                    onClick={() => setShowSearch(true)}
                    htmlFor="search"
                    className="rounded-xl shadow-xl bg-white h-10 w-full mt-1.5 mx-auto flex items-center px-2"
                >
                    <MdOutlineSearch color="#000" size={25} />
                    <input
                        name="search"
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-10/12 focus:outline-none ml-2"
                        placeholder={"البحث عن المنتجات"}
                    />
                </label>
                <button className="hidden"></button>
            </form>

            {/* Language Switcher */}
            {/* <button onClick={() => setShow(true)} className="absolute right-5 bottom-4">
                <IoLanguage size={22} color="#fff" />
            </button> */}

            {/* Back Button */}
            {pathname !== "/" && (
                <Link href={pathname.startsWith("/t") ? "/" : "/type/offer"} className="absolute left-5 bottom-4">
                    <FaArrowLeft size={22} color="#fff" />
                </Link>
            )}

            {/* {show && <Lang hide={() => setShow(false)} />} */}
            {showSearch && <Search hide={hide} searchResult={search} searchSubmit={searchSubmit} />}
        </header>
    );
};

export default Header;
