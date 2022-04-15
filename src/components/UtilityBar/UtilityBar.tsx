import React, { useRef } from 'react'
import './UtilityBar.css';
import clear from '../../assets/close-icon.svg';
import defaultGrid from '../../assets/default-grid.svg';
import defaultList from '../../assets/default-list.svg';

type SearchBarProps = {
  switchToGrid: () => void;
  switchToView: () => void;
}


const SearchBar: React.FC<SearchBarProps> = (props) => {

  let searchInputRef = useRef<HTMLInputElement>(null);

  const clearSearchInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInputRef?.current?.value) {

      searchInputRef.current.value = '';
    }
  }

  return (
    <nav className="nav-bar">
      <form className="search-bar">
        <input
          className="search-bar__input"
          type="search"
          placeholder="Search"
          ref={searchInputRef} />
        <button onClick={(e) => clearSearchInput(e)} className="search-bar__clear"><img src={clear} alt="clear search" /></button>
      </form>
      <div className="views-filters">
        <img onClick={props.switchToView} src={defaultList} alt="List View Icon" />
        <img onClick={props.switchToGrid} src={defaultGrid} alt="Grid View Icon" />
        <p>Filter</p>
      </div>
    </nav>
  )
}

export default SearchBar