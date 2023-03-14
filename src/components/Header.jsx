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
                    <li><Link to='/'><button>All Reviews</button></Link></li>
                    <ul>
                        {categories.map(({slug})=>{
                            return (
                                <li key={slug}>
                                        <Link to={`/category/${slug}`}>
                                            <button>{slug}</button>
                                        </Link>
                                    </li> 
                            )
                        })}
                    </ul>
                </nav>
        </section>
    )
}