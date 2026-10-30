// Session 3: Scope, Closures, and Callbacks

// Variable Scope: var vs let
function checkScope() {
    if (true) {
        var discountCode = "SAVE10";    // Function-scoped
        let couponDiscount = 10;        // Block-scoped
    }

    console.log("Discount Code:", discountCode);
    // console.log("Coupon Discount:", couponDiscount); // ReferenceError
}
checkScope();

// Closures: Function retaining access to outer scope variables
function createCart() {
    let itemsCount = 0;

    return function addItem() {
        itemsCount++;
        console.log("One item is added and the count : ", itemsCount);
    };
}
const mycart = createCart();

mycart();
mycart();
mycart();

// Callbacks: Passing a function as an argument
function processImages(images, callback) {
    for (let i = 0; i < images.length; i++) {
        callback(images[i]);
    }
}

const marketplaceImages = ["Sunset.jpg", "Sea.jpg", "Forest.jpg"];
processImages(marketplaceImages, function(image) {
    console.log("Processing image:", image);
});

// --- Task ---
// Closure for dynamic discount calculation
function createDiscountCalculator(discountRate) {
    return function(price) {
        return price - (price * discountRate);
    };
}

const blackFridayDiscount = createDiscountCalculator(0.2);
const vipDiscount = createDiscountCalculator(0.5);
const imagePrice = 100;

console.log("Black Friday Price:", blackFridayDiscount(imagePrice));
console.log("VIP Price:", vipDiscount(imagePrice));

// Closure for stateful Cart Manager
function createCartManager() {
    let cart = [];
    return function(action, item = null) {
        if (action === "ADD") {
            cart = [...cart, item]; // Immutable state update
        }
        else if (action === "SHOW") {
            console.log("Cart items : ", cart);
        }
    }
}

const myCartManager = createCartManager();

myCartManager("ADD", { id: 1, title: "Pyramids", price: 30 });
myCartManager("ADD", { id: 2, title: "Nile River", price: 25 });

myCartManager("SHOW");