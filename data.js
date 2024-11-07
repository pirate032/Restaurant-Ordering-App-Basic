export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]

//export {menuArray}


// <!-- this section will repeat the menu items -->
// <div class="item-container">
//     <div class="item-picture">
//         <p class="item-icon">🍕</p>
//     </div>
//     <div class="item-info">
//         <p class="item-title">Pizza</p>
//         <p class="item-ingredients">pepperoni, mushrom, mozarella</p>
//         <p class="item-price">$14</p>
//     </div>
//     <div class="add-item">
//         <button class="add-item-btn">+</button>
//     </div>
// </div>

// <!-- this section will show the items ordered-->
// <div class="order-container">
//     <p class="order-header">Your order</p>
//     <div class="order-item-container">
//         <p class="item-ordered">Pizza</p>
//         <button class="remove-btn">remove</button>
//         <p class="item-cost">$14</p>
//     </div>                                
// </div>  

// <section class="total" id="total">
//     <hr class="total-line">
//     <!-- this part shows the total-->
//     <div class="total-container">
//         <p class="total">Total price:</p>
//         <p class="total-cost">$14</p>
//     </div>
//     <button class="complete-order-btn">Complete order</button>
// </section>