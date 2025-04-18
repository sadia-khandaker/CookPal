import { useState } from 'react';
import '../assets/Catagories.css';
import BottomNav from './BottomNav';

import {
  FaList,
  FaCheckSquare, // For "Select Ingredients"
  FaUtensils, // For "Recipes" (Plate Icon)
  FaUser,
  FaClock,
  FaTrophy,
  FaPepperHot,
  FaUsers,
  FaListAlt,
  FaLeaf,
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import {recipes} from "../data/Recipes.jsx";

const categories = [
    { id: 1, name: 'Quick & Easy', icon: '⏱️', backgroundColor: '#FFE4D9' },
    { id: 2, name: 'Vegan', icon: '🥦', backgroundColor: '#D9F2D9' },
    { id: 3, name: 'Desserts', icon: '🍰', backgroundColor: '#ffccad' },
    { id: 4, name: 'Breakfast', icon: '🍳', backgroundColor: '#FFF1C2' },
    { id: 5, name: 'Lunch', icon: '🥗', backgroundColor: '#D9F3EE' },
    { id: 6, name: 'Dinner', icon: '🍽️', backgroundColor: '#FFE5C4' },
    { id: 7, name: 'Mexican', icon: '🌮', backgroundColor: '#FFE0E0' },
    { id: 8, name: 'Italian', icon: '🍝', backgroundColor: '#E0D9F3' },
    { id: 9, name: 'Asian', icon: '🍜', backgroundColor: '#D9E9FF' },
];


const darkenColor = (color, factor) => {
    
    let hex = color.startsWith('#') ? color : '#' + color;
    if (hex.length === 4) {
        hex = hex.split('').map((ch, i) => i === 0 ? ch : ch + ch).join(''); 
    }
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const darken = (val) => Math.max(0, val - factor);  
    return `#${darken(r).toString(16).padStart(2, '0')}${darken(g).toString(16).padStart(2, '0')}${darken(b).toString(16).padStart(2, '0')}`;
}



const Categories = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleAddToFavorites = (e, recipe) => {
        e.stopPropagation();
        const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyFavorited = existingFavorites.some((fav) => fav.id === recipe.id);

        if (!isAlreadyFavorited) {
            existingFavorites.push(recipe);

            localStorage.setItem('favorites', JSON.stringify(existingFavorites));

            alert(`${recipe.title} added to favourites!`);
        } else {
            alert(`${recipe.title} is already in favourites.`);
        }
        navigate('/bookmarks')
    };


    const filteredRecipes = selectedCategory
        ? recipes.filter((recipe) => recipe.categories.includes(selectedCategory.name))
        : recipes;

    return (
        <div className="recipe-list">
            <section className="categories">
                <h2>Explore Categories</h2>
                <div className="category-list">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-item ${selectedCategory?.id === category.id ? 'active' : ''}`}
                            style={{
                                background: selectedCategory?.id === category.id
                                    ? `linear-gradient(135deg, #37d05c, #2c9c71)`
                                    : `linear-gradient(135deg, ${category.backgroundColor}, #fff)`,
                                color: selectedCategory?.id === category.id ? '#fff' : '#333',
                            }}
                            onClick={() =>
                                setSelectedCategory(
                                    selectedCategory?.id === category.id ? null : category
                                )
                            }
                        >
                            <span>{category.icon}</span>
                            <p>{category.name}</p>
                        </button>
                    ))}
                </div>
            </section>

            <div className="ingredient-button">
                <p className="Recipes-question">What Would You Like to Cook Today?</p>
                <h3 style={{color: selectedCategory ? darkenColor(selectedCategory.backgroundColor, 25) : '#333'}}>
                    {selectedCategory ? `${selectedCategory.name} Recipes` : 'Popular Recipes'}
                </h3>
            </div>

            {/* Recipes Section */}
            <section className="recipes">
                {filteredRecipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="recipe-card"
                        onClick={() => navigate(`/recipe/${recipe.id}`)}
                    >
                        {/* Recipe Image */}
                        <img src={recipe.image} alt={recipe.title} className="recipe-image"/>

                        {/* Recipe Content */}
                        <div className="recipe-card-content">
                            {/* Recipe Info */}
                            <div className="recipe-info">
                                {/* Title */}
                                <h3 className="recipe-title">{recipe.title}</h3>

                                {/* Details */}
                                <div className="recipe-details">
                                    {/* Time */}
                                    <div className="detail-item">
                                        <FaClock className="icon animated-icon"/>
                                        <span>{recipe.time}</span>
                                    </div>

                                    {/* Difficulty */}
                                    <div className="detail-item">
                                        <FaUtensils className="icon animated-icon"/>
                                        <span>{recipe.difficulty}</span>
                                    </div>

                                    {/* Ingredients Count */}
                                    <div className="detail-item">
                                        <FaListAlt className="icon animated-icon"/>
                                        <span>{recipe.ingredients.length} Ingredients</span>
                                    </div>
                                    <button
                                        className="fav-but"
                                        onClick={(e) => handleAddToFavorites(e, recipe)}
                                    >
                                        ❤️
                                    </button>

                                    {/* Categories */}
                                    <div className="detail-item">
                                        <FaLeaf className="icon animated-icon"/>
                                        <span>{recipe.categories.join(', ')}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="recipe-description">{recipe.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Bottom CTA Section */}
            <div className="bottom-div">
                <p className="font-bottom">Not Sure What to Cook?</p>
                <button
                    className="ingredient-button-bottom"
                    onClick={() => navigate('/ingredients')}
                >
                    Let’s Create a Recipe With What You Have
                </button>
                <BottomNav/>
            </div>
        </div>
    );
};


export default Categories;
