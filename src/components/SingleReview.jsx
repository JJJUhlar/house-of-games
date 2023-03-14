import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchSingleReview } from "../utils/api"
import { AllReviews } from "./AllReviews"
import { ReviewComments } from "./ReviewComments"

export const SingleReview = () => {
    const [fullReview, setFullReview] = useState({})
    const {review_id} = useParams()
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(false)
        fetchSingleReview(review_id)
            .then((res)=>{
                setFullReview(res)
            })
    }, [review_id])

    if (isLoading) {
        return (
            <p>Loading . . .</p>
        )
    }

    return (
        <section className="review">
            <h2>{fullReview.title}</h2>
            <h3>Reviewed by {fullReview.owner}</h3>
            <h4>{fullReview.category} Game, designed by {fullReview.designer}</h4>
            <h5>Votes: {fullReview.votes}, Date: {fullReview.created_at}</h5>
            <img src={fullReview.review_img_url} alt={fullReview.title}/>
            <p>
                {fullReview.review_body}
            </p>
            <Link to={<AllReviews />}><button>Go back</button></Link>
            <ReviewComments />
        </section>
    )
}