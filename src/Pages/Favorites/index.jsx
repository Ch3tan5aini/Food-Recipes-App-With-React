import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Components/RecipeItem";

const Favorites = () => {
  const { favoriteRecipes, loading } = useContext(GlobalContext);
  return (
    <div className="bg-gray-200 h-screen">
      <div>
        <div className="flex justify-center ">
          <div className="container justify-center p-4 flex flex-wrap gap-10">
            {favoriteRecipes && favoriteRecipes.length ? (
              favoriteRecipes.map((item, index) => (
                <RecipeItem item={item} key={index} />
              ))
            ) : (
              <div>Nothing Saved As Favorites! Search and Save.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
