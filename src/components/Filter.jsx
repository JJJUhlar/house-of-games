import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Filter = () => {
    const [sortSelection, setSortSelection] = useState('title')
    const [orderSelection, setOrderSelection] = useState('DESC')
    let [searchParams, setSearchParams] = useSearchParams();


    const handleOrderChange = (event) => {
        setOrderSelection(event.target.value)
        setSearchParams({...searchParams}, searchParams.order_by = event.target.value) 
    }

    const handleSortChange = (event) => {
        setSortSelection(event.target.value)
        setSearchParams({...searchParams}, searchParams.sort_by = event.target.value)
    }

    return (
        <form className="filter_form">
            <fieldset >
                <legend>Filter</legend>
                <label htmlFor="sort-select"></label>
                <select name="sort" id="sort-select" value={sortSelection} 
                onChange={handleSortChange}>
                    <option value="title">title</option>
                    <option value="owner">author</option>
                    <option value="created_at">date</option>
                    <option value="votes">votes</option>
                    <option value="comment_count">comment_count</option>
                </select>
                <label htmlFor="order-select"></label>
                <select name="order" id="order-select" value={orderSelection} onChange={handleOrderChange}>
                    <option value="DESC">order descending</option>
                    <option value="ASC">order ascending</option>
                </select>
            </fieldset>
        </form>
    )
}