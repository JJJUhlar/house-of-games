import { useEffect, useState } from "react"
import { useParams, Link, useSearchParams } from "react-router-dom"
import { fetchReviewsByCategory } from "../utils/api"
import { ReviewCard } from "./ReviewCard"
import { Filter } from "./Filter"
import { ErrorMessage } from "./ErrorComponent"

export const Category = ({filter}) => {
    const [reviewsList, setReviewsList] = useState([])
    const {category} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const [searchParams, setSearchParams] = useSearchParams()
        
    const sort_by = searchParams.get('sort_by')
    const order_by = searchParams.get('order_by')


    useEffect(()=>{
        setIsLoading(false)
        fetchReviewsByCategory(category, {sort_by, order_by})
            .then((res)=>{
                setReviewsList(res)
            })
            .catch((err)=>{
                setError(err);
            })
    },[category,sort_by, order_by])
    
    if (isLoading) {
        return (
            <div>
                Loading . . .
            </div>
        )
    }

    if (error) {
        return <ErrorMessage error={error} />
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