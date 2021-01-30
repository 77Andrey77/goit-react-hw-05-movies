import { useState, useEffect } from "react";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import SearchMovies from "../components/SearchMovies/SearchMovies";

import * as moviesApi from "../services/moviesApi";

export default function MoviesPage() {
  // const [searchName, setSearchName] = useState("");
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();

  const searchName = new URLSearchParams(location.search).get("query");

  const onChangeSearch = (queryString) => {
    history.push({ ...location, search: `query=${queryString}` });
  };

  useEffect(() => {
    if (searchName === "") {
      return;
    }
    // api
    moviesApi
      .fetchSearchMovies(searchName)
      .then((request) => setMovies(request.results));
  }, [searchName]);

  // const handleFormSubmit = (searchName) => {
  //   setSearchName(searchName);
  // };

  return (
    <>
      <SearchMovies onSubmit={onChangeSearch} />

      {searchName && (
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
