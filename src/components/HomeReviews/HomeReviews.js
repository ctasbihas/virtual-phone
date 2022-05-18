import React from "react";

const HomeReviews = (props) => {
  const { img, name, description, ratings } = props.review;
  return (
    <div className="w-11/12 p-4 rounded-2xl bg-gray-400">
      <div className="flex items-center">
        <img className="w-10 rounded-full mr-2" src={img} alt="" />
        <h1 className="text-xl">{name}</h1>
      </div>
      <p className="text-2xl">{description}</p>
      <p>Ratings: {ratings}</p>
    </div>
  );
};

export default HomeReviews;
