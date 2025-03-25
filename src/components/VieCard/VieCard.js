"use client"
import { useSnapshot } from 'valtio'
import state from '@/stor/stor'
import Link from 'next/link';


const VieCard = () => {

    const snap = useSnapshot(state)
    const q = () => {
        let a = 0
        snap.items.map(e => {
            a += e.q
        })
        return a
    }
    const price = () => {
        let a = 0
        snap.items.map(e => {
            a += (e.q * (e.offer ? e.newprice : e.price))
        })
        return a
    }
    return (
        <Link
            href={'/card'}
            className={`fixed z-[1000] py-2 px-2.5 flex items-center justify-between bg-[#43ae3e] text-white rounded-3xl w-10/12 md:w-6/12  bottom-5 left-[50%] translate-x-[-50%] ${snap.items.length == 0 && "hidden"}`}
        >
            <span
                className='bg-[#0d0d0d40] px-3 py-1 rounded-full'
            >{q()}</span>
            <span>عرض السلة ({price()} DA)</span>
        </Link>

    )
}

export default VieCard