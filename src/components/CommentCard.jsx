import { useState, useContext, useEffect } from "react"
import { UserContext } from "../contexts/user"
import { deleteCommentById } from "../utils/api"

export const CommentCard = ({comment}) => {

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
            console.log('could be deleted')
            setNotOwnedByUser(false);
        }
    },[comment.author, user.username])


    return (
        <>
            <li key={comment.comment_id} hidden={deleted} className="commentCard">
                <p>"{comment.body}" - {comment.author}</p>
                <p><em>at {new Date(comment.created_at).toDateString()}</em></p>
                <p><em>🗳️ {comment.votes}</em></p>
                <button disabled={notOwnedByUser} hidden={notOwnedByUser} onClick={handleDeleteComment}>Delete Comment</button>
            </li>
        </>
    )
}