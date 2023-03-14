import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { fetchReviews } from "../utils/api"
import { ReviewCard } from "./ReviewCard"

export const AllReviews = () => {
    
    const [reviewItemsList, setReviewItemsList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(false)
        fetchReviews()
            .then((res)=>{
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
                    <li className="ReviewCard" key={reviewItem.review_id}>
                        <ReviewCard reviewItem={reviewItem} />
                        <Link to={`/reviews/${reviewItem.review_id}`}><button>Read More</button></Link>
                    </li>                    
                )
            })}
        </ul>
    )
}