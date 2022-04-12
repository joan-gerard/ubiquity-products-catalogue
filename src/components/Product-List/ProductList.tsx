import React from 'react'
import './ProductList.css';
import { ProductsInterface } from '../../interface/interface';

type ProductListProps = {
  product: ProductsInterface;
}

const ProductList: React.FC<ProductListProps> = (props) => {
  return (
      <li className="product-list-view">
        <img src={props.product.img} />
        <div>{props.product.line}</div>
        <div>{props.product.name}</div>
      </li>
  )
}

export default ProductList