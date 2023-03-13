


export const fetchSingleReview = (review_id) => {

    api.get(`reviews/${review_id}`)
        .then((res)=>{
            console.log(res.data.review)
            return res.data.review;
    })
}

export const fetchCommentsByReviewId = (review_id) => {

    api.get(`reviews/${review_id}/comments`)
        .then((res)=>{
            console.log(res.data.comments)
            return res.data.comments
        })
}

export const postCommentToReview = (review_id, comment, author) => {
    api.post(`reviews/${review_id}/comments`)
        .then((res)=>{
            console.log(res)
            return res
        })
}