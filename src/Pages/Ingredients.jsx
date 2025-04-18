import React, {useState} from 'react';
import '../assets/IngredientsSelector.css';
import Onion from "../../pics/ingredients/Onion.png";
import Garlic from "../../pics/ingredients/Garlic.png";
import SaltPepper from "../../pics/ingredients/SaltPepper.png";
import RedChilli from "../../pics/ingredients/RedChillis.png";
import Tomato from "../../pics/ingredients/Tomato.png";
import Potato from "../../pics/ingredients/Potato.png";
import Carrot from "../../pics/ingredients/Carrot.png";
import Lemon from "../../pics/ingredients/Lemon.png";
import Avocado from "../../pics/ingredients/Avocado.png";
import Rice from "../../pics/ingredients/Rice.png";
import Spaghetti from "../../pics/ingredients/Spaghetti.png";
import Lentils from "../../pics/ingredients/Lentils.png";
import Flour from "../../pics/ingredients/Flour.png";
import Almonds from "../../pics/ingredients/Almonds.png";
import Eggs from "../../pics/ingredients/Eggs.png";
import WholeMilk from "../../pics/ingredients/WholeMilk.png";
import AlmondMilk from "../../pics/ingredients/AlmondMilk.png";
import Tofu from "../../pics/ingredients/Tofu.png";
import SoySauce from "../../pics/ingredients/SoySauce.png";
import Sriracha from "../../pics/ingredients/Sriracha.png";
import Cornstarch from "../../pics/ingredients/Cornstarch.png";
import OliveOil from "../../pics/ingredients/OliveOil.png";
import Walnuts from "../../pics/ingredients/Walnuts.png";
import Penne from "../../pics/ingredients/PennePasta.png";
import HeavyCream from "../../pics/ingredients/HeavyCream.png";
import Parmesan from "../../pics/ingredients/Parmesan.png";
import BottomNav from './BottomNav';
import Sugar from "../../pics/ingredients/Sugar.png";
import VanillaExtract from "../../pics/ingredients/VanillaExtract.png";
import Tortilla from "../../pics/ingredients/Tortillas.png";
import Ginger from "../../pics/ingredients/Ginger.png";
import Asparagus from "../../pics/ingredients/Asparagus.png";
import GreenOnions from "../../pics/ingredients/GreenOnions.png";
import Butter from "../../pics/ingredients/Butter.png";
import BakingPowder from "../../pics/ingredients/BakingPowder.png";
import Noodles from "../../pics/ingredients/Noodles.png";
import Kale from "../../pics/ingredients/Kale.png";
import Tempeh from "../../pics/ingredients/Tempeh.png";





import {useNavigate} from 'react-router-dom';

