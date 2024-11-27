import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Components/RecipeItem";

const Home = () => {
  const { loading, recipes } = useContext(GlobalContext);
  return (
    <div className="bg-gray-200 ">
      {loading ? (
        <div className="flex justify-center items-center z-10 relative h-screen">
          <span className="animate-spin border-2 border-sky-500 border-dashed rounded-full w-12 h-12 z-100 absolute top-1/2"></span>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="container justify-center p-4 flex flex-wrap gap-10">
            {recipes && recipes.length ? (
              recipes.map((item, index) => (
                <RecipeItem item={item} key={index} />
              ))
            ) : (
              <div>Nothing Found Try Something Else!</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
