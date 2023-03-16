import { Link } from "react-router-dom"

export const ReviewCard = ({reviewItem}) => {

    return (
        <li className="ReviewCard" key={reviewItem.review_id}>

            <img src={reviewItem.review_img_url} alt={reviewItem.description}/>
            <h2>{reviewItem.title}</h2>
            <p>Reviewed by {reviewItem.owner}</p>
            <p>In {reviewItem.category}, at {new Date(reviewItem.created_at).toDateString()}</p>
            <p><em>🗳️ {reviewItem.votes} 💬 {reviewItem.comment_count}</em></p>
            <Link to={`/reviews/${reviewItem.review_id}`}>Read More. . .</Link>               
        </li>
    )
}