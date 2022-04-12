import React from 'react'
import './Products.css';
import ProductList from '../Product-List/ProductList';
import { ProductsInterface } from '../../interface/interface';

const imgUrl = 'https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_25x25.png'

const Products = () => {
    const products: ProductsInterface[] = [
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 7 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" },
        { img: imgUrl, line: "UniFi LTE", name: "Access Point WiFi 6 In-wall" }
    ]
    return (
        <main className="products-container">
            <div className="products-container__headers">
                <p>123 Devices</p>
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