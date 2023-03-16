import { Link } from "react-router-dom"

export const ReviewCard = ({reviewItem}) => {

    return (
        <li className="review_card" key={reviewItem.review_id}>
            <img src={reviewItem.review_img_url} alt={reviewItem.description}/>
            <section className="review_card__text">

            <h2>{reviewItem.title}</h2>
            <p>Reviewed by {reviewItem.owner}
            <br />
            In {reviewItem.category}, at {new Date(reviewItem.created_at).toDateString()}
            <br />
            <br />
            🗳️ {reviewItem.votes} 💬 {reviewItem.comment_count}
            </p>
            
            <div className="review_card_btn-container">
                <Link className="review_card__btn" to={`/reviews/${reviewItem.review_id}`}><strong>Read More . . .</strong> </Link>               
            </div>
            </section>
        </li>
    )
}