/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cart from "./Cart"

export default function Navbar({ itemsInCart }) {

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Cart itemsInCart={itemsInCart} />
        </div>
    );


}