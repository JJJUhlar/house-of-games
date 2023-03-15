

export const CommentCard = ({comment}) => {

    return (
        <>
            <li key={comment.comment_id} className="commentCard">
                <p>"{comment.body}" - {comment.author}</p>
                <p><em>at {comment.created_at}</em></p>
                <p><em>Votes: {comment.votes}</em></p>
                
            </li>
        </>
    )
}