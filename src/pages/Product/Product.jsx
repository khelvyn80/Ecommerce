import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../../utils/context";
import { AiOutlineDelete } from "react-icons/ai";
import "./product.css";

function Product() {
  const { id } = useParams();

  const { cart, AddtoCart, RemovefromCart, increaseQty, decreaseQty } =
    useContext(Context);
  const [product, setProduct] = useState({});
  useEffect(() => {
    data();
  });

  const data = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(res.data);
  };

  return (
    <div className="product-container" key={product.id}>
      <img
        src={product?.image}
        width={400}
        height={400}
        alt=""
        className="product-img"
      />

      <div className="product-details">
        <p>Name: {product.title}</p>
        <p>Description: {product.description}</p>
        <p>Price: Ghc {product.price}</p>
        <div className="btn">
          {cart.find((cartproduct) => cartproduct.id === product.id) ? (
            <div style={{display:"flex",justifyContent:"between",width:"100%", gap:"4rem"}}>
              <div>
                <button onClick={() => decreaseQty(product.id)}>-</button>
                <button>
                  {cart.map((p) => (p.id === product.id ? p.qty : ""))}
                </button>
                <button onClick={() => increaseQty(product.id)}>+ </button>
                <button onClick={() => RemovefromCart(product.id)}>
                  <AiOutlineDelete />
                </button>
              </div>
              <p>
                <span>Total Cost: Ghc </span>
                {cart.map((p) =>
                  p.id === product.id ? p.qty * product.price : ""
                )}
              </p>
            </div>
          ) : (
            <button onClick={() => AddtoCart(product)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
