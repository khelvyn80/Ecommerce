import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("myshopcart");
    if (storedCart && storedCart !== undefined) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myshopcart", JSON.stringify(cart));
  }, [cart]);

  const AddtoCart = (item) => {
    setCart((prevCart) => [...prevCart, { ...item, qty: 1 }]);
  };

  const RemovefromCart = (itemId) => {
    setCart(cart.filter((item) => itemId !== item.id));
  };

  const increaseQty = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  const decreaseQty = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Context.Provider
      value={{
        cart,
        AddtoCart,
        RemovefromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
