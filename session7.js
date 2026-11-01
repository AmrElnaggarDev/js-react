function ProductCard () {
    const title = "Headphone Wireless";
    const price = 99;

    return (
        React.createElement("div", { className: "card" },
            React.createElement("h3", null, title),
            React.createElement("p", null, `$${price.toFixed(2)}`),
            React.createElement("button", null, "Add to Cart")
        )
    );
}