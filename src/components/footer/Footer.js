import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6';
import { HiShoppingCart } from 'react-icons/hi'

const Footer = () => {

    return (
        <div
            className='bg-[#fefefe] border-t mt-10 border-t-slate-600 shadow-stone-500  py-3 flex flex-col'
        >
            <div
                className='px-5'
            >

                <Image
                    src={'/footer.png'}
                    width={100}
                    height={100}
                    alt='footer'
                    className='mx-auto'
                />
                <h3
                    className='text-center my-2'
                >مرحبا بكم في دايلي شوب !</h3>
                <p
                    className='text-center'
                > نحن في النسخة التجريبية من منصتنا التي تهدف إلى تسهيل تجربة التسوق من السوبرماركت. نقدم لكم خدمة توصيل المواد الغذائية مباشرة إلى باب منزلكم بسرعة وسهولة، مما يوفر عليكم الوقت والجهد. نسعى لتحسين خدماتنا بناءً على ملاحظاتكم لنكون دائماً عند حسن ظنكم!</p>
            </div>
            <div
                className='flex justify-center items-center mt-5'
            >
                <a
                    href='https://www.facebook.com/profile.php?id=61570542254337&mibextid=ZbWKwL'
                    target='_blank'
                >
                    <FaFacebookF size={24}
                        className='mx-2'
                    />
                </a>
                <a
                    href='https://www.instagram.com/deliverydailyshop/profilecard/?igsh=Nml3aWkwZmFiYmpv'
                    target='_blank'
                >
                    <FaInstagram size={24}
                        className='mx-2'
                    />
                </a>
                <a
                    href="https://wa.me/213798888642"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp size={24}
                        className='mx-2'
                    />
                </a>

            </div>
        </div>
    )
}

export default Footer
