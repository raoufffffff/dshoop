"use client"
import React, { useEffect, useState } from 'react'
import BestOfferCard from './BestOfferCard'
import axios from 'axios'
import PlaceholderList from '../Loading/BestPlaceHoleder'
const BestOffer = () => {
    const [Loading, setLoading] = useState(true)
    const [BestOffer, setBestOffer] = useState([])
    useEffect(() => {
        const getBestOffer = async () => {
            try {
                await axios.put('https://daily-api-tan.vercel.app/item/type',
                    { offer: true }
                )
                    .then(res => {
                        setBestOffer(res.data.result)
                    })
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        getBestOffer()
    }, [])
    const ourBest = BestOffer.filter(e => e.offer).map((e, i) => (
        <BestOfferCard key={i} item={e} />
    ))
    return (
        <div
            className='w-full  flex justify-center items-center flex-wrap  my-2.5'
        >{Loading ?
            <PlaceholderList />
            : ourBest}</div>
    )
}


export default BestOffer