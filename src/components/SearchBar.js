import React from 'react';
import "./SearchBar.css"
// import {FaMagnifyingGlassLocation} from "react-icons/fa"

    const SearchBar = () => (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden"></span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search for products"
                name="s" 
            />
            <button type="submit">Search</button>
            {/* // <FaMagnifyingGlassLocation/> */}

        </form>
    ); 


export default SearchBar;