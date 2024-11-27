import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchParams}`
      );
      const data = await response.json();

      if (data && data.recipes && data.recipes.length) {
        setRecipes(data.recipes);
        setSearchParams("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleSaveAsFavorite(currentRecipe) {
    let cpyFavRecipes = [...favoriteRecipes];
    const index = cpyFavRecipes.findIndex(
      (item) => item.recipe_id === currentRecipe.recipe_id
    );
    if (index === -1) {
      cpyFavRecipes.push(currentRecipe);
    } else {
      cpyFavRecipes.splice(index);
    }
    setFavoriteRecipes(cpyFavRecipes);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleSubmit,
        loading,
        recipes,
        recipeDetails,
        setRecipeDetails,
        favoriteRecipes,
        setFavoriteRecipes,
        handleSaveAsFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
