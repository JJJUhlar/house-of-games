import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchReviewsByCategory } from "../utils/api"
import { ReviewCard } from "./ReviewCard"
import { Filter } from "./Filter"
import { ErrorMessage } from "./ErrorComponent"

export const Category = () => {
    const [reviewsList, setReviewsList] = useState([])
    const {category} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState({})
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsLoading(false)
        fetchReviewsByCategory(category, filter)
            .then((res)=>{
                setReviewsList(res)
            })
            .catch((err)=>{
                setError(err);
            })
    },[category,filter])
    
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
        <>
        <Filter setFilter={setFilter}/>
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
        </>
    )
}