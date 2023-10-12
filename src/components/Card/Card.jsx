import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../utils/context";
import { AiOutlineDelete } from "react-icons/ai";
import "./card.css";

function Card() {
  const {
    cart,
    AddtoCart,
    RemovefromCart,
    increaseQty,
    decreaseQty,
  } = useContext(Context);
  console.log(cart);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const products = await axios.get("https://fakestoreapi.com/products");
    // set the test.data to state
    setProducts(products.data);
    console.log(products);
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="card-main">
          <div className="image-container">
            <Link to={`/product/${product.id}`}>
              <img
                className="card-image"
                src={product.image}
                alt={product.title}
              />
            </Link>
          </div>
          <div>
            <p>{product.title.length > 20
                ? product.title.substring(0, 20) + "...."
                : product.title}
            </p>
            <p>Ghc {product.price}</p>
            <p>{product.category}</p>
            <p>
              {product.description.length > 55
                ? product.description.substring(0, 55) + "...."
                : product.description}
            </p>
          </div>

          <div className="btn">
            {cart.find((cartproduct) => cartproduct.id === product.id) ? (
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
            ) : (
              <button onClick={() => AddtoCart(product)}>Add to Cart</button>
            )}
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default Card;
