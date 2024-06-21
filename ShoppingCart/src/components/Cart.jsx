/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


export default function Cart({ itemsInCart }) {


    return (
        <div className="cart">
            <Link to="/cart" className="cart_btn">
                <img className="cart_img" src="https://www.svgrepo.com/show/419033/cart-trolley-shop.svg"></img>
            </Link>
            <div className="number_bubble">{itemsInCart.length}</div>

        </div>
    )
}