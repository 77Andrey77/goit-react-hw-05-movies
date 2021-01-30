import { useState, useEffect } from "react";

import { fetchMoviesCredits } from "../../services/moviesApi";
import imagePlaseholder from "../../images/imagePlaceholder.png";
import s from "../Cast/Cast.module.css";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMoviesCredits(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <div className={s.wrapper}>
          <ul className={s.list}>
            {cast.map((actor) => {
              return (
                <li key={actor.id} className={s.item}>
                  <img
                    className={s.image}
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : imagePlaseholder
                    }
                    alt={actor.name}
                  />
                  <p>
                    <b>{actor.name}</b>
                  </p>
                  <p>
                    Character : <span>{actor.character}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
