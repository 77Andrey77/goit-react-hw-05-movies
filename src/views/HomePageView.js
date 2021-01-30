import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as moviesApi from "../services/moviesApi";
// import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.fetchTreading().then((request) => setMovies(request.results));
  }, []);

  return (
    <>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
