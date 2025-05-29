import { useState } from "react";

const ShoppingList2 = () => {

    const [items, setItems] = useState([])
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !quantity) return;
        const newItem = { name, quantity: parseInt(quantity) }

        setItems((prevItems) => [...prevItems, newItem])
        setName("")
        setQuantity("")

    }
    return (
        <>
            <div className="container">
                <h1 className="title">Shopping List</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} className="input" />
                    <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="input" />
                    <button type="submit" className="btn">Add Item</button>
                </form>
                <ul className="list">
                    {items.map((items, index) => (
                        <li key={index} className="list-item">
                            {items.name} - <span className="quantity">Quantity: {items.quantity}</span>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ShoppingList2