// Session 1: Variables, Arrays, Spread Operator, and Arrow Functions

let imageTitle = "AMR Elnaggar";
imageTitle = "alaa elnaggar";
console.log(imageTitle);

// const variables cannot be reassigned
const imagePrice = 25;
// imagePrice = 30; // Throws TypeError

const image = {
    id: 1,
    title: "AMR Elnaggar",
    price: 26,
};
console.log("Image title :", image.title);

// Array mutation using push
const cart = [
    "image_1", "image_2"
];
cart.push("image_3");
console.log("cart items : ", cart);

// cart = ["image_100"]; // Error: Assignment to constant variable.

// Using Spread Operator (...) to copy arrays immutably
let oldCart = ["image_1", "image_2"];
const newCart = [...oldCart, "image_3"];

console.log("OldCart : ", oldCart);
console.log("NewCart : ", newCart);

// Equality comparison: == (loose with type coercion) vs === (strict)
console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(null == undefined);  // true
console.log(null === undefined); // false

// Arrow Functions
const calculateDiscount = (price) => {
    return price * 0.8;
}

const calculateDiscountShort = price => price * 0.8;

console.log(calculateDiscount(100));
console.log(calculateDiscountShort(100));

// --- Task ---
const images = [
    { id: 1, title: "Mountain Sunset", price: 25, approved: true },
    { id: 2, title: "City Skyline", price: 40, approved: false },
    { id: 3, title: "Ocean Waves", price: 15, approved: true }
];

const calculateFinalPrice = (image) => {
    if (image.approved === true) {
        return image.price * 0.9;
    }
    else {
        return image.price;
    }
}

console.log(calculateFinalPrice(images[0])); // 22.5
console.log(calculateFinalPrice(images[1])); // 40