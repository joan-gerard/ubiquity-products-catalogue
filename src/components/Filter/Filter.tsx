import React from 'react'
import { ProductType } from '../../interface/interface';
import './Filter.css'

type Props = {
  setIsShowingFilters: (a: boolean) => void;
  products: ProductType[];
  setisFiltered: any;
  setProductLine: any
}

const Filter: React.FC<Props> = ({ setIsShowingFilters, products, setisFiltered, setProductLine }) => {

  const closeFilter = () => {
    setIsShowingFilters(false)
  }

  let categories = products.map(a => a.line.name)
  const uniqueCategories = Array.from(new Set(categories))

  console.log('ON FILTER', uniqueCategories)

  return (
    <div className="filter-container">
      <div className="filter-container__header">
        <p>Filter</p>
        <p className="close-filter-button" onClick={closeFilter}>X</p>
      </div>
      <div>
        Product Line
      </div>
      <div className="filter-container__categories">
        {uniqueCategories.map((categorie, index) => (
          <p
            onClick={() => {
              setisFiltered(true);
              setProductLine(categorie)
            }}
            key={index}
            className="categorie">{categorie}</p>
        ))}
      </div>
    </div>
  )
}

export default Filter