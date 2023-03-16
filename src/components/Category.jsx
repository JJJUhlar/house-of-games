import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchReviewsByCategory } from "../utils/api"
import { ReviewCard } from "./ReviewCard"

export const Category = ({filter}) => {
    const [reviewsList, setReviewsList] = useState([])
    const {category} = useParams()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
        setIsLoading(false)
        fetchReviewsByCategory(category, filter)
            .then((res)=>{
                setReviewsList(res)
            })
    },[category,filter])
    
    if (isLoading) {
        return (
            <div>
                Loading . . .
            </div>
        )
    }

    return (
        <ul className='reviews_list'>
            {reviewsList.map((review)=>{
                return (
                    <li key={review.review_id}>
                        <ReviewCard reviewItem={review} />
                    </li>
                )
            })}
        </ul>
    )
}