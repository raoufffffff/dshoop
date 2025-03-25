"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { useSnapshot } from 'valtio'
import state from '@/stor/stor'
import { useSearchParams } from 'next/navigation'
import BestOfferCard from '@/components/BestOffer/BestOfferCard'
import PlaceholderList from '@/components/Loading/BestPlaceHoleder'
import VieCard from '@/components/VieCard/VieCard'


const Search = () => {

    const [Loading, setLoading] = useState(true)
    const snap = useSnapshot(state);

    const searchParams = useSearchParams()
    const [items, setitems] = useState([])
    useEffect(() => {
        const getItem = async () => {
            try {
                const res = await axios.get("https://daily-api-tan.vercel.app/item")
                setitems(res.data.result)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getItem()
    }, [searchParams])
    const filteredItems = items.filter(e => e.name.includes(searchParams.get("to").toUpperCase()))
    const ourBest = filteredItems.map((e, i) => (
        <BestOfferCard key={i} item={e} />
    ))
    return (
        <div
            className='w-full'
        >
            <h1
                className='font-bold text-xl my-3 px-5'
            >نتائج البحث عن {`"`}{searchParams.get("to")}{`"`}</h1>
            <div
                className='w-full  flex justify-center items-center flex-wrap  my-2.5'
            >{Loading ?
                <PlaceholderList />
                : ourBest}</div>
            <AnimatePresence>
                <VieCard /></AnimatePresence>
        </div>
    )
}

export default Search