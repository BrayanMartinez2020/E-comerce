
/**
 * Calculates the total price of the given products.
 *
 * @param {Array} products - The array of products to calculate the total price for.
 * @return {number} The total price of the products.
 */
export const totalPrice = (products) => { 
    let total = 0
   products.forEach(element => total += element.price)
    return total
}