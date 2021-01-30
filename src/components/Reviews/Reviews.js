import PropTypes from "prop-types";

import { useState, useEffect } from "react";

import { fetchMoviesReviews } from "../../services/moviesApi";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <div>
          <ul>
            {reviews.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item.author}</p>
                  <p> {item.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>No reviews to show</p>
      )}
    </>
  );
}
Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
