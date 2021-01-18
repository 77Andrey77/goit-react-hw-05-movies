import React, { useState } from "react";
import PropTypes from "prop-types";
// import "../Searchbar/Searchbar.css";

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
    <header className="SearchMovies">
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          className="SearchForm-input"
          name="searchName"
          value={searchName}
          onChange={handleNameChange}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search movies"
        />
        <button type="submit" className="SearchForm-button">
          Search
        </button>
      </form>
    </header>
  );
}

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
