import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Orders.css';

function Orders() {
  const [activeTab, setActiveTab] = useState('orders');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="orders-container">
      <h2>Your Account &gt; Your Orders</h2>
      <div className="orders-header">
        <h1>Your Orders</h1>
        <div className="search-orders">
          <input type="text" placeholder="Search all Amazon orders" />
          <button>Search Orders</button>
        </div>
      </div>

      <nav className="orders-nav">
        <ul>
          <li
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => handleTabClick('orders')}
          >
            Orders
          </li>
          <li
            className={activeTab === 'buy-again' ? 'active' : ''}
            onClick={() => handleTabClick('buy-again')}
          >
            <Link to="/BuyAgain">Buy Again</Link>
          </li>
          <li
            className={activeTab === 'not-yet-dispatched' ? 'active' : ''}
            onClick={() => handleTabClick('not-yet-dispatched')}
          >
                        <Link to="">            Not Yet Dispatched
                        </Link>

          </li>
          <li
            className={activeTab === 'cancelled-orders' ? 'active' : ''}
            onClick={() => handleTabClick('cancelled-orders')}
          >
                        <Link to=""> Cancelled Orders </Link>

          </li>
        </ul>
      </nav>

      <div className="orders-content">
        <p>0 orders placed in 
          <select>
            <option>past three months</option>
            <option>past six months</option>
            <option>past year</option>
          </select>
        </p>
        <p>It looks like you haven't placed an order in the last three months.</p>
        <p><Link to="/buy-again">View orders in 2024</Link></p>
      </div>

      <div className="orders-footer">
        <p>
          After viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in.
        </p>
      </div>
    </div>
  );
}

export default Orders;

