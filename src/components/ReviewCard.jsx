import { Link } from "react-router-dom"

export const ReviewCard = ({reviewItem}) => {

    return (
        
        <li className="ReviewCard" key={reviewItem.review_id}>

            <img src={reviewItem.review_img_url} alt={reviewItem.description}/>
            <h1>{reviewItem.title}</h1>
            <p>Reviewed by {reviewItem.owner}</p>
            <p>In {reviewItem.category}, at {reviewItem.created_at}</p>
            <p><em>votes: {reviewItem.votes} comments: {reviewItem.comment_count}</em></p>
            <Link to={`/reviews/${reviewItem.review_id}`}>Read More. . .</Link>               
        </li>
       
    )
}