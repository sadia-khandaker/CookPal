import VeganFishTacos from "../../pics/recipes/VeganTacos.png";
import WalnutMisoNoodles from "../../pics/recipes/WalnutMisoNoodles.png";
import FluffyPancakes from "../../pics/recipes/FluffyPancake.png";
import PenneAllaVodka from "../../pics/recipes/PenneAllaVodka.png";
import YellowCake from "../../pics/recipes/YellowCake.png";

const recipes = [
    {
        id: 1,
        title: 'Vegan "Fish" Tacos',
        categories: ['Mexican', 'Vegan', 'Dinner'],
        time: '40 min',
        flavourProfile: 'Spicy',
        ingredients: [
            {name: 'Tofu', quantity: '10 oz, sliced'},
            {name: 'Avocado', quantity: '1, sliced'},
            {name: 'Tortillas', quantity: 'as needed'},
            {name: 'Coleslaw', quantity: '2-3 cups'},
            {name: 'Sriracha', quantity: '2 tbsp'},
            {name: 'Soy Sauce', quantity: '2 tbsp'},
            {name: 'Olive Oil', quantity: '1 tbsp'},
            {name: 'Cornstarch', quantity: '2 tbsp'},
            {name: 'Tempeh', quantity: '1 packet, cooked'}
        ],
        difficulty: 'Medium',
        description: 'Deliciously crispy tofu paired with creamy avocado and a kick of spicy sesame slaw, all wrapped up in warm tortillas. A delicious, plant-powered version of your fav tacos!',
        image: VeganFishTacos,
    },
    {
        id: 2,
        title: 'Walnut Miso Noodles',
        categories: ['Asian', 'Vegan', 'Lunch'],
        time: '30 min',
        flavourProfile: 'Savoury',
        ingredients: [
            {name: 'Noodles', quantity: '8 oz'},
            {name: 'Walnuts', quantity: '1/2 cup, chopped'},
            {name: 'Miso Paste', quantity: '2 tbsp'},
            {name: 'Soy Sauce', quantity: '2 tbsp'},
            {name: 'Rice Vinegar', quantity: '1 tbsp'},
            {name: 'Sesame Oil', quantity: '1 tbsp'},
            {name: 'Green Onions', quantity: '2, chopped'},
            {name: 'Garlic', quantity: '2 cloves, minced'},
            {name: 'Ginger', quantity: '1 tbsp, minced'},
            {name: 'Chili Paste', quantity: '1 tbsp'},
            {name: 'Asparagus', quantity: '1 bunch, chopped'}
        ],
        difficulty: 'Easy',
        description: 'A simple, yet delicious noodle bowl featuring a miso-walnut dressing, complemented by asparagus and finished with a hint of chili paste for a touch of heat.',
        image: WalnutMisoNoodles,
    },
    {
        id: 3,
        title: 'Fluffy Pancakes',
        categories: ['Breakfast', 'Quick & Easy'],
        time: '20 min',
        flavourProfile: 'Sweet',
        ingredients: [
            {name: 'Flour', quantity: '1 cup'},
            {name: 'Sugar', quantity: '2 tbsp'},
            {name: 'Baking Powder', quantity: '1 tsp'},
            {name: 'Milk', quantity: '1 cup'},
            {name: 'Eggs', quantity: '2'},
            {name: 'Butter', quantity: '2 tbsp'}
        ],
        difficulty: 'Easy',
        description: 'Light, and fluffy pancakes, featuring tender crumbs and golden edges, perfect for a quick breakfast.',
        image: FluffyPancakes,
    },
    {
        id: 4,
        title: 'Penne alla Vodka',
        categories: ['Italian', 'Dinner'],
        time: '30 min',
        flavourProfile: 'Mild',
        ingredients: [
            {name: 'Penne Pasta', quantity: '8 oz'},
            {name: 'Tomato', quantity: '1/2 cup sauce'},
            {name: 'Vodka', quantity: '1/4 cup'},
            {name: 'Heavy Cream', quantity: '1/2 cup'},
            {name: 'Butter', quantity: '2 tbsp'},
            {name: 'Onion', quantity: '1, chopped'},
            {name: 'Garlic', quantity: '2 cloves, minced'},
            {name: 'Parmesan Cheese', quantity: '1/4 cup, grated'},
            {name: 'Red Chilli', quantity: '1 tsp crushed'}
        ],
        difficulty: 'Medium',
        description: 'An indulgent and yummy pasta dish featuring penne pasta tossed in a creamy tomato-vodka sauce, finished with a sprinkle of parmesan cheese and red pepper flakes.',
        image: PenneAllaVodka,
    },
    {
        id: 5,
        title: 'Yellow Cake with Chocolate Frosting',
        categories: ['Desserts', 'Quick & Easy'],
        time: '1 hr',
        flavourProfile: 'Sweet',
        ingredients: [
            {name: 'Flour', quantity: '2 1/2 cups'},
            {name: 'Sugar', quantity: '2 cups'},
            {name: 'Baking Powder', quantity: '1 tbsp'},
            {name: 'Butter', quantity: '1 cup, softened'},
            {name: 'Milk', quantity: '1 cup'},
            {name: 'Eggs', quantity: '4'},
            {name: 'Vanilla Extract', quantity: '2 tsp'},
            {name: 'Cocoa Powder', quantity: '1/2 cup'},
            {name: 'Powdered Sugar', quantity: '3 cups'}
        ],
        difficulty: 'Medium',
        description: 'A soft, moist yellow cake with rich chocolate frosting, perfect for any celebration or indulgent treat.',
        image: YellowCake,
    }
];

export {recipes};

