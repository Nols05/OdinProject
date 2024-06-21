/* eslint-disable react/prop-types */
import Item from "./Item";
import { useOutletContext } from "react-router-dom";


export default function CartPage() {

    const { itemsInCart, addToCart } = useOutletContext();


    function count(array, item) {
        const counts = {};

        array.forEach(item => {
            counts[item.name] = (counts[item.name] || 0) + 1;
        });

        return counts[item.name];
    }



    const uniqueItems = itemsInCart.reduce((acc, item) => {
        if (!acc.find(i => i.name === item.name)) {
            acc.push(item);
        }
        return acc;
    }, []);






    return (

        <div className="cartpage page">
            <h1>Items en tu carrito</h1>
            {
                uniqueItems.map((item) => (
                    <>
                        <div className="itemInCart">
                            <p>{count(itemsInCart, item)}x</p>
                            <Item
                                key={item.name}
                                name={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                description={item.description}
                                onClick={() => addToCart(item)}
                            />

                        </div>
                    </>

                ))
            }
        </div>

    );
}