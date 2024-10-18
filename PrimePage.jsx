import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './PrimePage.css';

const PrimePage = () => {
  const navigate = useNavigate();  

  const handleCancel = () => {
    navigate('/');  
  };

  return (
    <div className="prime-container">
      <header>
        <div className="header-logo">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
            alt="Amazon Logo"  
            className="amazon-logo" 
          />
        </div>
        <h1>Join Amazon Prime</h1>
        <p>
          Sign up for Amazon Prime to experience the membership program that over
          100 million Prime members enjoy worldwide for EGP 29.00/month.
        </p>
      </header>

      <div className="prime-benefits">
        <div className="benefit">
          <h3>FAST and FREE Delivery</h3>
          <p>FAST and FREE delivery on over half a million products with Amazon Prime</p>
        </div>
        <div className="benefit">
          <h3>Prime Video</h3>
          <p>Watch TV shows and movies for free with Prime Video.</p>
        </div>
        <div className="benefit">
          <h3>Free online games and rewards</h3>
          <p>Free games, in-game offers and Twitch subscriptions with Prime Gaming.</p>
        </div>
      </div>

      <section className="payment-section">
        <h2>Add a payment method</h2>

        <div className="payment-option">
          <h3>Pay for Prime membership through your mobile carrier</h3>
          <p>
            You can pay for your Amazon Prime membership through your mobile carrier. This is only valid
            for your Prime membership and not purchases done on amazon.eg.
          </p>
          <a href="#carrier">+ Add a carrier</a>
        </div>

        <div className="credit-card">
          <h3>Credit Cards</h3>
          <p>Amazon accepts major credit and debit cards.</p>
          <a href="#credit">+ Add a credit or debit card</a>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" 
            alt="Visa Logo"  
            className="credit-cards" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
            alt="Mastercard Logo"  
            className="credit-cards" 
          />
        </div>

        <button className="cancel-button" onClick={handleCancel}>
          No thanks, I don't want to sign up for prime at this time
        </button>
      </section>
    </div>
  );
};

export default PrimePage;
