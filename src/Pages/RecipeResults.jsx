import {useState} from 'react';
// import '../assets/RecipeResults.css';
import '../assets/Catagories.css';
import {useLocation, useNavigate} from 'react-router-dom';
import {FaClock, FaListAlt, FaLeaf, FaUtensils} from 'react-icons/fa';
import BottomNav from './BottomNav';
import {recipes} from "../data/Recipes.jsx";

const RecipeResults = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Retrieve selected ingredients
    const selectedIngredients = location.state?.selectedIngredients || [];

    const normalize = (str) => str.toLowerCase().trim();

    // Filter recipes based on at least 3 matching ingredients
    const filteredRecipes = recipes.filter((recipe) => {
        const matchedIngredients = recipe.ingredients.filter((ingredient) =>
            selectedIngredients.map(normalize).includes(normalize(ingredient.name)) // Compare with ingredient.name
        );
        return matchedIngredients.length >= 3; // At least 3 matches
    });

    const colorPalette = [
        "#D27A7A",
        "#D8C8A3",
        "#4B6868",
        "#F26363",
        "#7F8F48",
        "#F08C4A",
        "#F1B838",
        "#A4A86B",
        "#FF7343",
        "#8E8E8E",
    ];

    const getColorForIngredient = (index) => {
        return colorPalette[index % colorPalette.length]; // Loop through the palette if there are more ingredients than colors
    };

    return (
        <div className="recipe-list">
            <header className="recipe-header">
                <h1 className="recipe-result-title">Recipes Based on Your Ingredients Selection</h1>
                {selectedIngredients.length > 0 && (
                    <p className="ingredient-list">
                        Showing recipes that include at least three of the following ingredients:
                        <br/>
                        {selectedIngredients.map((ingredient, index) => (
                            <span
                                key={index}
                                className="ingredient-tag"
                                style={{
                                    color: getColorForIngredient(index),
                                    border: `2px solid ${getColorForIngredient(index)}`,
                                }}
                            >
                                {ingredient}
                            </span>
                        ))}
                    </p>
                )}
            </header>

            <section className="recipes-results">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="recipe-results-card"
                            onClick={() => navigate(`/recipe/${recipe.id}`)}
                        >
                            <img src={recipe.image} alt={recipe.title} className="recipe-image"/>
                            <div className="recipe-card-content">
                                <h3 className="recipe-title">{recipe.title}</h3>
                                <div className="recipe-details">
                                    <div className="detail-item">
                                        <FaClock className="icon animated-icon"/>
                                        <span>{recipe.time}</span>
                                    </div>
                                    <div className="detail-item">
                                        <FaUtensils className="icon animated-icon"/>
                                        <span>{recipe.difficulty}</span>
                                    </div>
                                    <div className="detail-item">
                                        <FaListAlt className="icon animated-icon"/>
                                        <span>{recipe.ingredients.length} Ingredients</span>
                                    </div>
                                    <div className="detail-item">
                                        <FaLeaf className="icon animated-icon"/>
                                        <span>{recipe.categories.join(", ")}</span>
                                    </div>
                                </div>
                                <p className="recipe-description">{recipe.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No recipes match your selected ingredients. Try adjusting your selection.</p>
                )}
            </section>

            <div className="bottom-div">
                <button
                    className="ingredient-button-bottom"
                    onClick={() => navigate('/ingredients')}
                >
                    Back to Ingredients
                </button>
            </div>

            <BottomNav/>
        </div>
    );
};

export default RecipeResults;
