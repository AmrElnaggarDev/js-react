// Session 4: Primitive vs Reference Types, Spread Operator, and Destructuring

// Primitive types are copied by value
// let price1 = 100;
// let price2 = price1;
// price2 = 150;
// console.log("price1:", price1);
// console.log("price2:", price2);

// Reference types are copied by reference
// const image1 = { id: 1, title: "Sunset", price: 30 };
// const image2 = image1;
// image2.title = "Sunrise";
// console.log("image1 title:", image1.title);
// console.log("image2 title:", image2.title);

// Immutable copy using Spread Operator (...)
const image1 = { id: 1, title: "Sunset", price: 30 };
const image2 = { ...image1 };

image2.title = "Sunrise";
console.log("image1 title:", image1.title); // Remains "Sunset"
console.log("image2 title:", image2.title); // Becomes "Sunrise"

// Object and Array Destructuring
const photo = {
    id: 1,
    title: "red sea",
    price: 50,
    category: "nature",
};

const { title, price } = photo;
console.log("Title : ", title);
console.log("Price : ", price);

const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log("First Color : ", firstColor);
console.log("Second Color : ", secondColor);

// Renaming variables and setting default values during destructuring
const photoData = {
    id: 1,
    title: "red sea",
};

const { title: photoTitle, price = 20 } = photoData;
console.log("Photo Title : ", photoTitle);
console.log("Photo Price : ", price); // Falls back to default 20

// --- Task ---
const cartItem = {
    id: 501,
    title: "Desert Safari",
    price: 45,
    quantity: 1
};

const { title: cartTitle, price: cartPrice, quantity } = cartItem;
console.log("Title : ", cartTitle);
console.log("Price : ", cartPrice);
console.log("Quantity : ", quantity);

// Updating property immutably with spread operator
const updatedCartItem = { ...cartItem };
updatedCartItem.quantity = 2;
console.log("Original cart ITEM quantity : ", cartItem.quantity);
console.log("Updated cart ITEM quantity : ", updatedCartItem.quantity);