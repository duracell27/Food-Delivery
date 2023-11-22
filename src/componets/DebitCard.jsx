import React from "react";

const DebitCard = () => {
  return (
    <div className="cardGroupe">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266"
        alt="cardLogo"
        className="card_logo"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
        alt="cardLogo"
        className="card_chip"
      />
      <div className="card_number">1234 5678 9012 3456</div>
      <div className="card_name">Volodymyr Shmidt</div>
      <div className="card_from">07/23</div>
      <div className="card_to">07/28</div>
      <div className="card_ring"></div>
    </div>
  );
};

export default DebitCard;
