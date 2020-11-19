import React from 'react';
import './Product.css';
import { useStateValue } from "../Context/StateProvider"

function Product({ id, title, price, rating, image }) {
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET', // If we have same key and value we can replace it with single name
            item: {
                id: id,            // id
                title: title,      // title
                price: price,      //price
                rating: rating,    // rating
                image: image      //image
            },
        });
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

export default Product
