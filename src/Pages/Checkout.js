import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./Subtotal"

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">

                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    className="checkout_ad"
                />

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>
                            You have no item in your basket. To buy one or to add in Basket click on "Add to Basket" next to the item
                    </p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout_title">Your Shopping Basket</h2>

                            {
                                basket?.map(item => (

                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                            }

                        </div>
                    )
                }
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <SubTotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
