import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
let cartItems = [];
const CartItem = ({ name, imgSrc, price, itemId }) => {
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{ cart }, dispatch] = useStateValue();
  useEffect(() => {
    console.log("я маю спрацювати 1 раз", cart);
    cartItems = cart;
    console.log("card items", cartItems);
  }, []);
  useEffect(() => {
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      console.log("quant do", qty);
      setQty((prevState) => prevState - 1);
      console.log("quant pis", qty);

      if (qty <= 1) {
        console.log("in if bo ", qty);
        console.log("cartItems do", cartItems);
        const newCartItem = cartItems.filter((item) => {
          //   console.log("item.id", item.id);
          //   console.log("id", id);
          return item.id !== id;
        });
        console.log("cartItems pislya", newCartItem);
        dispatch({
          type: actionTypes.SET_CART,
          cart: newCartItem,
        });
      }
    }
  };
  return (
    <div className="cardItem">
      <div className="imgBox">
        <img src={imgSrc} alt="burger" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQuantity("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <div className="itemPrice">
        <span className="dolarSign">$ </span>
        <span className="itemPriceValue">{itemPrice}</span>
      </div>
    </div>
  );
};

export default CartItem;
