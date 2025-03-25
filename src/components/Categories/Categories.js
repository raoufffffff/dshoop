import { types } from "@/constants/type"
import Image from "next/image"
import Link from "next/link"



const Categories = ({ id }) => {

    const ourTypes = types.map(e => (
        <Link href={`/itemtype/${e.name}`} key={e.name}

            className={`min-w-[25%] sm:min-w-[100px] mx-1 h-[150px]  flex flex-col items-center border ${id == e.name && "bg-[#dd2a5b]"} border-[#dd2a5b] rounded-xl px-2 pt-1`}
        >
            <Image
                width={50}
                height={80}
                alt={e.name}
                className='h-[80px] w-full'
                src={e.img}
            />
            <span
                className={` ${id == e.name && "text-white"} text-xs  flex mt-3 font-semibold text-center`}
            >{e.key}</span>
        </Link>
    ))
    return (
        <div
            className='flex  w-full px-2 gap-3 overflow-x-scroll a mt-5 '
        >
            {ourTypes}
        </div>
    )
}

export default Categories