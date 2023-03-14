import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchCategories } from "../utils/api"

export const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetchCategories()
            .then((res)=>{
                setCategories(res)
            })
    },[])

    return (
        <section>
            <h1>House of Games</h1>
                <nav>
                    <ul className="navList">
                        <li className="navItem" key="allReviews"><Link to='/'><button className="navBtn">All Reviews</button></Link></li>
                        {categories.map(({slug})=>{
                            return (
                                <li key={slug} className="navItem">
                                    <Link to={`/category/${slug}`}>
                                        <button className="navBtn">{slug}</button>
                                    </Link>
                                </li> 
                            )
                        })}
                    </ul>
                </nav>
        </section>
    )
}