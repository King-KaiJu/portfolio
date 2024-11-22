'use client';

import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartLength = cart.length

  const handleAddToCart = (name, price, image, id, qty) =>{
    const product ={
      name,
      price,
      image,
      id,
      qty
    };
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct){
      existingProduct.qty += qty;
      return setCart([...cart]);
    }
    else{
      setCart([...cart,product]);
    }
  };

  const handleRemoveProduct = (id) =>{
    const restProduct = cart.filter(product => product.id !== id);
    setCart(restProduct)
  };

  const cartTotal = () => cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
        handleRemoveProduct,
        cartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
