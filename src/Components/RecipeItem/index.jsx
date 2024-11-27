import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GlobalContext } from "../../Context";

const RecipeItem = ({ item }) => {
  const { favoriteRecipes, handleSaveAsFavorite } = useContext(GlobalContext);
  return (
    <div className="h-72 w-64 py-6 px-3 overflow-hidden flex flex-col items-left rounded-xl shadow-2xl">
      <div className="h-32 w-56 overflow-hidden object-cover rounded-lg ">
        <img src={item.image_url} alt="Recipe Image" />
      </div>
      <div className="flex justify-between items-center">
        <div className="truncate overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="text-cyan-700 text-sm mt-1">{item.publisher}</span>
          <h2 className="font-semibold mb-3 text-lg ">
            {item.title.length > 10
              ? item.title.slice(0, 20) + "..."
              : item.title}
          </h2>
        </div>
        {favoriteRecipes.findIndex(
          (recipe) => recipe.recipe_id === item.recipe_id
        ) === -1 ? (
          <FaRegHeart
            className="mr-3 size-5 cursor-pointer"
            onClick={() => handleSaveAsFavorite(item)}
          />
        ) : (
          <FaHeart
            className="mr-3 size-5 text-red-600 cursor-pointer"
            onClick={() => handleSaveAsFavorite(item)}
          />
        )}
      </div>

      <Link
        to={`/details/${item.recipe_id}`}
        className="py-2 px-4 bg-black text-white rounded-lg text-center"
      >
        Details
      </Link>
    </div>
  );
};

export default RecipeItem;
