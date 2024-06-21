import App from "../App";
import ErrorPage from "./ErrorPage";
import ItemPage from "./ItemPage";
import ShopPage from "./ShopPage"
import Home from "./Home";
import CartPage from "./CartPage";



const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "cart", element: <CartPage /> },
            { path: "shop", element: <ShopPage /> },
            { path: "shop/:item", element: <ItemPage /> }

        ]
    }
]


export default routes;
