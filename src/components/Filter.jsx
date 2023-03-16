import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Filter = () => {
    const [sortSelection, setSortSelection] = useState('title')
    const [orderSelection, setOrderSelection] = useState('DESC')
    let [searchParams, setSearchParams] = useSearchParams();
    
    const handleFilterSubmit = (event) => {
        event.preventDefault();
        setSearchParams({
            sort_by: sortSelection,
            order_by: orderSelection
        })
    }

    return (
        <form onSubmit={handleFilterSubmit}>
            <fieldset className="filterMenu">
                <legend>Filter</legend>
                <label htmlFor="sort-select">Sort By</label>
                <select name="sort" id="sort-select" value={sortSelection} onChange={(event)=> setSortSelection(event.target.value)}>
                    <option value="title">title</option>
                    <option value="owner">author</option>
                    <option value="created_at">date</option>
                    <option value="votes">votes</option>
                    <option value="comment_count">comment_count</option>
                </select>
                <label htmlFor="order-select">Order</label>
                <select name="order" id="order-select" value={orderSelection} onChange={(event)=> setOrderSelection(event.target.value)}>
                    <option value="DESC">descending</option>
                    <option value="ASC">ascending</option>
                </select>
                <button type="submit">Apply filters</button>
            </fieldset>
        </form>
    )
}