import React from 'react'
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';
import './Order.css'

function Order({ id }) {
  const [{ basket }, dispatch] = useStateValue();

  const continueShopping = () => {
    basket.length = 0;
  }
  return (
    <div>
      {
        basket.length == 0 ?
          <div className="empty-cart">
            <div className="empty-cart__icon">!</div>
            <div className="empty-cart__title">Please Add Products to Checkout</div>
            <div className="empty-cart__message">
              Your cart is currently empty. Start shopping now!
            </div>
            <Link to='/'><button className="shop-now-button">Shop Now</button></Link>
          </div> :
          <div className="order-placed">
            <div className="order-placed__icon">✓</div>
            <div className="order-placed__title">Order Placed Successfully</div>
            <div className="order-placed__message">
              Thank you for your order! We are processing it and will notify you once
              it's shipped.
            </div>
            <Link to='/'><button onClick={continueShopping} className="order-placed__button">Continue Shopping</button></Link>
          </div> 
      }



    </div>
  )

}

export default Order