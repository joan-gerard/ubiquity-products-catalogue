import React from 'react'
import { ProductType } from '../../interface/interface';
import ProductListItem from './ProductListItem/ProductListItem';
import './ProductListView.css';

type Props = {
    products: ProductType[];
    setSelectedProduct: (product: ProductType) => void
}
const ProductListView: React.FC<Props> = ({ products, setSelectedProduct }) => (
    <main className="products-container--list">
        <div className="products-container__headers">
            <p>{products.length}</p>
            <p>PRODUCT LINE</p>
            <p>Name</p>
        </div>
        <ul>
            {products.map((product, index) => (
                <ProductListItem
                    key={index}
                    product={product}
                    setSelectedProduct={setSelectedProduct}
                />
            ))}
        </ul>
    </main>
)

export default ProductListView