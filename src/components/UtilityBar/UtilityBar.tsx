import React, { useRef, useState } from 'react'
import './UtilityBar.css';
import clear from '../../assets/close-icon.svg';
import defaultGrid from '../../assets/default-grid.svg';
import defaultList from '../../assets/default-list.svg';
import Filter from '../Filter/Filter';
import { ProductType } from '../../interface/interface';

type SearchBarProps = {
  switchToGrid: () => void;
  switchToView: () => void;
  products: ProductType[];
  setisFiltered: any;
  setProductLine: any;
  productLine: any;
}


const SearchBar: React.FC<SearchBarProps> = ({
  switchToGrid,
  switchToView,
  products,
  setProductLine,
  productLine,
  setisFiltered }) => {
  const [isShowingFilters, setIsShowingFilters] = useState(false)

  let searchInputRef = useRef<HTMLInputElement>(null);

  const clearSearchInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInputRef?.current?.value) {

      searchInputRef.current.value = '';
    }
  }
  console.log('isShowingFilters: ', isShowingFilters)

  const getFilters = () => {
    setIsShowingFilters(true)
  }

  return (
    <>
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
          <img onClick={switchToView} src={defaultList} alt="List View Icon" />
          <img onClick={switchToGrid} src={defaultGrid} alt="Grid View Icon" />
          <p onClick={getFilters}>Filter</p>
          {isShowingFilters ? (
            <Filter
              setIsShowingFilters={setIsShowingFilters}
              products={products}
              setisFiltered={setisFiltered}
              setProductLine={setProductLine}
              productLine={productLine}
            />
          ) : null}
        </div>
      </nav>
    </>
  )
}

export default SearchBar