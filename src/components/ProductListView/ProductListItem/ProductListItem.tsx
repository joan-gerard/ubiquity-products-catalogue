import React from 'react'
import './ProductListItem.css';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../../interface/interface';

// import { getProductDetails } from '../../utils/utils'

type ProductListProps = {
  product: ProductType;
  setSelectedProduct: (product: ProductType) => void
}

const ProductListItem: React.FC<ProductListProps> = ({product, setSelectedProduct}) => {
  const imageURL = `https://static.ui.com/fingerprint/ui/icons/${product.icon.id}_25x25.png`

  const navigate = useNavigate();

  const getProductDetails = () => {
    setSelectedProduct(product)
    navigate(`/devices/${product.icon.id}`);
  }

  return (
    <li onClick={getProductDetails} className="product--list-view">
      <img className="product-img" src={imageURL} />
      <div className="product-line">{product.line.name}</div>
      <div className="product-name">{product.product.name}</div>
    </li>
  )
}

export default ProductListItem
