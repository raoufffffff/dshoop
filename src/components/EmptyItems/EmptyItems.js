import Image from "next/image"

const EmptyItems = () => {

    return (
        <div
            className='w-full'
        >
            <Image
                width={50}
                height={100}
                alt="empty"
                className='mx-auto'
                src={'/empty.png'}
            />
            <h2
                className='text-xl text-center font-bold mt-7'
            >السلة فارغة</h2>
        </div>
    )
}

export default EmptyItems