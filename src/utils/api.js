import axios from 'axios';

const api = axios.create({
    baseURL: "https://houseofboardgames.onrender.com/api/"
})


export const fetchSingleReview = (review_id) => {

    return api.get(`reviews/${review_id}`)
        .then((res)=>{
            return res.data.review;
    })
}

export const fetchCommentsByReviewId = (review_id) => {
    return api.get(`reviews/${review_id}/comments`)
        .then((res)=>{
            return res.data.comments
        })
}

export const postCommentToReview = (review_id, comment, author) => {
    return api.post(`reviews/${review_id}/comments`, {username: author, body: comment})
        .then((res)=>{
            console.log(res)
            return res
        })
}

export const fetchReviews = () => {
    return api.get('reviews')
        .then((res) => {
            return res.data.reviews;
        })
}

export const sendReviewVote = (review_id, vote) => {
    return api.patch(`reviews/${review_id}`, {inc_votes: vote})
        .then((res)=>{
            console.log(res)
            return res
        })
}

export const fetchCategories = () => {
    return api.get(`categories`)
        .then((res)=>{
            return res.data.categories
        })
}