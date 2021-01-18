import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import SearchMovies from "../components/SearchMovies/SearchMovies";

import * as moviesApi from "../services/moviesApi";

export default function MoviesPage() {
  const [searchName, setSearchName] = useState("");
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (searchName === "") {
      return;
    }
    // api
    moviesApi
      .fetchSearchMovies(searchName)
      .then((request) => setMovies(request.results));
  }, [searchName]);

  const handleFormSubmit = (searchName) => {
    setSearchName(searchName);
  };

  return (
    <>
      <SearchMovies onSubmit={handleFormSubmit} />

      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
