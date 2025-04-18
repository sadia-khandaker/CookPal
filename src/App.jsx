import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login.jsx';
import RegisterPage from './Pages/Register.jsx';
import Categories from './Pages/Categories.jsx';
import Ingredients from './Pages/Ingredients.jsx';
import Recipe from './Pages/RecipePage.jsx';
import RecipeSteps from './Pages/RecipeSteps.jsx';
import Rating from './Pages/RatingPage.jsx';
import RecipeResults from './Pages/RecipeResults.jsx';
import Bookmark from './Pages/BookmarkPage.jsx';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/reciperesults" element={<RecipeResults />} />
            {/*<Route path="/recipe" element={<Recipe />} />*/}
            <Route path="/recipe/:id" element={<Recipe/>}/>

            <Route path="/recipesteps" element={<RecipeSteps/>}/>
          <Route path="/rating" element={<Rating />} />
          <Route path="/bookmarks" element={<Bookmark />} />
        </Routes>
      </Router>
  );
}

export default App;
