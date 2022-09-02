import classes from "./Homebtn.module.css";
import React, { useState } from "react";
import Catchdisplay from "../moviesList/catchDisplay";
import Like from "../UserMovieStorage/Like";
import Dislike from "../UserMovieStorage/Dislike";

const Homebtn = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [choosenMovieName, setChoosenMovieName] = useState("");
  const [choosenMovie, setChosenMovie] = useState(false);
  const [inputError, setInputError] = useState("valid");
  const [likedMovies, setLikedMovies] = useState(false);
  const [dislikedMovies, setDislikedMovies] = useState(false);

  const searchBarHandler = () => {
    setSearchBar(true);
    setChosenMovie(false);
  };

  const userInputHandler = (event) => {
    setChoosenMovieName(event.target.value);
    setChosenMovie(false);
    setInputError("valid");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (choosenMovieName.trim().length > 2) {
      setInputError("valid");
      setChosenMovie(true);
    } else {
      setInputError("problemInput");
      setChosenMovie(false);
    }
  };

  console.log(inputError);

  const searchCancelHandler = () => {
    setSearchBar(false);
    setChoosenMovieName("");
    setChosenMovie(false);
    setInputError("valid");
  };

  const likedMoviesHandler = () => {
    setLikedMovies(true);
    setDislikedMovies(false);
    setSearchBar(false);
    
  };

  const dislikedMoviesHandler = () => {
    setDislikedMovies(true);
    setLikedMovies(false);
    setSearchBar(false);
  };

  return (
    <React.Fragment>
      <div className={classes.topic}>Your Movies List!</div>

      <div className={classes.btngroup}>
        <button className={classes.fav} onClick={likedMoviesHandler}>
          {" "}
          Favrouite Movies
        </button>
        <button className={classes.dislike} onClick={dislikedMoviesHandler}>
          {" "}
          Disliked Movies
        </button>
        {!searchBar && (
          <button className={classes.search} onClick={searchBarHandler}>
            Search Movies
          </button>
        )}
      </div>

      {likedMovies && <Like onChange={choosenMovieName}/>}
      {dislikedMovies && <Dislike onChange={choosenMovieName}/>}

      {searchBar && (
        <form onSubmit={formSubmitHandler} className={classes.form}>
          <input
            type="text"
            placeholder="What movie are you looking for?"
            onChange={userInputHandler}
            value={choosenMovieName}
            className={classes.input}
          />

          <button type="submit" className={classes.inputSearch}>
            Search
          </button>
          <button
            type="button"
            onClick={searchCancelHandler}
            className={classes.cancel}
          >
            Cancel
          </button>
        </form>
      )}
      {inputError === "problemInput" && (
        <p className={classes.inputError}>
          Please enter more than 2 alphabets/letters.
        </p>
      )}
      {choosenMovie && (
        <div>
          <Catchdisplay onChange={choosenMovieName} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Homebtn;
