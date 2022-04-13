import React, {useEffect, useState} from 'react'
import './Products.css';
import ProductList from '../Product-List/ProductList';
import { ProductType } from '../../interface/interface';

const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://static.ui.com/fingerprint/ui/public.json')
            const json = await data.json();
            setProducts(json.devices)
        }
        fetchData();
    }, [])

    console.log('PRODUCTS', products[0])
    console.log('TOTAL DEVICES', products.length)
    console.log('ID', products[0].icon.id)
    console.log('PRODUCT LINE', products[0].line.name)
    console.log('NAME', products[0].product.name)

    return (
        <main className="products-container">
            <div className="products-container__headers">
                <p>{products.length}</p>
                <p>PRODUCT LINE</p>
                <p>Name</p>
            </div>
            <ul>
                {products.map((product, index) => (
                    <ProductList key={index} product={product} />
                ))}
            </ul>
        </main>
    )
}

export default Products