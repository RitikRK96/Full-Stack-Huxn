const ProductInfo = () => {
    const product = [
        { name: "Asus", price: 1500, availability: "In Stock" },
        { name: "Macbook", price: 2500, availability: "Not In Stock" },
        { name: "Samsung", price: 1800, availability: "In Stock" },
        { name: "HP", price: 1100, availability: "In Stock" },
        { name: "Acer", price: 1500, availability: "Not In Stock" },
    ];

    return (
        <>
            {product.map(({ name, price, availability }, index) => (
                <div key={index}>
                    <h1>Brand Name: {name}</h1>
                    <h2>Price: ${price}</h2>
                    <h3>Stock Check: {availability}</h3>
                    <br />
                </div>
            ))}
        </>
    );
};

export default ProductInfo;
