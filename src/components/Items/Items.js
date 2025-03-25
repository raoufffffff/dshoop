"use client"
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import axios from 'axios'
import PlaceholderList from '../Loading/BestPlaceHoleder'
import ItemCard from '../ItemCard/ItemCard'
import { useSearchParams } from 'next/navigation'
const Items = ({ id }) => {
    const searchparams = useSearchParams();
    const [loading, setLoading] = useState(true)
    const [BestOffer, setBestOffer] = useState([])
    useEffect(() => {
        const getItems = async () => {
            try {
                await axios.put('https://daily-api-tan.vercel.app/item/type',
                    {
                        offer: (id === "offer"),
                        type: id
                    }
                )
                    .then(res => {

                        setBestOffer(res.data.result)
                        setLoading(false)
                    })

            } catch (error) {
                console.log(error);
            }
        }
        getItems()
    }, [id])

    return (
        <div
            className=' w-full pb-5  ml-auto flex justify-center items-center flex-wrap '
        >
            <AnimatePresence>

                {
                    loading ? <PlaceholderList /> :
                        searchparams.get("typeof") ?
                            BestOffer.filter(e => e.typeoftype == searchparams.get("typeof")).map((e, i) => (
                                <ItemCard key={i} item={e} />
                            ))
                            :
                            BestOffer.map((e, i) => (
                                <ItemCard key={i} item={e} />
                            ))
                }
            </AnimatePresence>
        </div>
    )
}

export default Items