const ingredients = [
    { name: "Onion", type: "Herb", image: Onion, className: "onion", category: "Herbs, Spices & Seasonings" },
    { name: "Garlic", type: "Herb", image: Garlic, className: "garlic", category: "Herbs, Spices & Seasonings" },
    { name: "Salt & Pepper", type: "Seasoning", image: SaltPepper, className: "saltPepper", category: "Herbs, Spices & Seasonings" },
    { name: "Red Chilli", type: "Spice", image: RedChilli, className: "redChilli", category: "Herbs, Spices & Seasonings" },
    { name: "Soy Sauce", type: "Sauce", image: SoySauce, className: "soySauce", category: "Herbs, Spices & Seasonings" },
    { name: "Sriracha", type: "Sauce", image: Sriracha, className: "sriracha", category: "Herbs, Spices & Seasonings" },
    { name: "Cornstarch", type: "Thickener", image: Cornstarch, className: "cornstarch", category: "Herbs, Spices & Seasonings" },
    { name: "Olive Oil", type: "Oil", image: OliveOil, className: "oliveOil", category: "Herbs, Spices & Seasonings" },

    {name: "Ginger", type: "Herb", image: Ginger, className: "ginger", category: "Herbs, Spices & Seasonings"},
    {
        name: "Green Onions",
        type: "Herb",
        image: GreenOnions,
        className: "greenOnions",
        category: "Herbs, Spices & Seasonings"
    },

    {name: "Sugar", type: "Sweetener", image: Sugar, className: "sugar", category: "Herbs, Spices & Seasonings"},
    {
        name: "Vanilla Extract",
        type: "Flavouring",
        image: VanillaExtract,

        className: "vanillaExtract",
        category: "Herbs, Spices & Seasonings"
    },
    {
        name: "Baking Powder",
        type: "Leavening Agent",
        image: BakingPowder,
        className: "bakingPowder",
        category: "Herbs, Spices & Seasonings"
    },
    { name: "Tomato", type: "Vegetable", image: Tomato, className: "tomato", category: "Vegetables & Fruits" },
    { name: "Avocado", type: "Fruit", image: Avocado, className: "avocado", category: "Vegetables & Fruits" },
    { name: "Potato", type: "Vegetable", image: Potato, className: "potato", category: "Vegetables & Fruits" },
    {name: "Kale", type: "Vegetable", image: Kale, className: "kale", category: "Vegetables & Fruits"},
    { name: "Carrot", type: "Vegetable", image: Carrot, className: "carrot", category: "Vegetables & Fruits" },
    { name: "Lemon", type: "Fruit", image: Lemon, className: "lemon", category: "Vegetables & Fruits" },
    {name: "Asparagus", type: "Vegetable", image: Asparagus, className: "asparagus", category: "Vegetables & Fruits"},
    { name: "Rice", type: "Grains", image: Rice, className: "rice", category: "Grains, Legumes, & Nuts" },
    {name: "Tortillas", type: "Grains", image: Tortilla, className: "tortilla", category: "Grains, Legumes, & Nuts"},
    { name: "Spaghetti", type: "Grains", image: Spaghetti, className: "spaghetti", category: "Grains, Legumes, & Nuts" },
    { name: "Penne Pasta", type: "Grains", image: Penne, className: "penne", category: "Grains, Legumes, & Nuts" },
    { name: "Lentils", type: "Legume", image: Lentils, className: "lentils", category: "Grains, Legumes, & Nuts" },
    {name: "Noodles", type: "Grains", image: Noodles, className: "noodles", category: "Grains, Legumes, & Nuts"},
    { name: "Almonds", type: "Nuts", image: Almonds, className: "almonds", category: "Grains, Legumes, & Nuts" },
    { name: "Walnuts", type: "Nuts", image: Walnuts, className: "walnuts", category: "Grains, Legumes, & Nuts" },
    { name: "Flour", type: "Grains", image: Flour, className: "flour", category: "Grains, Legumes, & Nuts" },
    { name: "Eggs", type: "Protein", image: Eggs, className: "eggs", category: "Dairy & Protein Alternatives" },
    {name: "Milk", type: "Regular Milk", image: WholeMilk, className: "milk", category: "Dairy & Protein Alternatives"},
    {name: "Butter", type: "Dairy", image: Butter, className: "butter", category: "Dairy & Protein Alternatives"},
    { name: "Parmesan", type: "Cheese", image: Parmesan, className: "parmesan", category: "Dairy & Protein Alternatives" },
    { name: "Almond Milk", type: "Plant-Based Milk", image: AlmondMilk, className: "almondMilk", category: "Dairy & Protein Alternatives" },
    { name: "Tofu", type: "Protein", image: Tofu, className: "tofu", category: "Dairy & Protein Alternatives" },
    {name: "Tempeh", type: "Protein", image: Tempeh, className: "tempeh", category: "Dairy & Protein Alternatives"},
    { name: "Heavy Cream", type: "Dairy", image: HeavyCream, className: "heavyCream", category: "Dairy & Protein Alternatives" }
];

