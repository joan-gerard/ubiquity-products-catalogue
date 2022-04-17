import React, { useMemo } from 'react'
import { ProductType } from '../../interface/interface';
import ProductListItem from './ProductListItem/ProductListItem';
import './ProductListView.css';

type Props = {
    products: ProductType[];
    setSelectedProduct: (product: ProductType) => void;
    isFiltered: boolean;
    productLine: string;
    searchResult: ProductType[] | null;
}
const ProductListView: React.FC<Props> = ({ products, setSelectedProduct, searchResult, isFiltered, productLine }) => {

    const productList = useMemo(() => isFiltered
        ? products.filter((product) => productLine === product.line.name)
        : Array.isArray(searchResult)
            ? searchResult
            : products,
        [isFiltered, products, productLine, searchResult]
    )

    if (productList?.length === 0) {
        return (
            <main className="no-results-found">
                <p>NO RESULTS FOUND!</p>
            </main>
        )

    }

    return (
        <main className="products-list-view">
            <p className="products-list-number">{productList?.length} devices</p>
            <p className="products-list-line">PRODUCT LINE</p>
            <p className="products-list-name">NAME</p>
            <ul className="products-list-container">
                {productList?.map((product, index) => (
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