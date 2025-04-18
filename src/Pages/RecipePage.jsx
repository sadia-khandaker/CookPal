import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import '../assets/RecipePage.css'; // Import the CSS file
import {recipes} from "../data/Recipes.jsx";
import BottomNav from './BottomNav';
import {
    FaLeaf,
    FaPepperHot,
    FaUtensils,
    FaClock,
    FaTrophy,
    FaUsers, FaCandyCane, FaDrumstickBite, FaLemon, FaIceCream
} from 'react-icons/fa';

import {GiCupcake} from "react-icons/gi";

const getFlavourDetails = (flavor) => {
    switch (flavor) {
        case 'Spicy':
            return {
                icon: <FaPepperHot style={{color: "#D32F2F"}}/>,
                color: "#D32F2F",
                backgroundColor: "#FFEBE1"
            };
        case 'Sweet':
            return {
                icon: <GiCupcake style={{color: "#FF4081"}}/>,
                color: "#FF4081",
                backgroundColor: "#FCE4EC"
            };
        case 'Savoury':
            return {
                icon: <FaDrumstickBite style={{color: "#8D6E63"}}/>,
                color: "#8D6E63",
                backgroundColor: "#F4E1D2"
            };
        case 'Mild':
            return {
                icon: <FaLeaf style={{color: "#FFB300"}}/>,
                color: "#FFB300",
                backgroundColor: "#FFF8E1"
            };
        case 'Tangy':
            return {
                icon: <FaLemon style={{color: "#FF9800"}}/>,
                color: "#FF9800",
                backgroundColor: "#FFECB3"
            };
        case 'Sour':
            return {
                icon: <FaLemon style={{color: "#FFEB3B"}}/>,
                color: "#FFEB3B",
                backgroundColor: "#FFF9C4"
            };
        default:
            return {
                icon: <FaUtensils style={{color: "#808080"}}/>,
                color: "#808080",
                backgroundColor: "#F7F7F7"
            };
    }
};

const RecipePage = () => {
    const {id} = useParams(); // Get recipe ID from URL
    const navigate = useNavigate();

    // Find the recipe based on the ID from the URL
    const recipe = recipes.find((r) => r.id === parseInt(id));

    // If recipe is not found, return an error message
    if (!recipe) {
        return (
            <div className="container">
                <h1>Recipe Not Found</h1>
                <button className="back-button" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        );
    }

    const goBack = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/categories');
        }
    }


    const {icon, color, backgroundColor} = getFlavourDetails(recipe.flavourProfile);

    return (
        <div className="recipe-page-container">
            <div>
                <button className="back-button" onClick={goBack}></button>
                {/* Use text for the back button */}
                <h1 className="recipe-page-header">{recipe.title}</h1>
            </div>


            <p className="recipe-page-description">{recipe.description}</p>
            <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-page-image"
            />

            <div className="details">
                {/* Time Box */}
                <div className="detail-box time-box" style={{backgroundColor: "#FFEBEE"}}>
                    <FaClock size={24} style={{color: "#FF6F61"}}/>
                    <p className="detail-title">Time</p>
                    <p className="detail-value">{recipe.time}</p>
                </div>

                {/* Difficulty Box */}
                <div className="detail-box" style={{backgroundColor: "#FFFBCC"}}>
                    <FaTrophy size={24} style={{color: "#FF9F43"}}/>
                    <p className="detail-title">Difficulty</p>
                    <p className="detail-value">{recipe.difficulty}</p>
                </div>

                {/* Flavor Profile Box */}
                <div className="detail-box" style={{backgroundColor}}>
                    {icon}
                    <p className="detail-title">Flavour</p>
                    <p className="detail-value">{recipe.flavourProfile || "Other"}</p>
                </div>

                {/* Serves Box */}
                <div className="detail-box" style={{backgroundColor: "#E8F5E9"}}>
                    <FaUsers size={24} style={{color: "#4CAF50"}}/>
                    <p className="detail-title">Serves</p>
                    <p className="detail-value">2</p>
                </div>
            </div>

            <div className="ingredients-section">
                <h2 className="section-title">Ingredients</h2>
                <div className="ingredients-list">
                    {recipe.ingredients.map((ingredient, index) => (
                        <div className="ingredient-item" key={index}>
                            <span className="ingredient-quantity">{ingredient.quantity}</span>
                            <span className="ingredient-name">{ingredient.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button className="cook-button" onClick={() => navigate('/recipesteps')}>
                <FaUtensils/>
                Cook Now
            </button>

            <BottomNav/>
        </div>
    );
};


export default RecipePage;

