import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchSingleReview, sendReviewVote } from "../utils/api"
import { AllReviews } from "./AllReviews"
import { ReviewComments } from "./ReviewComments"

export const SingleReview = () => {
    const [fullReview, setFullReview] = useState({})
    const {review_id} = useParams()
    const [isLoading, setLoading] = useState(true)
    const [visibleVotes, setVisibleVotes] = useState(0)
    const [hasVoted, setHasVoted] = useState(false)

    useEffect(()=>{
        setLoading(false)
        fetchSingleReview(review_id)
            .then((res)=>{
                setFullReview(res)
                setVisibleVotes(fullReview.votes)
            })
    }, [review_id, fullReview])


    const handleVoteUp = () => {
        setHasVoted(true)
        setVisibleVotes(visibleVotes + 1)
        setFullReview({...fullReview}, fullReview.votes = fullReview.votes + 1)
        sendReviewVote(review_id, +1)
            .then(()=>{
                setVisibleVotes(fullReview.votes)
            })
    }

    const handleVoteDown = () => {
        setHasVoted(true)
        setVisibleVotes(visibleVotes - 1)
        setFullReview({...fullReview}, fullReview.votes = fullReview.votes - 1)
        sendReviewVote(review_id, -1)
            .then(()=>{
                setVisibleVotes(fullReview.votes)
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
            <h5>Votes: {visibleVotes}, Date: {fullReview.created_at}</h5>
            <img src={fullReview.review_img_url} alt={fullReview.title}/>
            <p>
                {fullReview.review_body}
            </p>
            <Link to='/'><button>Go back to all reviews</button></Link>
            <div className="votebuttons">
                <button onClick={handleVoteUp} disabled={hasVoted}>Up Vote 👆</button> <button onClick={handleVoteDown} disabled={hasVoted}>Down Vote 👇</button>
            </div>
            <ReviewComments />
        </section>
    )
}