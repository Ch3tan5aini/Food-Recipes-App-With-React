import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetails,
    setRecipeDetails,
    handleSaveAsFavorite,
    favoriteRecipes,
    setFavoriteRecipes,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/get?rId=${id}`
        );
        const data = await response.json();

        if (data && data.recipe) {
          setRecipeDetails(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipeDetails();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 m-10">
      <div className="h-full w-full overflow-hidden rounded-md shadow-2xl object-cover">
        <img
          src={recipeDetails?.recipe?.image_url}
          alt="Recipe Image"
          className=" h-full w-full hover:scale-105 duration-300 object-cover"
        />
      </div>
      <div>
        <span className="text-cyan-700 text-sm mt-1">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h2 className="font-bold mb-3 text-2xl ">
          {recipeDetails?.recipe?.title}
        </h2>
        <button
          onClick={() => {
            handleSaveAsFavorite(recipeDetails?.recipe);
          }}
          className="py-2 px-4 mb-4 mt-2 bg-black text-white rounded-lg text-center"
        >
          {favoriteRecipes.findIndex(
            (item) => item.recipe_id === recipeDetails?.recipe?.recipe_id
          ) === -1
            ? "Save As Favorites"
            : "Remove From Favorites"}
        </button>
        <h3 className="font-bold mb-3 text-xl">Ingredients: </h3>
        {recipeDetails?.recipe?.ingredients.map((items, index) => (
          <li className="text-xl list-disc" key={index}>
            {items}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Details;
