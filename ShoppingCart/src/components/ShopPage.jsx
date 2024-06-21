/* eslint-disable react/prop-types */
import itemList from "./ItemList";
import Item from "./Item";
import { useOutletContext } from 'react-router-dom';



export default function ShopPage() {

    const { itemsInCart, setItemsInCart } = useOutletContext();

    function addToCart(item) {
        setItemsInCart(prevItems => [...prevItems, item]);
    }

    return (
        <div className="shopPage page">
            <h1>Shop Page</h1>
            <div className="item_wrapper">
                {itemList.map(item => (
                    <Item
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        onClick={() => addToCart(item)}
                    />
                ))}
            </div>
        </div>
    );
}