import React, { useMemo } from 'react'
import { ProductType } from '../../interface/interface';
import ProductListItem from './ProductListItem/ProductListItem';
import './ProductListView.css';

type Props = {
    products: ProductType[];
    setSelectedProduct: (product: ProductType) => void;
    isFiltered: boolean;
    productLine: string;
    searchResult: ProductType[];
}
const ProductListView: React.FC<Props> = ({ products, setSelectedProduct, searchResult, isFiltered, productLine }) => {

    const productList = useMemo(() => isFiltered
        ? products.filter((product) => productLine === product.line.name)
        : searchResult.length != 0
        ? searchResult
        : products,
        [isFiltered, products, productLine, searchResult]
    )

    return (
        <main className="products-list-view">
            {/* <div className="products-container__headers"> */}
                <p className="products-list-number">{productList.length} devices</p>
                <p className="products-list-line">PRODUCT LINE</p>
                <p className="products-list-name">NAME</p>
            {/* </div> */}
            <ul className="products-list-container">
                {productList.map((product, index) => (
                    <ProductListItem
                        key={index}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                    />
                ))}
            </ul>
        </main>
    )
}

export default ProductListView