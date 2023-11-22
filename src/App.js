import {
  AccountBalance,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import "./App.css";
import Header from "./componets/Header";
import MenuContainer from "./componets/MenuContainer";
import { useEffect, useState } from "react";
import BannerName from "./componets/BannerName";
import SubMenuContainer from "./componets/SubMenuContainer";
import MenuCard from "./componets/MenuCard";
import { MenuItems, Items } from "./Data";
import ItemCard from "./componets/ItemCard";
import DebitCard from "./componets/DebitCard";
import CartItem from "./componets/CartItem";
import { useStateValue } from "./StateProvider";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((elem) => elem.itemId === "buger01")
  );

  const [total, setTotal] = useState(0)

  const [{ cart }, dispatch] = useStateValue();
  console.log('cart from main',cart)

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((item) => item.addEventListener("click", setMenuActive));

    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCards.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((item) => {
      item.addEventListener("click", setMenuCardActive);
    }, []);

    const prices = document.querySelectorAll('span.itemPriceValue')
    prices.forEach((item) => setTotal(total + parseInt(item.innerHTML)))
    console.log(prices)
  }, [isMainData, cart]);

  const setData = (itemId) => {
    setMainData(Items.filter((elem) => elem.itemId === itemId));
  };
  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"Shmidt"} discount={"20"} link={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt="banner"
              className="deliveryPic"
            />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      isActive={data.id === 1}
                      imgSrc={data.imgSrc}
                      name={data.name}
                    />
                  </div>
                ))}
            </div>
            <div className="disItemConatiner">
              {isMainData &&
                isMainData.map((data, i) => (
                  <ItemCard
                    key={data.id}
                    imgSrc={data.imgSrc}
                    id={data.id}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
          {!cart ? (
            <div></div>
          ) : (
            <div className="cartCheckOutContainer">
              <SubMenuContainer name={"Cart Items"} />
              <div className="cartContainer">
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span>{total}
                </p>
              </div>
              <button className="checkOut">Check Out</button>
            </div>
          )}
        </div>
      </main>
      <div className="bottonMenu">
        <ul id="menu">
          <MenuContainer active={true} link={"#"} icon={<HomeRounded />} />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalance />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
