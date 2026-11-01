import { useState } from "react";

// ProductCard Component: Reusable UI component receiving props
function ProductCard({ title, price, category, onAddToCart, onRemoveFromCart }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", width: "200px" }}>
            <h3>{title}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Category: {category}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
            <button
                style={{ backgroundColor: "#dc3545", border: "none", padding: "8px 16px", borderRadius: "20px", color: "white", marginLeft: "8px" }}
                onClick={onRemoveFromCart}
            >
                Remove
            </button>
        </div>
    );
}

// Main App Component
export default function App() {
    // Managing cart items count using useState Hook
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    const handleRemoveFromCart = () => {
        if (cartCount > 0) {
            setCartCount(cartCount - 1);
        } else {
            setCartCount(0);
        }
    };

    // Static products data array
    const products = [
        { id: 101, title: "Wireless Headphones", price: 99.99, category: "Electronics" },
        { id: 102, title: "Smart Watch", price: 149.50, category: "Gadgets" },
        { id: 103, title: "Leather Wallet", price: 35.00, category: "Fashion" }
    ];

    return (
        <div style={{ padding: "20px" }}>
            {/* Header Section */}
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
                <h1>Marketplace Products 🛒</h1>
                <div style={{ fontSize: "18px", fontWeight: "bold", background: "#f0f0f0", padding: "8px 16px", borderRadius: "20px" }}>
                    🛒 Cart Items: {cartCount}
                </div>
            </header>

            {/* Reset Action */}
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button
                    style={{ backgroundColor: "#dc3545", border: "none", padding: "8px 16px", borderRadius: "20px", color: "white", cursor: "pointer" }}
                    onClick={() => setCartCount(0)}
                >
                    Reset Cart
                </button>
            </div>

            {/* Products List Rendering using .map() */}
            <div style={{ marginTop: "20px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        onAddToCart={handleAddToCart}
                        onRemoveFromCart={handleRemoveFromCart}
                    />
                ))}
            </div>
        </div>
    );
}