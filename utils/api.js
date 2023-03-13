import axios from 'axios';

const api = axios.create({
    baseURL: "https://houseofboardgames.onrender.com/api"
})

export const fetchReviews = () => {
    return api.get('/reviews')
        .then((res) => {
            console.log(res)
            return res;
        })
}