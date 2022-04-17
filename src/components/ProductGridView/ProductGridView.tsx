import React, { useMemo } from 'react'
import { ProductType } from '../../interface/interface';
import ProductGridItem from './ProductGridItem/ProductGridItem';
import './ProductGridView.css'

type Props = {
    products: ProductType[];
    setSelectedProduct: (product: ProductType) => void
    isFiltered: boolean;
    productLine: string;
    searchResult: ProductType[] | null;
}

const ProductGridView: React.FC<Props> = ({ products, setSelectedProduct, searchResult, isFiltered, productLine }) => {

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
        <main className="products-grid-view">
            <p className="products-grid-number">{productList.length} devices</p>
            <ul className="products-grid-container">
                {productList.map((product, index) => (
                    <ProductGridItem
                        key={index}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                    />
                ))}
            </ul>
        </main>
    )
}

export default ProductGridView