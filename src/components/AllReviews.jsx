import {useEffect, useState} from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { fetchReviews } from "../utils/api"
import { ReviewCard } from "./ReviewCard"
import { Filter } from './Filter'
import { ErrorMessage } from './ErrorComponent'

export const AllReviews = () => {
    const [error, setError] = useState(null)
    const [reviewItemsList, setReviewItemsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
        
    const sort_by = searchParams.get('sort_by')
    const order_by = searchParams.get('order_by')

    useEffect(()=>{
        
        setLoading(false)
        fetchReviews({sort_by, order_by})
            .then((res)=>{
                setReviewItemsList(res)
            })
            .catch((err)=>{
                setError(err);
            })
    }, [sort_by, order_by, searchParams, setSearchParams])

    if (loading === true) {
        return (
                <p>Loading. . .</p>
        )
    }

    if (error) {
        return <ErrorMessage error={error} />
    }

    return (
        <ul className='reviews_list'>
            {reviewItemsList.map((reviewItem)=>{
                return (
                        <ReviewCard reviewItem={reviewItem} />
                )
            })}
        </ul>
    )
}