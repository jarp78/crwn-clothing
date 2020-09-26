export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const decreaseItemQuantity = (cartItems, cartItemToDecreaseQuantity) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDecreaseQuantity.id
  );

  // if it is last item quantity, remove item from cart
  if (existingCartItem.quantity === 1) {
    return removeItemFromCart(cartItems, cartItemToDecreaseQuantity);
  }

  // there are more than one quantity, so, just decrease it by one
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToDecreaseQuantity.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
