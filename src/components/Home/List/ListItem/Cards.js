import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <span className="card_title">{props.name}</span>
        <img
          src={props.imageURL}
          style={{ height: "5rem", width: "6rem" }}
          alt="myPic"
          className="card_img"
        />
        <div className="card_info">
          <h4 className="card-price">
            {props.currency} {props.price}
          </h4>
          <a href="/" target="_blank">
            <button>Add to cart</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
