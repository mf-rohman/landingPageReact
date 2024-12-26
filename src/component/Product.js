import React from "react";
import PopupProduct from "./PopupProduct";

function Product({ name, image, price, discount = 0, desc }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h3> {name} </h3>
      {discount > 0 ? <p> <s> Rp. {price} </s> ({discount}%) </p> : <p> <br/> </p>}
      <p>
        <b>
          Rp. {parseInt(price) - (parseInt(price) * parseInt(discount)) / 100}
        </b>
        <PopupProduct name={name} image={image} desc={desc} />
      </p>
    </div>
  );
}

export default Product;
