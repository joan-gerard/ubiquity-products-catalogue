import React from 'react'
import { ProductType } from '../../interface/interface';
import './Filter.css'

type Props = {
  setIsShowingFilters: (a: boolean) => void;
  products: ProductType[];
  setisFiltered: any;
  setProductLine: any;
  productLine: any;
}

const Filter: React.FC<Props> = ({ setIsShowingFilters, products, setisFiltered, productLine, setProductLine }) => {

  const closeFilter = () => {
    setIsShowingFilters(false)
  }

  const clearFilters = () => {
    setisFiltered(false)
    setProductLine('')
    setIsShowingFilters(false)
  }

  const categories = products.map(a => a.line.name)
  const uniqueCategories = Array.from(new Set(categories))

  console.log('productLine: ', productLine)

  return (
    <div className="filter-container">
      <div className="filter-container__header">
        <p>Filter</p>
        <p className="filter-container__close-btn" onClick={closeFilter}>X</p>
      </div>
      <h3>
        Product Line
      </h3>
      <form className="filter-container__categorie-list">
        {uniqueCategories.map((categorie, index) => (
          <div
            className="filter-categorie"
            key={index}
            onClick={() => {
              setisFiltered(true);
              setProductLine(categorie)
              setIsShowingFilters(false)
            }}
          >
            <input
              type="radio"
              id={categorie}
              className="filter-categorie__input"
              defaultChecked={productLine === categorie}
            />
            <label
              htmlFor={categorie}
            >{categorie}</label>
          </div>
        ))}
      </form>
      <button className="clear-filter-btn" onClick={clearFilters}>Clear Filters</button>
    </div>
  )
}

export default Filter