import React from 'react';
import './ProductGrid.css';
import { ProductType } from '../../interface/interface';

type ProductListProps = {
    product: ProductType;
}

const ProductGrid: React.FC<ProductListProps> = (props) => {
    const imageURL = `https://static.ui.com/fingerprint/ui/icons/${props.product.icon.id}_101x101.png`

    const getProductLine = (name: any) => {
        if (name === 'Unknown') {
            return 'Other'
        }
        return name;
    }

    const ProductLine = getProductLine(props.product.line.name);

    return (
        <li className="product-grid-view">
            <article>
                <div className="icon-container">
                    <img src={imageURL} />
                </div>
                <div>
                    <div>{ProductLine}</div>
                    <div>{props.product.product.name}</div>
                </div>
            </article>
        </li>
    )
}

export default ProductGrid;