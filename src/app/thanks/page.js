"use client"
import { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Thanks = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        logEvent(analytics, `Complete the purchase process`)

    }, [])
    return (
        <div
            className='w-full '
        >
            <Image
                alt='thanks'
                width={10}
                height={10}
                className='w-2/12 mt-3 mx-auto '
                src={`/thanks.png`}
            />
            <h1
                className='text-[#dd2a5b] text-xl text-center px-5'
            >لقد تم إرسال طلبك بنجاح</h1>
            <h2
                className='text-center mt-5 px-5 text-sm'
            > سوف نتواصل معك في أقرب وقت ممكن لتأكيد الطلب.</h2>
            <h3
                className='text-gray-500 text-sm text-center mt-10'
            >شكرا لاختيارك D Shop</h3>
            <Link
                href={'/'}
                className='bg-[#dd2a5b] text-white flex mt-5 w-9/12 mx-auto rounded-2xl justify-center capitalize py-1'
            >
                العودة إلى الصفحة الرئيسية
            </Link>
        </div>
    )
}

export default Thanks