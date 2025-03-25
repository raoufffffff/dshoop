"use client"
import { useState } from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { useSnapshot } from 'valtio'
import { motion } from 'motion/react'
import state from '@/stor/stor'
const CardaiatemCard = ({ e, i }) => {
    const snap = useSnapshot(state)
    const [animate, setAnimate] = useState(false);

    const handleAnimation = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000);
    };
    const add = (a) => {
        state.items = state.items.map((e) =>
            e.name === a.name ? { ...e, q: e.q + 1 } : e
        )
        handleAnimation()
    }
    const re = (a) => {
        if (a.q > 1) {
            state.items = state.items.map((e) =>
                e.name === a.name ? { ...e, q: e.q - 1 } : e
            );
            handleAnimation()
        } else {
            // Remove the item entirely if quantity reaches 0
            state.items = state.items.filter((e) => e.name !== a.name);
        }
    }
    return (
        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 + ((i / 10 + 0.1) * 2), duration: 0.3, type: "spring" }}
            className='w-full md:w-5/12 flex md:max-h-[150px] mb-3 pb-1 relative'
        >
            <div
                className='w-3/12 relative'
            >
                <motion.span
                    animate={animate ? { scale: [1, 1.25, 0.75, 1] } : {}}
                    transition={{ duration: 1 }}
                    className='absolute bg-[#3e61ae] text-white py-1 px-3 rounded-full -top-2 left-0'
                >{e.q}</motion.span>
                <img
                    src={e.img}
                />
            </div>

            <div
                className='w-6/12 flex flex-col'
            >
                <span
                >{e.name}</span>
                <div
                    className='flex mt-auto pb-2'
                >
                    <span
                        className={`font-bold ${e.offer && "line-through text-gray-400 font-normal"}`}
                    >{e.price} DA</span>
                    {e.offer && <span
                        className='font-bold ml-3'
                    >{e.newprice} DA</span>}
                </div>
            </div>
            <div
                className='w-3/12 flex flex-col items-end pr-3 py-1 justify-between'
            >
                <CiCirclePlus
                    onClick={() => {
                        add(e)
                    }}
                    size={30}
                    className='text-green-600'
                />
                <CiCircleMinus
                    onClick={() => {
                        re(e)
                    }}
                    size={30}
                    className='text-red-600'
                />

            </div>

            <div
                className='absolute bottom-0 left-[50%] translate-x-[-50%] w-11/12 h-[0.5px] bg-gray-600'
            ></div>
        </motion.div>
    )
}

export default CardaiatemCard