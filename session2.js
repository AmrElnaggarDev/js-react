// Session 2: Truthy/Falsy, Logical Operators, Optional Chaining, and Nullish Coalescing

const cartCount = 0;
if (cartCount) {
    console.log('cart has items');
} else {
    console.log('cart is empty'); // 0 is evaluated as falsy
}

const images = [];
// Empty array [] is truthy in JavaScript, even if length is 0
if (images) {
    console.log('images available');
} else {
    console.log('no images available');
}

// Correct way to check array elements
if (images.length > 0) console.log('we have images');
else console.log('no images available');

// Short-circuit evaluation with Logical OR (||)
const userProvidedTitle = "";
const displayTitle = userProvidedTitle || "Undefined Title";
console.log("Title to show : ", displayTitle); // Falls back because "" is falsy

// Logical AND (&&) for conditional execution
const isDiscounted = true;
const discountMessage = isDiscounted && "Discounted for 20%";
console.log("Discount message : ", discountMessage);

// Optional Chaining (?.) to safely access nested properties
const image = {
    id: 1,
    title: "Sunset",
    author: {
        name: "Amr"
    }
};

const instagram = image.author?.social?.instagram;
console.log("Instagram : ", instagram); // undefined (no error thrown)

const instagramStatus = image.author?.social?.instagram || "UNDEFINED STATUS OF INSTAGRAM";
console.log("Instagram status : ", instagramStatus);

// Nullish Coalescing (??) vs Logical OR (||)
const price1 = 0;
const price2 = null;

// || treats 0 as falsy and falls back
console.log("WITH || : ", price1 || 25); // 25

// ?? only falls back on null or undefined (preserves 0)
console.log("WITH ?? : ", price1 ?? 25); // 0
console.log("with ?? : ", price2 ?? 25); // 25

// --- Task ---
const rawImageApi = {
    id: 101,
    title: "Red Sea Coral",
    price: 0,
    tags: [],
    author: {
        name: "Amr El-Naggar"
    }
};

if (rawImageApi.tags.length > 0) {
    console.log("Image has tags.");
} else {
    console.log("Image has no tags.");
}

const instagramAccount = rawImageApi.author?.social?.instagram || "Instagram Account Not Found";
console.log("Instagram : ", instagramAccount);

// Using ?? so price 0 is kept instead of being replaced by 50
const finalPrice = rawImageApi.price ?? 50;
console.log("Final Price : ", finalPrice);