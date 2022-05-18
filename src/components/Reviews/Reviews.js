import React, { useEffect, useState } from 'react';
import HomeReviews from '../HomeReviews/HomeReviews';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("userReviews.json")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return (
      <div>
        <div className="mt-10 ml-7">
          <h1 className="text-4xl font-bold flex justify-center">
            What our customers say!({reviews.length})
          </h1>
          <div className="grid grid-cols-3 gap-5 mt-4">
            {reviews.map((review) => (
              <HomeReviews review={review} key={review.id} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Reviews;