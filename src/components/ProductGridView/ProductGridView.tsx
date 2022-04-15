import React from 'react'
import { ProductType } from '../../interface/interface';
import ProductGridItem from './ProductGridItem/ProductGridItem';
import './ProductGridView.css'

type Props = {
    products: ProductType[];
    setSelectedProduct: (product: ProductType) => void
    isFiltered: boolean;
    productLine: string;
}

const ProductGridView: React.FC<Props> = ({ products, setSelectedProduct, isFiltered, productLine }) => (
    <main>
        <p>{products.length}</p>
        <ul className="products-container--grid">
            {products.map((product, index) => (
                <ProductGridItem
                    key={index}
                    product={product}
                    setSelectedProduct={setSelectedProduct}
                />
            ))}
        </ul>
    </main>
)

export default ProductGridView