import React, { useEffect, useState } from 'react';
import './BuyAgain.css';

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
    return storedCart[product.id] ? storedCart[product.id].quantity : 0;
  });

  const updateLocalStorage = (newQuantity) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || {};

    if (newQuantity > 0) {
      currentCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: newQuantity
      };
    } else {
      delete currentCart[product.id];
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  const addToCart = () => {
    setQuantity(1);
    updateLocalStorage(1);
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateLocalStorage(newQuantity);
  };

  const decreaseQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    updateLocalStorage(newQuantity);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <p className="product-name">{product.title}</p>
      <p className="product-rating">★ ★ ★ ★ ☆</p>
      <p className="product-price">${product.price}</p>

      {quantity === 0 ? (
        <button className="add-to-cart" onClick={addToCart}>
          Add to cart
        </button>
      ) : (
        <div className="cart-controls">
          <button className="cart-btn" onClick={decreaseQuantity}>
            <span role="img" aria-label="trash">🗑</span>
          </button>
          <span>{quantity}</span>
          <button className="cart-btn" onClick={increaseQuantity}>
            <span role="img" aria-label="plus">➕</span>
          </button>
        </div>
      )}
    </div>
  );
};

const BuyAgain = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="buy-again-container">
      <h2>Discover</h2>

      <h3>Best sellers in Health & Household Products</h3>
      <div className="product-list">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BuyAgain;
