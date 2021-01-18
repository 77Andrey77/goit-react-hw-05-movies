import { Switch, Route } from "react-router-dom";

import AppBar from "../AppBar/AppBar";
import NotFoundView from "../../views/NotFoundView";
import HomePageView from "../../views/HomePageView";
import MoviesPageView from "../../views/MoviesPageView";
import MovieDetails from "../../views/MovieDetails";

import "./App.css";

export default function App() {
  return (
    <>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePageView />
        </Route>

        <Route path="/movies" exact>
          <MoviesPageView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}
