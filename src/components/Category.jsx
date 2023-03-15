import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchReviewsByCategory } from "../utils/api"
import { ReviewCard } from "./ReviewCard"
import { Filter } from "./Filter"

export const Category = () => {
    const [reviewsList, setReviewsList] = useState([])
    const {category} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState({})


    useEffect(()=>{
        setIsLoading(false)
        fetchReviewsByCategory(category)
            .then((res)=>{
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