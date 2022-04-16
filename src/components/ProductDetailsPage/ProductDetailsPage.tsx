import React, { useEffect, useMemo, useState } from 'react'
import { ProductType } from '../../interface/interface'
import { useParams, useNavigate } from 'react-router-dom'
import './ProductDetailsPage.css'
import back from '../../assets/back-icon.svg'

type Props = {
    products: ProductType[];
    selectedProduct: ProductType | null
}

type ProductIDParam = {
    id: string;
}

const ProductDetailsPage: React.FC<Props> = ({ selectedProduct, products }) => {

    const { id: productID } = useParams<ProductIDParam>()

    console.log('PRODUCT ID ', productID)

    const chosenProduct = useMemo(() => selectedProduct
        ? selectedProduct
        : products.find((product) => product.icon.id === productID),
        [selectedProduct, products, productID]
    )

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }


    const imageURL = `https://static.ui.com/fingerprint/ui/icons/${chosenProduct?.icon.id}_257x257.png`

    return (
        <>
            <div>
                <img
                    src={back}
                    alt="back button"
                    className="back-button"
                    onClick={goBack}
                />
            </div>
            <article className="product-article">
                <div className="product-article__image">
                    <img src={imageURL} />
                </div>
                <div className="product-article__info">
                    <div>
                        <p className="product-article__info-title">Product Line</p>
                        <p>{chosenProduct?.line.name}</p>
                    </div>
                    <div>
                        <p className="product-article__info-title">ID</p>
                        <p>{chosenProduct?.line.id}</p>
                    </div>
                    <div>
                        <p className="product-article__info-title">Name</p>
                        <p>{chosenProduct?.product.name}</p>
                    </div>
                    <div>
                        <p className="product-article__info-title">Short Name</p>
                        <p>{chosenProduct?.product.abbrev}</p>
                    </div>
                    {chosenProduct?.unifi ? (
                        <>
                            <div>
                                <p className="product-article__info-title">Max. Power</p>
                                <p>{chosenProduct?.unifi.network.radios.na.maxPower} W</p>
                            </div>
                            <div>
                                <p className="product-article__info-title">Speed</p>
                                <p>{chosenProduct?.unifi.network.radios.na.maxSpeedMegabitsPerSecond} Mbps</p>
                            </div>
                            <div>
                                <p className="product-article__info-title">Number of ports</p>
                                <p>{chosenProduct?.unifi.network.numberOfPorts}</p>
                            </div>
                        </>
                    ) : null}
                </div>
            </article>
        </>
    )
}

export default ProductDetailsPage
