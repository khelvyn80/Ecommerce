import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Context } from "../../utils/context";
import { AiOutlineDelete } from "react-icons/ai";

import "./Cart.css";

function Cart() {
  const { cart, AddtoCart, RemovefromCart, increaseQty, decreaseQty, clearCart } =
    useContext(Context);
  console.log(cart);

  return (
    <div>
      <Navbar />
      <table className="cart-table">
        <tr>
          <th className="cart-container-title">
            <p>Product</p>
            <p>Product Name</p>
            <p>Product Price(GH)</p>
            <p>Quantity</p>
            <p>Total Cost(GH)</p>
          </th>
          {cart.map((product) => (
            <div key={product.id} className="cart-container">
              <div>
                <img
                  src={product.image}
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
              </div>
              <div
                style={{ display: "flex", flexWrap: "wrap", maxWidth: "300px" }}
              >
                {product.title}
              </div>
              <div>{product.price}</div>
              <div>
                <div className="btn">
                  {cart.find((cartproduct) => cartproduct.id === product.id) ? (
                    <div>
                      <button onClick={() => decreaseQty(product.id)}>-</button>
                      <button>
                        {cart.map((p) => (p.id === product.id ? p.qty : ""))}
                      </button>
                      <button onClick={() => increaseQty(product.id)}>
                        +{" "}
                      </button>
                      <button onClick={() => RemovefromCart(product.id)}>
                        <AiOutlineDelete />
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => AddtoCart(product)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
              <div>
                {cart.map((p) =>
                  p.id === product.id ? p.qty * product.price : ""
                )}
              </div>
            </div>
          ))}
        </tr>
      </table>
      <br />
      <br />
      <button style={{justifyContent:"center",alignItems:"center",width:"20%", padding:"10px"}} onClick={() => clearCart() }>
        Clear All Cart
      </button>
    </div>
  );
}

export default Cart;
