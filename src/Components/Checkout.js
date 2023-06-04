import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://www.pngitem.com/pimgs/m/192-1920162_summer-special-badge-with-banner-best-offer-png.png" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {
                        basket.length == 0 ?
                            <h2 className="basketEmptyText"> Your Basket is Empty <br />
                                <Link to='/'><button className="addProductsBtn">Add Products</button></Link>
                            </h2> :
                            basket.map((product) => (
                                <CheckoutProduct
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    rating={product.rating}
                                />
                            ))
                    }

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
