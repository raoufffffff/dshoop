import Image from "next/image"

const Adds = () => {
    return (
        <div
            className='w-full flex justify-center'
        >

            <Image
                width={200}
                height={200}
                alt="img"
                className='rounded-xl w-10/12 sm:w-5/12 md:h-[200px]'
                src="/daily.png" />
        </div>
    )
}

export default Adds