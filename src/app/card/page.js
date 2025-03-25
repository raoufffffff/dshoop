"use client"
import { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { motion } from 'motion/react';
import state from '@/stor/stor';
import { useSearchParams } from 'next/navigation';
import CardaiatemCard from '@/components/CardaiatemCard/CardaiatemCard';
import Link from 'next/link';
import EmptyItems from '@/components/EmptyItems/EmptyItems';


const Card = () => {

    const searchparams = useSearchParams();
    const time = new Date().getHours();
    const snap = useSnapshot(state);
    const [animate, setAnimate] = useState(false);



    const handleAnimation = () => {
        if (snap.items.length === 0) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 1000);
        }
    };

    const price = () => {
        let a = 0;
        snap.items.map((e) => {
            a += e.q * (e.offer ? e.newprice : e.price);
        });
        return a;
    };

    const ourCardItems = state.items.map((e, i) => {
        return <CardaiatemCard e={e} key={i} i={i} />;
    });


    useEffect(() => {

        const scroold = () => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            });
        };
        scroold();
    }, []);

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className=''
        >
            <h1 className='text-center md:text-start px-5 font-bold text-2xl my-2'>
                السلة
            </h1>
            <div className='flex pt-5 min-h-[45vh] max-h-[45vh] overflow-y-auto flex-col mt-4 px-3 md:flex-row md:flex-wrap md:justify-center'>
                {snap.items.length > 0 ? ourCardItems : <EmptyItems />}
            </div>
            <div className={`w-full border-t mt-10 border-t-gray-500 relative`}>

                <div className='px-4 w-fit absolute -top-[15%] md:-top-[10%] z-40 rounded-lg bg-[#dd2a5b] text-white text-center left-[50%] translate-x-[-50%] border border-gray-500'>
                    مدة التوصيل لا تتعدى ساعة
                </div>
                <div className='text-xl md:text-3xl flex items-center justify-between md:text-center font-[600] px-5 mt-10'>
                    الإجمالي: <span className='font-bold'>{price()} DA</span>
                </div>

                <p className='my-5 text-center text-[#777]'>
                    قضيانك علينا Dshoop
                </p>

                <motion.div
                    animate={
                        animate
                            ? {
                                x: [0, -10, 10, -10, 10, -8, 8, -8, 8, 0],
                            }
                            : {}
                    }
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                    }}
                >
                    <Link
                        onClick={handleAnimation}
                        className={`w-9/12 flex mb-5 text-white rounded-2xl justify-center py-2 mx-auto md:w-6/12 bg-[#dd2a5b]`}
                        href={`/${snap.items.length > 0 ? 'checkout' : 'card'}`}
                    >
                        التالي
                    </Link>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Card;
