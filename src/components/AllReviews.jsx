import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { fetchReviews } from "../utils/api"
import { ReviewCard } from "./ReviewCard"
import { Filter } from './Filter'
import { ErrorMessage } from './ErrorComponent'

export const AllReviews = () => {
    const [error, setError] = useState(null)
    const [reviewItemsList, setReviewItemsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState({})

    useEffect(()=>{
        setLoading(false)
        fetchReviews(filter)
            .then((res)=>{
                setReviewItemsList(res)
            })
            .catch((err)=>{
                setError(err);
            })
    }, [filter])

    if (loading === true) {
        return (
                <p>Loading. . .</p>
        )
    }

    if (error) {
        return <ErrorMessage error={error} />
    }

    return (
        <>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className='ReviewsList'>
                {reviewItemsList.map((reviewItem)=>{
                    return (
                        <li className="ReviewCard" key={reviewItem.review_id}>
                            <ReviewCard reviewItem={reviewItem} />
                            <Link to={`/reviews/${reviewItem.review_id}`}><button>Read More</button></Link>
                        </li>                    
                    )
                })}
            </ul>
        </>
    )
}