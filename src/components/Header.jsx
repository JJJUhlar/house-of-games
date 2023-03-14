import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <section>
            <h1>House of Games</h1>
            <Link to='/'><button>All Reviews</button></Link>
        </section>
    )
}