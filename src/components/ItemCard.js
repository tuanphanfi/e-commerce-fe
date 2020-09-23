// import { Card, Button, Img } from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";
import * as types from "../redux/constants/item.constants";
import { itemActions } from "../redux/actions/item.actions";

const ItemCard = (props) => {
  const mainColor = "rgb(155,22,98)";
  const { title, content, price, _id, imgSrc } = props;
  const dispatch = useDispatch();
  const addAnItem = () => {
    dispatch(itemActions.addToCart(_id, 1));
  };

  return (
    <div
      className="mySingleCard d-flex flex-column justify-content-center text-center "
      style={{ "max-width": "20vw" }}
    >
      <img variant="top" src={imgSrc} />
      <h4>{title.length > 21 ? title.substr(0, 15) + "..." : title}</h4>
      <p>{content.substr(0, 51)}...</p>

      <p style={{ color: mainColor }}>
        <strong>{price}</strong>
      </p>
      <button
        style={{
          backgroundColor: "rgb(255, 165, 0)",
          color: "white",
          "border-radius": "20px",
          border: "2px solid rgb(254, 217, 67)",
        }}
        onClick={addAnItem}
      >
        Add to card
      </button>
    </div>
  );
};

export default ItemCard;
