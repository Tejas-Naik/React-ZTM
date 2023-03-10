import './search-box.styles.css'
import React from 'react'

function SearchBox({ className, placeholder, onChangeHandler }) {
    return (
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )
}

export default SearchBox;