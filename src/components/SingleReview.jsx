import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchSingleReview, sendReviewVote } from "../utils/api"
import { ReviewComments } from "./ReviewComments"
import { ErrorMessage } from "./ErrorComponent"

export const SingleReview = () => {
    const [fullReview, setFullReview] = useState({})
    const {review_id} = useParams()
    const [isLoading, setLoading] = useState(true)
    const [visibleVotes, setVisibleVotes] = useState(0)
    const [hasVoted, setHasVoted] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(false)
        fetchSingleReview(review_id)
            .then((res)=>{
                setFullReview(res)
                setVisibleVotes(fullReview.votes)
            })
            .catch((err)=>{
                console.log(err)
                setError(err)
            })
    }, [review_id, fullReview])


    const handleVoteUp = () => {
        setHasVoted(true)
        setVisibleVotes(visibleVotes + 1)
        sendReviewVote(review_id, +1)

    }

    const handleVoteDown = () => {
        setHasVoted(true)
        setVisibleVotes(visibleVotes - 1)
        sendReviewVote(review_id, -1)

    }

    if (isLoading) {
        return (
            <p>Loading . . .</p>
        )
    }

    if (error) {
        return <ErrorMessage error={error} />
    }

    return (
        <section className="review">
            <h2>{fullReview.title}</h2>
            <h3>Reviewed by {fullReview.owner}</h3>
            <h4>{fullReview.category} Game, designed by {fullReview.designer}</h4>
            <h5>Votes: {visibleVotes}, Date: {new Date(fullReview.created_at).toDateString()}</h5>
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