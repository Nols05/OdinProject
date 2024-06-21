import Navbar from "./components/Navbar";
import { useState } from "react";
import { Outlet } from 'react-router-dom';


export default function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  function addToCart(item) {
    setItemsInCart(prevItems => [...prevItems, item]);
  }

  function deleteFromCart(itemToRemove) {
    const index = itemsInCart.findIndex(item => item.name === itemToRemove.name);
    if (index != -1) {
      setItemsInCart(prevItems => [...prevItems.slice(0, index), ...prevItems.slice(index + 1)]);
    }
  }

  return (
    <>
      <Navbar itemsInCart={itemsInCart} />
      <Outlet context={{ itemsInCart, setItemsInCart, addToCart, deleteFromCart }} />
    </>
  );


}