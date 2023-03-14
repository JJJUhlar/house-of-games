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
                console.log(res)
                setCommentsList(res)
            })
    },[review_id])

    if (isLoading) {
        return (
            <p>Loading . . .</p>
        )
    }

    return (
        <ul>
            {commentsList.map(({comment_id, author, created_at, body, votes})=>{
                return (
                    <li key={comment_id} className="commentCard">
                        <p>"{body}" - {author}</p>
                        <p><em>at {created_at}</em></p>
                        <p><em>Votes: {votes}</em></p>
                    </li>
                )
            })}
        </ul>
    )
}