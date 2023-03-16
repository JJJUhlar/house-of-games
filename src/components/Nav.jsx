import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchCategories } from "../utils/api"

export const Nav = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(()=>{
            fetchCategories()
                .then((res)=>{
                    setCategories(res)
                })
        },[])

    return (
        
            <ul className="nav_list">
                <Link to='/'><li className="nav_item" key="allReviews">All Reviews</li></Link>
                {categories.map(({slug})=>{
                    return (
                        <Link to={`/category/${slug}`}>
                            <li key={slug} className="nav_item">{slug}</li>
                        </Link>
                    )
                })}
            </ul>
        
    )
}