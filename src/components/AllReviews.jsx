import {useEffect, useState} from 'react'
import { fetchReviews } from "../utils/api"
import { ReviewCard } from "./ReviewCard"

export const AllReviews = () => {
    
    const [reviewItemsList, setReviewItemsList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchReviews()
            .then((res)=>{
                setLoading(false)
                setReviewItemsList(res)
        })
    }, [])

    if (loading === true) {
        return (
                <p>Loading. . .</p>
        )
    }

    return (
        <ul className='ReviewsList'>
            {reviewItemsList.map((reviewItem)=>{
                return (
                    <ReviewCard reviewItem={reviewItem} />
                )
            })}
        </ul>
    )
}