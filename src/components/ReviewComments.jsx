import { useState, useEffect } from "react";
import {fetchComments} from '../utils/api'

export const ReviewComments = () => {
    const [commentsList, setCommentsList] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(false)
        fetchComments(id)
            .then((res)=>{
                console.log(res)
                setCommentsList(res)
            })
    },[])

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
                        <p>Author</p>
                        <p>TimeStamp</p>
                        <p>Comment body</p>
                        <p>votes</p>
                    </li>
                )
            })}
        </ul>
    )
}