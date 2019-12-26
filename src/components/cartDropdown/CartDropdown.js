import React from "react";
import "./CartDropdown.styles.scss";
import CustomButton from "../customButton/CustomButton";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
