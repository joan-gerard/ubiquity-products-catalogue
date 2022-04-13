import React from 'react'
import './ProductList.css';
import { ProductType } from '../../interface/interface';

type ProductListProps = {
  product: ProductType;
}

const ProductList: React.FC<ProductListProps> = (props) => {
  const imageURL = `https://static.ui.com/fingerprint/ui/icons/${props.product.icon.id}_25x25.png`

  const getProductLine = (name: any) => {
    if (name === 'Unknown') {
      return 'Other'
    }
    return name;
  }

  const ProductLine = getProductLine(props.product.line.name);

  return (
      <li className="product-list-view">
        <img src={imageURL} />
        <div>{ProductLine}</div>
          <div>{props.product.product.name}</div>
      </li>
  )
}

export default ProductList