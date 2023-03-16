import { useState, useContext, useEffect } from "react"
import { UserContext } from "../contexts/user"
import { deleteCommentById } from "../utils/api"

export const CommentCard = ({comment}) => {
    // console.log(comment.comment_id.toString())
    const {user} = useContext(UserContext)
    const [notOwnedByUser, setNotOwnedByUser] = useState(true)
    const [deleted, setDeleted] = useState(false)

    const handleDeleteComment = () => {
        setDeleted(true)
        deleteCommentById(comment.comment_id)
            .then((res)=>{
                if (res.status !== 204) {
                    setDeleted(false)
                }
            })
    }

    useEffect(()=>{
        if (comment.author === user.username) {
            setNotOwnedByUser(false);
        }
    },[comment.author, user.username])


    return (
            <li key={(comment.comment_id).toString()} hidden={deleted} className="commentCard">
                <p>"{comment.body}" - {comment.author}</p>
                <p><em>at {comment.created_at}</em></p>
                <p><em>Votes: {comment.votes}</em></p>
                <button disabled={notOwnedByUser} hidden={notOwnedByUser} onClick={handleDeleteComment}>Delete Comment</button>
            </li>
    )
}