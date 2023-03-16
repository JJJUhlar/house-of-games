import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { fetchReviews } from "../utils/api"
import { ReviewCard } from "./ReviewCard"
import { Filter } from './Filter'

export const AllReviews = () => {
    
    const [reviewItemsList, setReviewItemsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState({})

    useEffect(()=>{
        setLoading(false)
        fetchReviews(filter)
            .then((res)=>{
                setReviewItemsList(res)
        })
    }, [filter])

    if (loading === true) {
        return (
                <p>Loading. . .</p>
        )
    }

    return (
        <>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className='ReviewsList'>
                {reviewItemsList.map((reviewItem)=>{
                    return (
                            <ReviewCard reviewItem={reviewItem} />
                    )
                })}
            </ul>
        </>
    )
}