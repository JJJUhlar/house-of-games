import { useParams } from "react-router-dom"

export const Category = () => {

    const {category} = useParams()
    console.log(category)
    
    return (
        <div>

        </div>
    )
}