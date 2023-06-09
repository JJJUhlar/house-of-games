import { postCommentToReview } from "../utils/api"
import { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../contexts/user"

export const PostComment = ({commentsList, setCommentsList}) => {
    const [newCommentText, setNewCommentText] = useState('')
    const {review_id} = useParams()
    const {user} = useContext(UserContext)
    const [afterPostText, setAfterPostText] = useState('')
    

    const handleSubmit = (event) => {
        event.preventDefault()

        if (newCommentText.length === 0) {
            setAfterPostText('Try writing something')
        } else {
            const newComment = {comment_id: commentsList.length, created_at: "Just now", author: user.username, body: newCommentText, votes: 0}
            setCommentsList([newComment, ...commentsList])
            setNewCommentText('')
    
            postCommentToReview(review_id,newCommentText,user.username)
                .then((res)=>{
                    if (res.status >= 400) {
                        setAfterPostText('Post Failed, please try again')
                        setCommentsList(commentsList.slice(1))
                    } else {
                        setAfterPostText('post submitted!')
                       
                    }
                })
        }
    }

    return (
            <form className="commentForm" onSubmit={handleSubmit}>
                <label className="commentField" htmlFor="commentBox">Add Comment:</label>
                <input className="commentField" id="commentBox" onChange={(event)=>{setNewCommentText(event.target.value)}} value={newCommentText}/>
                <button className="commentField" type="submit" >Post Comment</button>
                <p>{afterPostText}</p>
            </form>
    )
}