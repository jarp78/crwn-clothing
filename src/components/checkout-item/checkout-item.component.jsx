import React from "react";
import { connect } from "react-redux";

import {
  removeItem,
  addItem,
  decreaseItemQuantity,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemAttributeContainer,
  RemoveButtonContainer,
  QuantityContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, removeItem, increaseItem, decreaseItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <ItemAttributeContainer>{name}</ItemAttributeContainer>
      <QuantityContainer>
        <span onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </span>
        <div>{quantity}</div>
        <span onClick={() => increaseItem(cartItem)}>
          &#10095;
        </span>
      </QuantityContainer>
      <ItemAttributeContainer>${price}</ItemAttributeContainer>
      <RemoveButtonContainer onClick={() => removeItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  increaseItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
