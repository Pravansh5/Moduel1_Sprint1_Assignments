// Problem Statement: Write a function called calculatePrice that takes two inputs: 
// price and discount. If the user doesn't provide a discount (i.e., leaves it blank), 
// the function should apply a default discount of 10%. If the user provides an invalid price or discount (e.g., a negative number or non-numeric input),
//  it should display an error message and prompt them to try again.

// Finally, the function should calculate and return the final price after applying the discount.

// Requirements:

// Use default parameters for the discount. Validate both inputs to ensure they are positive numbers.

function calculatePrice(price, discount = 10) {
    if (isNaN(price) || isNaN(discount)) {
        return "Please enter price and discount as numeric values";
    }
    if (price <= 0 || discount < 0 || discount > 100) {
        return "Please enter a valid price and discount";
    }
    price *= (1 - discount / 100);
    return price;
}

let price = Number(prompt("Please enter price"));
let discount = Number(prompt("Please enter discount"));

console.log(calculatePrice(price, discount));