import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../Context/StateProvider"
import { auth } from '../firebase';

function Header() {
    // const [state, dispatch] = useStateValue()  -- we can destructure it
    const [{ basket, user }] = useStateValue();

    console.log(basket, "basket")

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/* logo left -> img */}
            <Link to="/login">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon"
                />
            </Link>

            {/* search bar */}
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/*  links */}
            <div className="header_nav">

                <Link to={!user && "/login"} className="header_link">
                    <div className="header_option" onClick={login}>
                        <span className="header_optionLine1">Hello {user?.email}</span>
                        <span className="header_optionLine2">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Returns</span>
                        <span className="header_optionLine2"> & Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Your</span>
                        <span className="header_optionLine2">Prime</span>
                    </div>
                </Link>

                {/* basket icon with number */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon className="" />
                        <span className="header_optionLine2 header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>


        </nav >
    )
}

export default Header
