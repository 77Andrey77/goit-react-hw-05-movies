import { useState, useEffect } from "react";
import { NavLink, Route, useParams, useRouteMatch } from "react-router-dom";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import * as moviesApi from "../services/moviesApi";
// import MovieList from "../components/MovieList/MovieList";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    moviesApi.fetchMoviesDetails(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  //   const { url } = useRouteMatch();

  return (
    <>
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/555px-Noimage.svg.png"
            }
            alt={movie.title || movie.name}
          ></img>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <hr />

          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </>
      )}
    </>
  );
}
