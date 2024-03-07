import React, { useState, useEffect } from "react";
import "./Product.css";
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function Product() {

    const [products, setProducts] = useState([]);
    const productsCollectionRef = collection(db, "products");
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {

        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }
        getProducts();

    }, [])

    const filteredProducts = products.filter(product =>
        (product.category && product.category.some(categoryValue =>
          categoryValue.toLowerCase().includes(searchQuery.toLowerCase())
        )) ||
        (product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      
      
    const [state, dispatch] = useStateValue();

    const addToBasket = (product) => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: product.id,
                title: product.title,
                rating: product.rating,
                price: product.price,
                image: product.image
            },
        });
    };

    return (
        <>
            <input className='search-bar'
                type="text"
                placeholder='Search Product..'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            
            {filteredProducts.map((product) => {
                return (
                    <div className="product" key={product.id}>

                        <div className="product__info">
                            <p>{product.title}</p>
                            <p className="product__price">
                                <small>$ </small>
                                <strong>{product.price}</strong>
                            </p>
                            <div className="product__rating">
                                {
                                    Array(product.rating)
                                        .fill()
                                        .map((_, i) => (
                                            <p>{product.rating}</p>
                                        ))
                                }
                            </div>
                        </div>

                        <img src={product.image} />

                        <button onClick={() => addToBasket(product)}>Add to Basket</button>
                    </div>)
            })}
        </>


    )
}

export default Product
