import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeReviews from "../HomeReviews/HomeReviews";
import Phone from "../Phone/Phone";
import img from "./pixel6pro.jpg";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("userReviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Phone img={img} />
      <div className="mt-10 ml-7">
        <h1 className="text-4xl font-bold flex justify-center">
          Customer Reviews({reviews.length})
        </h1>
        <div className="grid grid-cols-3 gap-5 mt-4">
          {reviews.map((review) => (
            <HomeReviews review={review} key={review.id} />
          ))}
        </div>
        <div className="flex justify-center mt-5 mb-5">
          <button className="bg-purple-800 px-10 py-1 rounded text-white font-semibold">
            <Link to="/reviews">See all reviews</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
