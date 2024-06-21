import Item from "./Item";
import itemList from "./ItemList"
import { useOutletContext } from 'react-router-dom';




export default function Home() {

    const { addToCart, deleteFromCart } = useOutletContext();

    return (

        <div className="home page">
            <h1>Bienvenido a mi tienda</h1>
            <div className="item_wrapper">
                {itemList.map((item) =>
                    <Item
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        onClick={() => addToCart(item)}
                        deleteFromCart={() => deleteFromCart(item)}
                    />
                )}
            </div>

        </div>




    );
}