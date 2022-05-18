import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <nav className="flex justify-center mt-5 font-bold text-xl">
      <CustomLink className="mr-7 pb-1" to="/">
        Home
      </CustomLink>
      <CustomLink className="mr-7 pb-1" to="/reviews">
        Reviews
      </CustomLink>
      <CustomLink className="mr-7 pb-1" to="/dashboard">
        Dashboard
      </CustomLink>
      <CustomLink className="mr-7 pb-1" to="/blogs">
        Blogs
      </CustomLink>
      <CustomLink className="pb-1" to="/about">About</CustomLink>
    </nav>
  );
};

export default Header;
