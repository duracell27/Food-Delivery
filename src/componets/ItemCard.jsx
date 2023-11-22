import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Items } from "../Data";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
let cartData = [];

const ItemCard = ({ imgSrc, name, ratings, price, id }) => {
  const [isFavorite, setfavorite] = useState(false);
  const [curentValue, setCurentValue] = useState(Math.floor(ratings));

  const [isCart, setCart] = useState(null);
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    if(cart){
        cartData = cart;
    }
    console.log("card Data", cartData);
  }, []);
  const handleClick = (value) => {
    setCurentValue(value);
  };

  useEffect(() => {
    if (isCart) {
      console.log("zaletny");
      console.log("info v is cart", isCart);
      cartData.push(isCart);
      dispatch({
        type: actionTypes.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);

  return (
    <div className="itemCard" id={id}>
      <div
        className={`isFavorite ${isFavorite ? "active" : ""}`}
        onClick={() => setfavorite(!isFavorite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="burger" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${curentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <div
            className="addToCart"
            onClick={() => setCart(Items.find((el) => el.id === id))}
          >
            <AddRounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
