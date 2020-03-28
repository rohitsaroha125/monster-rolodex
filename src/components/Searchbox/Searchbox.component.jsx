import React from 'react'
import './Searchbox.style.css'

export const Searchbox=({placeholder, handleChange}) => {
    return(
        <input className="search" placeholder={placeholder} type="search" onChange={handleChange}></input>
    )
}