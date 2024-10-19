import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./Prime.css";

const contentData = [
  {
    title: "Fast, free delivery",
    description: "Enjoy same day delivery to Cairo and Giza and next day delivery across most of Egypt on over half a million items.",
    imgSrc: "free delivery.jpg", 
    link: "Find out more",
  },
  {
    title: "Popular films and TV programs",
    description: "Stream international TV shows and movies, plus award-winning Amazon Originals from your favorite devices.",
    imgSrc: "TV programs.jpg", 
    link: "Find out more",
  },
  {
    title: "Exclusive deals",
    description: "Get early access to in-demand deals and save big during annual events, like Prime Day.",
    imgSrc: "deals.jpg", 
    link: "Find out more",
  },
  {
    title: "Prime video games",
    description: "Get exclusive discounts before anyone else and save a lot on the biggest annual offers, such as Prime Day.",
    imgSrc: "game.jpg", 
    link: "Find out more",
  },
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();  

  const nextContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const prevContent = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contentData.length) % contentData.length
    );
  };

  const handleGetStarted = () => {
    navigate("/Primepage");  
  };

  const getDisplayedContent = () => {
    return contentData
      .slice(currentIndex, currentIndex + 3)
      .concat(contentData.slice(0, Math.max(0, (currentIndex + 3) - contentData.length)));
  };

  return (
    <div className="prime-page">

      <div className="header-section">
        <h1>Shop, save, and play in a whole new way</h1>
        <p>Prime is just EGP 29.00/month. Cancel anytime.</p>
        <a href="#" className="explore-link">Explore other plans</a>
        <button className="join-prime-btn" onClick={handleGetStarted}>Join Amazon Prime</button>
      </div>

      <div className="content-carousel">
        <h2>Check Out What's Included</h2>

        <div className="carousel">
          <button className="arrow left-arrow" onClick={prevContent}>
            ◀
          </button>

          <div className="content-grid">
            {getDisplayedContent().map((content, index) => (
              <div key={index} className="content-item">
                <img src={content.imgSrc} alt="Content" width={200} />
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <a href="#">{content.link}</a>
              </div>
            ))}
          </div>

          <button className="arrow right-arrow" onClick={nextContent}>
            ▶
          </button>
        </div>
      </div>

      <div className="plan-selection">
        <h1>Choose Your Plan</h1>
        <p>
          Enjoy the best shopping and entertainment for just EGP 29.00 per month. Cancel anytime.
        </p>

        <div className="plans">
          <div className="plan monthly">
            <input type="radio" id="monthly" name="plan" checked />
            <label htmlFor="monthly">
              <h2>Monthly Plan</h2>
              <p>EGP 29.00</p>
              <p>per month</p>
            </label>
          </div>
          <div className="plan annual">
            <input type="radio" id="annual" name="plan" />
            <label htmlFor="annual">
              <h2>Annual Plan</h2>
              <p>EGP 249.00</p>
              <p>per year</p>
              <div className="save">SAVE 28%</div>
            </label>
          </div>
        </div>

        <button className="get-started-btn" onClick={handleGetStarted}>  
          GET STARTED
        </button>
      </div>
      
    </div>
  );
};

export default Page;
