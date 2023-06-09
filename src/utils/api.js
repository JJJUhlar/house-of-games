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
            return res
        })
}

export const fetchReviews = (filter) => {

    let url = `reviews?`

    if (filter.sort_by) {
        url += `sort_by=${filter.sort_by}&`
    }

    if (filter.order_by) {
        url += `order=${filter.order_by}`
    }
   
    return api.get(url)
        .then((res) => {
            return res.data.reviews;
        })
}

export const sendReviewVote = (review_id, vote) => {
    return api.patch(`reviews/${review_id}`, {inc_votes: vote})
        .then((res)=>{
            return res
        })
}

export const fetchCategories = () => {
    return api.get(`categories`)
        .then((res)=>{
            return res.data.categories
        })
}

export const fetchReviewsByCategory = (category, filter) => {
    let url = `reviews?category=${category}&`

    if (filter.sort_by) {
        url += `sort_by=${filter.sort_by}&`
    }

    if (filter.order_by) {
        url += `order=${filter.order_by}`
    }

    return api.get(url)
        .then((res)=>{
            return res.data.reviews;
        })
}
// return api.get(path, {
//      params: {
//          sort_by: sort_by,
//          order_by: order_by,
//          limit: 20
//          category: category 
// }
// })

export const deleteCommentById = (comment_id) => {
    return api.delete(`comments/${comment_id}`)
        .then((res)=>{
            return res
        })
}