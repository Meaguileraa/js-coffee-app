"use strict";

// Gets items by the id cart-items and is adding it to itemName
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// This function is looking at our cart-total at the localhost and then setting it to empty
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};


// This is adding the total to the price in the cart.
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};


//idk
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};


//idk
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//


$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});


// Questions:
// when they want us to type the function name in the console make sure im doing it right
// WHat is last line doing in incrementCartTotal



