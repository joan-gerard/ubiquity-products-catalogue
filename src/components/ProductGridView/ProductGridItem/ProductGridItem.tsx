import React from 'react';
import './ProductGridItem.css';
import { ProductType } from '../../../interface/interface';
import { useNavigate } from 'react-router-dom';

type ProductListProps = {
    product: ProductType;
    setSelectedProduct: (product: ProductType) => void
}

const ProductGridItem: React.FC<ProductListProps> = ({ product, setSelectedProduct }) => {
    const imageURL = `https://static.ui.com/fingerprint/ui/icons/${product.icon.id}_101x101.png`

    const navigate = useNavigate();


    const getProductDetails = () => {
        setSelectedProduct(product)
        navigate(`/devices/${product.icon.id}`);
    }

    return (
        <li onClick={getProductDetails} className="product--grid-view">
            <article>
                <div className="product-img-container">
                    <img src={imageURL} alt="Product Image" />
                </div>
                <div className="product-info-container">
                    <p>{product.product.name}</p>
                    <p>{product.line.name}</p>
                </div>
            </article>
        </li>
    )
}

export default ProductGridItem;