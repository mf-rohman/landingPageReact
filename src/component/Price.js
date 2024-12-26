import React from "react";
import Product from "./Product";
import { productData } from "../data/productData";

export function Price() {
  
  return (
    <>
      <div className="container-product">
        {productData.map((product, id) => (
          <Product
            key={id}
            image={product.image}
            name={product.name}
            price={product.price}
            discount={product.discount}
            desc = {product.desc}
          />
        ))}
      </div>
    </>
  );
}

export default Price;
