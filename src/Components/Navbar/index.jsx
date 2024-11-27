import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);
  return (
    <div>
      <div className="flex justify-between w-full py-3 px-6 bg-green-400 items-center text-white">
        <h1 className="text-2xl font-semibold">
          <NavLink to={"/"}>Food Recipes</NavLink>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Recipe"
            className="outline-none py-2 px-4 text-center rounded-full text-black shadow-lg"
            onChange={(e) => setSearchParams(e.target.value)}
            value={searchParams}
          />
        </form>
        <ul className="flex gap-4">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/favorites"}>
            <li>Favorites</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
