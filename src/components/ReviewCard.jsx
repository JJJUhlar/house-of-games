export const ReviewCard = ({reviewItem}) => {

    return (
        
        <>
            <img src={reviewItem.review_img_url} alt={reviewItem.description}/>
            <h1>{reviewItem.title}</h1>
            <p>Reviewed by {reviewItem.owner}</p>
            <p>In {reviewItem.category}, at {new Date(reviewItem.created_at).toDateString()}</p>
            <p><em>votes: {reviewItem.votes} comments: {reviewItem.comment_count}</em></p>
        </>
       
    )
}