/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"



export default function Item({ name, price, imageUrl, description, onClick, deleteFromCart }) {


    return (

        <div className="item">
            <Link to={`shop/${name}`} className="Link">
                <img src={imageUrl} alt={"name"} className="item_img" width="100px" height="100px"></img>
                <h2 className="item-name">{name}</h2>
            </Link>
            <h3 className="item-price">{price}</h3>
            <p className="item-description">{description}</p>
            <button onClick={onClick}>Añadir al carrito</button>
            <button onClick={deleteFromCart}>Borrar del carrito</button>
        </div>

    )
}