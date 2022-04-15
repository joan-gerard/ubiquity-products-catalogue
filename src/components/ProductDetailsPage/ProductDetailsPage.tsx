import React, { useEffect, useState } from 'react'
import { ProductType } from '../../interface/interface'
import { useParams } from 'react-router-dom'
import './ProductDetailsPage.css'
import back from '../../assets/back-icon.svg'

type Props = {
    products: ProductType[];
    selectedProduct: ProductType | null
}

type ProductIDType = {
    productID: string;
}

const ProductDetailsPage: React.FC<Props> = ({ selectedProduct, products }) => {

    const productID = useParams<ProductIDType>()

    console.log('PRODUCT ID ', productID)

    const testProductDetails = products.find((pdtId) => (
        pdtId.toString() === productID
    ))
    console.log('#####', testProductDetails)


    const imageURL = `https://static.ui.com/fingerprint/ui/icons/${selectedProduct?.icon.id}_257x257.png`

    return (
        <>
            <div>
                <img src={back} alt="back button" className="back-button" />
            </div>
            <article className="product-article">
                <div className="product-article__image">
                    <img src={imageURL} />
                </div>
                <div className="product-article__info">
                    <div>
                        <p className="product-article__info-title">Product Line</p>
                        <p>{selectedProduct?.line.name}</p>
                    </div>
                    <div>
                        <p className="product-article__info-title">ID</p>
                        <p>{selectedProduct?.line.id}</p>
                    </div>
                    <div>
                        <p className="product-article__info-title">Name</p>
                        <p>{selectedProduct?.product.name}</p>
                    </div>
                    <div>
                        <p className="product-article__info-title">Short Name</p>
                        <p>{selectedProduct?.product.abbrev}</p>
                    </div>
                    {selectedProduct?.unifi ? (
                        <>
                            <div>
                                <p className="product-article__info-title">Max. Power</p>
                                <p>{selectedProduct?.unifi.network.radios.na.maxPower} W</p>
                            </div>
                            <div>
                                <p className="product-article__info-title">Speed</p>
                                <p>{selectedProduct?.unifi.network.radios.na.maxSpeedMegabitsPerSecond} Mbps</p>
                            </div>
                            <div>
                                <p className="product-article__info-title">Number of ports</p>
                                <p>{selectedProduct?.unifi.network.numberOfPorts}</p>
                            </div>
                        </>
                    ) : null}
                </div>
            </article>
        </>
    )
}

export default ProductDetailsPage
