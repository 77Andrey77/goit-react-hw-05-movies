import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, Route, useParams, useRouteMatch } from "react-router-dom";
// import Cast from "../components/Cast/Cast";
// import Reviews from "../components/Reviews/Reviews";
import * as moviesApi from "../services/moviesApi";

import imagePlaseholder from "../images/imagePlaceholder.png";
import s from "./MovieDetails.module.css";

const Cast = lazy(() =>
  import("../components/Cast/Cast" /*webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("../components/Reviews/Reviews" /*webpackChunkName: "Reviews" */)
);

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    moviesApi.fetchMoviesDetails(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <h1>
            {movie.title}({movie.release_date})
          </h1>
          <div className={s.description}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : imagePlaseholder
              }
              alt={movie.title || movie.name}
            ></img>
            <div className={s.desc}>
              <p>Overview:</p>
              <p>{movie.overview}</p>
              <p>Genres :</p>
              <span>{movie.genres.map((genre) => genre.name).join("/")}</span>
              <p>
                Use score: <span>{movie.vote_average}</span>
              </p>
            </div>
          </div>

          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>

          <hr />
          <Suspense>
            <Route path={`${path}:movieId/cast`}>
              {movie && <Cast movieId={movieId} />}
            </Route>

            <Route path={`${path}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