const groupedIngredients = ingredients.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) acc[ingredient.category] = [];
    acc[ingredient.category].push(ingredient);
    return acc;
}, {});


const IngredientSelector = () => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();  // Access the navigate function

    const handleIngredientClick = (ingredient) => {
        if (selectedIngredients.includes(ingredient)) {
            setSelectedIngredients(
                selectedIngredients.filter((item) => item !== ingredient)
            );
        } else if (selectedIngredients.length < 5) {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update search query on change
    };

    const handleClearSearch = () => {
        setSearchQuery(""); // Clear the search query
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            console.log("Searching for: ", searchQuery);
        }
    };

    const filteredGroupedIngredients = Object.keys(groupedIngredients).reduce(
        (acc, category) => {
            const filtered = groupedIngredients[category].filter((ingredient) =>
                ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (filtered.length > 0) acc[category] = filtered;
            return acc;
        },
        {}
    );

    return (
        <div className="container">
            <header className="header">
                <h1 className="title">Select 5 Ingredients</h1>
                <p className="subtitle">Choose 5 ingredients to get a recipe suggestion.</p>
            </header>

            <div className="search-wrapper">
                <svg
                    className="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M11 2a9 9 0 1 0 5.65 15.88l4.26 4.26a1 1 0 0 0 1.41-1.41l-4.26-4.26A9 9 0 0 0 11 2zm0 2a7 7 0 1 1-4.95 11.95A7 7 0 0 1 11 4z"
                        fill="#666"
                    />
                </svg>

                <input
                    type="text"
                    className="search-input"
                    placeholder="Search ingredients..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress}
                />

                {searchQuery && (
                    <button
                        className="clear-button"
                        onClick={handleClearSearch}
                        aria-label="Clear search"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.11 5.7C6.72 5.31 6.09 5.31 5.7 5.7C5.31 6.09 5.31 6.72 5.7 7.11L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                )}
            </div>

            <div className="selectedIngredientsContainer">
                <h3>Selected Ingredients:</h3>
                <div className="selectedIngredientsList">
                    {selectedIngredients.map((ingredient, index) => (
                        <div key={index} className="selectedIngredientItem">
                            {ingredient}
                            <span
                                className="removeButton"
                                onClick={() =>
                                    setSelectedIngredients(
                                        selectedIngredients.filter(
                                            (item) => item !== ingredient
                                        )
                                    )
                                }
                            >
                                ✕
                            </span>
                        </div>
                    ))}
                    {selectedIngredients.length === 0 && (
                        <p>No ingredients selected yet.</p>
                    )}
                </div>
            </div>

            {Object.keys(filteredGroupedIngredients).map((category, index) => (
                <div key={index} className="category-section">
                    <h2 className="sectionTitle">{category}</h2>
                    <div className="horizontal-scroll">
                        {filteredGroupedIngredients[category].map(
                            (ingredient, idx) => (
                                <div
                                    key={idx}
                                    className={`ingredientCard ${
                                        ingredient.className
                                    } ${
                                        selectedIngredients.includes(
                                            ingredient.name
                                        )
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleIngredientClick(ingredient.name)
                                    }
                                >
                                    <img
                                        src={ingredient.image}
                                        alt={ingredient.name}
                                        className="ingredientImage"
                                    />
                                    <div className="ingredientName">
                                        {ingredient.name}
                                    </div>
                                    <div className="ingredientType">
                                        {ingredient.type}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            ))}

            <button
                className={`actionButton ${selectedIngredients.length !== 5 ? 'disabled' : ''}`}
                aria-disabled={selectedIngredients.length !== 5}
                disabled={selectedIngredients.length !== 5}
                onClick={() => {
                    navigate("/reciperesults", {state: {selectedIngredients}});

                }}
            >
                Get Recipe
            </button>
            
            <BottomNav/>
        </div>
    );
};

export default IngredientSelector;
