import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {fetchCommentsByReviewId} from '../utils/api'

export const ReviewComments = () => {
    const [commentsList, setCommentsList] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const {review_id} = useParams()

    useEffect(()=>{
        setLoading(false)
        fetchCommentsByReviewId(review_id)
            .then((res)=>{
                setCommentsList(res)
            })
    },[review_id])

    if (isLoading) {
        return (
            <p>Loading . . .</p>
        )
    }

    if (commentsList.length === 0) {
        return (
            <>
            <h2>Comments</h2>
            <p>No comments yet</p>
            </>
        )
    }

    return (
        <ul>
            {commentsList.map(({comment_id, author, created_at, body, votes})=>{
                return (
                    <>
                    <h2>Comments</h2>
                    <li key={comment_id} className="commentCard">
                        <p>"{body}" - {author}</p>
                        <p><em>at {created_at}</em></p>
                        <p><em>Votes: {votes}</em></p>
                    </li>
                    </>
                )
            })}
        </ul>
    )
}