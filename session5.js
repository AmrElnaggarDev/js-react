// Session 5: Advanced Array Methods (map, filter, find, some, every, reduce)

// Transforming arrays with .map()
const numbers = [10, 20, 30];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

const images = [
    { id: 1, title: "Mountain Sunset", price: 25 },
    { id: 2, title: "City Skyline", price: 40 },
    { id: 3, title: "Ocean Waves", price: 15 }
];

const imagesTitle = images.map(image => image.title);
console.log("Images Title:", imagesTitle);

// Mapping with object mutation immutably
const updatedPrices = images.map(image => ({
    ...image,
    price: image.price * 1.1 // Increase price by 10%
}));
console.log("Updated Prices:", updatedPrices);

// Filtering arrays with .filter()
const marketplaceImages = [
    { id: 1, title: "Pyramids", price: 30, isFree: false },
    { id: 2, title: "Nile River", price: 0, isFree: true },
    { id: 3, title: "Alexandria Citadel", price: 50, isFree: false },
    { id: 4, title: "Siwa Oasis", price: 0, isFree: true }
];

const paidImages = marketplaceImages.filter(image => image.price > 0);
const freeImages = marketplaceImages.filter(image => image.isFree === true);
const specialPrice = marketplaceImages.filter(image => image.price <= 30);

console.log("Paid Images:", paidImages);
console.log("Free Images:", freeImages);

// Search and validation methods: find, some, every
const cart = [
    { id: 101, title: "Cairo Tower", price: 20 },
    { id: 102, title: "Luxor Temple", price: 45 },
    { id: 103, title: "Aswan Nile", price: 0 }
];

const foundImage = cart.find(image => image.id === 102);
const hasFreeImage = cart.some(image => image.price === 0);
const allAboveTen = cart.every(image => image.price > 10);

console.log("Found Image:", foundImage?.title);
console.log("Has Free Image:", hasFreeImage);
console.log("All Above Ten:", allAboveTen);

// Accumulating values with .reduce()
const userCart = [
    { id: 1, title: "Red Sea", price: 30 },
    { id: 2, title: "Pyramids", price: 50 },
    { id: 3, title: "Siwa", price: 20 }
];

// reduce with initial value 10
const totalPrice = userCart.reduce((total, item) => total + item.price, 10);
console.log("Total Price:", totalPrice);

// Combining multiple array methods (Pipeline pattern)
const gallery = [
    { id: 1, title: "Sunrise", price: 20, category: "Nature" },
    { id: 2, title: "Abstract Wave", price: 60, category: "Art" },
    { id: 3, title: "Forest Trail", price: 0, category: "Nature" },
    { id: 4, title: "City Lights", price: 40, category: "Urban" }
];

const naturalImages = gallery.filter(image => image.category === "Nature");
const natureTitles = naturalImages.map(image => image.title);
const totalNaturalPrice = naturalImages.reduce((total, image) => total + image.price, 0);

console.log("Natural Images:", naturalImages);
console.log("Natural Images Titles:", natureTitles);
console.log("Total Price of Natural Images:", totalNaturalPrice);