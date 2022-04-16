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

  const categories = products.map(a => a.line.name)
  const uniqueCategories = Array.from(new Set(categories))

  return (
    <div className="filter-container">
      <div className="filter-container__header">
        <p>Filter</p>
        <p className="close-filter-button" onClick={closeFilter}>X</p>
      </div>
      <div>
        Product Line
      </div>
      <form className="filter-container__categories">
        {uniqueCategories.map((categorie, index) => (
          // <p
          //   onClick={() => {
          //     setisFiltered(true);
          //     setProductLine(categorie)
          //   }}
          //   key={index}
          //   className="categorie">{categorie}</p>
          <div
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
              defaultChecked={productLine === categorie}
            />
            <label
              htmlFor={categorie}
              className="categorie"
            >{categorie}</label>
          </div>
        ))}
      </form>
    </div>
  )
}

export default Filter