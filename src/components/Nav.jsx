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
        <nav>
            <ul className="navList">
                <li className="navItem" key="allReviews"><Link to='/'>All Reviews</Link></li>
                {categories.map(({slug})=>{
                    return (
                        <li key={slug} className="navItem">
                            <Link to={`/category/${slug}`}>{slug}</Link>
                        </li> 
                    )
                })}
            </ul>
        </nav>
    )
}