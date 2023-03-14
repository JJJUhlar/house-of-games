import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchSingleReview, sendReviewVote } from "../utils/api"
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
    }, [review_id, fullReview])


    const handleVoteUp = () => {
        setFullReview({...fullReview}, fullReview.votes = fullReview.votes + 1)
        console.log(fullReview.votes)
        sendReviewVote(review_id, +1)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    const handleVoteDown = () => {
        setFullReview({...fullReview}, fullReview.votes = fullReview.votes - 1)
        console.log(fullReview.votes)
        sendReviewVote(review_id, -1)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err);
            })
    }


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
            <Link to='/'><button>Go back to all reviews</button></Link>
            <div className="votebuttons">
                <button onClick={handleVoteUp}>Up Vote 👆</button> <button onClick={handleVoteDown}>Down Vote 👇</button>
            </div>
            <ReviewComments />
        </section>
    )
}