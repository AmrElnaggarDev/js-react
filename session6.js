// Session 6: Asynchronous JavaScript, Fetch API, and Async/Await

// Basic Async/Await with real API fetch and error handling
async function fetchMarketplaceImages() {
    try {
        console.log("1. Sending request to server...");

        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=3");

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const images = await response.json();
        console.log("2. Data fetched successfully:", images);

    } catch (error) {
        console.log("❌ Failed to connect to server:", error.message);
    }
}
// fetchMarketplaceImages();

// Simulating custom API with a Promise and setTimeout
function mockFetchApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockData = [
                { id: 1, title: "Pyramids", price: 30 },
                { id: 2, title: "Nile River", price: 0 }
            ];
            resolve(mockData);
        }, 2000); // 2 seconds delay
    });
}

async function getMarketplaceData() {
    try {
        console.log("1. Requesting data from mock server...");
        const images = await mockFetchApi(); // Pauses execution until promise resolves
        console.log("2. Data received successfully!");
        console.log("3. Available images:", images);
    } catch (error) {
        console.log("❌ Error occurred:", error.message);
    }
}
// getMarketplaceData();
// console.log("4. This line executes immediately outside the async function!");

// Fetching and formatting user data from API
async function getProducts() {
    try {
        console.log("Ready to get the data...");

        const response = await fetch("https://reqres.in/api/users?page=1");
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Data fetched successfully");

        const users = result.data;
        const formattedData = users.map(user => ({
            id: user.id,
            fullname: `${user.first_name} ${user.last_name}`,
            email: user.email,
            avatar: user.avatar
        }));

        console.table(formattedData);

    } catch (error) {
        console.log("Error while fetching the data : ", error.message);
    }
}
// getProducts();

// --- Task: Comprehensive Async, Array Methods & Closures Integration ---
async function fetchProductsFromAPI() {
    try {
        console.log("1. Sending request to the server...");

        const response = await fetch("https://dummyjson.com/products?limit=5");
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const result = await response.json();
        return result.products;

    } catch (error) {
        console.log("Error while fetching the products : ", error.message);
    }
}

function processMarketplaceData(products) {
    // 1. Filter products with price greater than 20
    const greaterThan20 = products.filter(product => product.price > 20);

    // 2. Map with destructuring to format strings
    const mappedProducts = products.map(({ title, price }) => `Product: ${title} | Price: $${price}`);

    // 3. Reduce to calculate total price
    const totalPrice = products.reduce((total, product) => total + product.price, 0);

    console.log("Products with price greater than 20:", greaterThan20);
    console.log("Formatted Products:", mappedProducts);
    console.log("Total Price of all products:", totalPrice);
}

// Closure for stateful Cart management
function createCart() {
    let cart = [];
    return function(action, item = null) {
        if (action === "ADD") {
            cart = [...cart, item];
            console.log("Item added to cart:", item.title);
        }
        else if (action === "GET_TOTAL") {
            const total = cart.reduce((sum, product) => sum + product.price, 0);
            console.log("Total cart value:", total);
            return total;
        }
    }
}

async function runMarketplaceTest() {
    const products = await fetchProductsFromAPI();

    if (products) {
        console.log("\n--- Processing Marketplace Data ---");
        processMarketplaceData(products);

        console.log("\n--- Testing Cart Manager (Closure) ---");
        const myCart = createCart();

        myCart("ADD", products[0]);
        myCart("ADD", products[1]);

        myCart("GET_TOTAL");
    }
}

runMarketplaceTest();