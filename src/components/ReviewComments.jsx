import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {fetchCommentsByReviewId} from '../utils/api'
import { PostComment } from "./PostComment"
import { CommentCard } from "./CommentCard";


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
        <>
            <h2>Comments</h2>
            <PostComment commentsList={commentsList} setCommentsList={setCommentsList}/>
            <ul>
                {commentsList.map((comment)=>{
                    return (
                        <CommentCard comment={comment} />
                    )
                })}
            </ul>
        </>
    )
}


