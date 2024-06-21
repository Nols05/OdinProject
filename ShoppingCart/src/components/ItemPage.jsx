



export default function ItemPage() {
    const { itemsInCart } = useOutletContext();

    return (
        <div className="itemPage">
            <h1>Item Page</h1>
            <p>Item details go here</p>
        </div>
    );
}