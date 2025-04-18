import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaList, FaCheckSquare, FaUtensils, FaHeart } from 'react-icons/fa'; 
import "../assets/NavBar.css"; 

const BottomNav = () => {
  return (
    <>
      <div className="page-content">
        {/* Your main content goes here */}
        
      </div>

      <div className="bottom-nav">
        <Link to="/categories">
          <FaList />
          <span>Categories</span>
        </Link>
        <Link to="/ingredients">
          <FaCheckSquare />
          <span>Select Ingredients</span>
        </Link>
        <Link to="/recipe/1" className="active">
          <FaUtensils />
          <span>Recipes</span>
        </Link>
        <Link to="/bookmarks">
          <FaHeart />
          <span>Favourite</span>
        </Link>
      </div>
    </>
  );
};

export default BottomNav;