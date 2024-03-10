import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="p-4 bg-black flex justify-between">
      <h1>
        <Link to={"/"} className="text-yellow-400 font-bold text-3xl">
          Form
        </Link>
      </h1>
      <nav className="text-white text-2xl flex gap-4 items-center">
        <NavLink to={"/"}>All Posts</NavLink>
        <NavLink to={"/create"}>Add a New Post</NavLink>
      </nav>
    </header>
  );
};

export default HeaderView;
