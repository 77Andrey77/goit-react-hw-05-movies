import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "../SearchMovies/SearchMovies.module.css";

export default function SearchMovies({ onSubmit }) {
  const [searchName, setSearchName] = useState("");

  const handleNameChange = (event) => {
    setSearchName(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchName.trim() === "") {
      alert("Введите название искомого фильма");
      return;
    }
    onSubmit(searchName);
    setSearchName("");
  };

  return (
    <header className={s.SearchMovies}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <input
          className={s.SearchFormInput}
          name="searchName"
          value={searchName}
          onChange={handleNameChange}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search movies"
        />
        <button type="submit" className={s.SearchFormButton}></button>
      </form>
    </header>
  );
}

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
