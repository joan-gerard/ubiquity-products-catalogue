import React from 'react'
import './SearchBar.css';
import clear from '../../assets/close-icon.svg';



const SearchBar = () => {
  return (
    <nav className="nav-bar">
        <form className="search-bar">
            <input className="search-bar__input" type="search" placeholder="Search" />
            <button className="search-bar__clear"><img src={clear} alt="clear search" /></button>
        </form>
        <div className="filters">
            Views and Filters
        </div>
    </nav>
  )
}

export default SearchBar