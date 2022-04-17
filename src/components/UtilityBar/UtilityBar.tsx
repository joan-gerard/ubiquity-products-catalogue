import React, { FormEvent, useRef, useState } from 'react'
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
  setisFiltered: (bool: boolean) => void;
  setProductLine: (categorie: string) => void;
  productLine: string;
  setSearchResult: (products: ProductType[] | null) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({
  switchToGrid,
  switchToView,
  products,
  setProductLine,
  setSearchResult,
  productLine,
  setisFiltered }) => {
  const [isShowingFilters, setIsShowingFilters] = useState(false)

  let searchInputRef = useRef<HTMLInputElement | null>(null);

  const clearSearchInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInputRef?.current?.value) {
      searchInputRef.current.value = '';
    }
    setSearchResult(null)
  }

  const getFilters = () => {
    setIsShowingFilters(true)
  }

  const getSearchInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchInput = searchInputRef?.current?.value;
    const regex = new RegExp(searchInput || '')
    const searchResult = products.filter((product) => product.product.name.toLowerCase().match(regex))
    setSearchResult(searchResult);
  }

  return (
    <>
      <nav className="utility-bar">
        <form onSubmit={getSearchInput} className="search-bar">
          <input
            className="search-bar__input"
            type="search"
            placeholder="Search"
            ref={searchInputRef} />
          <input className="submit-btn" type="submit" value="" />
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