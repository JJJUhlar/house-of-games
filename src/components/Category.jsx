import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchReviewsByCategory } from "../utils/api"
import { ReviewCard } from "./ReviewCard"

export const Category = () => {
    const [reviewsList, setReviewsList] = useState([])
    const {category} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(false)
        fetchReviewsByCategory(category)
            .then((res)=>{
                console.log(res)
                setReviewsList(res)
            })
    },[category])
    
    if (isLoading) {
        return (
            <div>
                Loading . . .
            </div>
        )
    }

    return (
        <ul className='ReviewsList'>
            {reviewsList.map((review)=>{
                return (
                    <li key={review.review_id}>
                        <ReviewCard reviewItem={review} />
                        <Link to={`/reviews/${review.review_id}`}><button>Read More</button></Link>
                    </li>
                )
            })}
        </ul>
    )
}