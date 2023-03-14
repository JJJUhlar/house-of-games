import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewsByCategory } from "../utils/api"

export const Category = () => {
    const [reviewsList, setReviewsList] = useState([])
    const {category} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(false)
        fetchReviewsByCategory(category)
            .then((res)=>{
                console.log(res)
                setReviewsList(res)
            })
    },[])
    
    if (isLoading) {
        return (
            <div>
                Loading . . .
            </div>
        )
    }

    return (
        <div>
            {reviewsList.map((review)=>{
                console.log(review)
                return (
                    <li>review</li>
                )
            })}
        </div>
    )
}