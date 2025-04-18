import React, { useState, useEffect } from 'react';
import '../assets/BookmarkPage.css';
import BottomNav from './BottomNav';

const BookmarkPage = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteItems(savedFavorites);
  }, []);

  return (
    <div className="bookmark-page">
      <h1>Favourites</h1>
      <div className="grid">
        {favoriteItems.length === 0 ? (
          <p>No favourite items yet.</p>
        ) : (
          favoriteItems.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.time}</p>
              <div className="icon">❤️</div>
            </div>
          ))
        )}
      </div>
      
      <BottomNav/>
    </div>
  );
};

export default BookmarkPage;
