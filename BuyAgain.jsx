import React, { useEffect, useState } from 'react';
import './BuyAgain.css';

const getStars = (rating) => {
  const fullStars = Math.floor(rating); 
  const hasHalfStar = rating % 1 >= 0.5; 
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 

  return (
    <>
      {'★'.repeat(fullStars)}
      {hasHalfStar && '☆'}
      {'☆'.repeat(emptyStars)}
    </>
  );
};

const Product = ({ product, addToCart, cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  const handleAddToCart = () => {
    setQuantity(1);
    addToCart(product, 1);
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCart(product, newQuantity);
  };

  const decreaseQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    addToCart(product, newQuantity);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <p className="product-name">{product.title}</p>
      <p className="product-rating">{getStars(product.rating.rate)}</p> 
      <p className="product-price">${product.price}</p>

      {quantity === 0 ? (
        <button className="add-to-cart" onClick={handleAddToCart}>
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
  const [cart, setCart] = useState({}); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (quantity > 0) {
        newCart[product.id] = { ...product, quantity };
      } else {
        delete newCart[product.id];
      }
      return newCart;
    });
  };

  return (
    <div className="buy-again-container">
      <h2>Discover</h2>

      <h3>Best sellers in Health & Household Products</h3>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            cartItem={cart[product.id]}
            addToCart={addToCart}
          />
        ))}
      </div>

      <h3>Cart</h3>
      <div className="cart-items">
        {Object.values(cart).length > 0 ? (
          Object.values(cart).map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.title} - Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default BuyAgain;
