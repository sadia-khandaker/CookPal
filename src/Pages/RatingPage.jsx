import React, { useState } from "react";
import "../assets/ratingPage.css";
import pic5 from '../../pics/5.jpg';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaHeart } from "react-icons/fa";
import BottomNav from './BottomNav';


const RatingPage = () => {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();


  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = () => {
    console.log("Feedback submitted:", feedback);
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  const handleAddToFavorites = () => {
    const recipe = {
      image: pic5, 
      title: "Vegan “Fish” Tacos",
      time: "40 min", 
    };

    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorited = existingFavorites.some((fav) => fav.title === recipe.title);
    if (!isAlreadyFavorited) {
      existingFavorites.push(recipe);
      
      localStorage.setItem('favorites', JSON.stringify(existingFavorites));
      
      alert(`${recipe.title} added to favourites!`);
  } else {
      alert(`${recipe.title} is already in favourites.`);
  }
  
  navigate('/bookmarks');

  };

  return (
    <div className="ratings-page">
      <h1 className="header">Vegan “Fish” Tacos</h1>
      <img src={pic5} alt="Vegan Fish Tacos" className="recipe-image" />
      <div className="rating-section">
        <h2>Rate This Recipe</h2>
        <p>Please take a moment to rate this recipe and share your thoughts!</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "filled" : ""}`}
              onClick={() => handleRatingClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <p>{rating}/5 stars</p>
        <textarea
          placeholder="How did it turn out? Any tips?"
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button onClick={handleSubmitFeedback}>Submit feedback</button>
      </div>
      <div className="navigation-buttons">
        <button
          onClick={() => navigate('/categories')}
          className="home-button"
        >
          <FaHome /> Home
        </button>
        <button
          onClick={handleAddToFavorites}
          className="favourites-button"
        >
          Add to Favourites <FaHeart />
        </button>
      </div>
     
      <BottomNav/>
    </div>
  );
};

export default RatingPage;
