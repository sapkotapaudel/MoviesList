import React, { useState, useEffect } from "react";
import Display from "./display";
import classes from "./catchDisplay.module.css";

const Catchdisplay = (props) => {
  const [allMovies, setAllMovies] = useState([]);
  const [httpError, setHttpError] = useState(false);
  const [loadingError, setloadingError] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${props.onChange}&apikey=10cf3ef8`
      );

      const responseData = await response.json();

      if (responseData.Response === "False") {
        setHttpError(true);
        throw new Error("Something went wrong");
      }


      console.log("ResonseData:");
      console.log(responseData);
      const movies = responseData.Search;

  //     const loadedMovies =[]
  //     movies.map(eachMovie=>(
  //       loadedMovies.push({
  //         ...eachMovie
         
  //       })
  // ))
      
      setAllMovies(movies);
      setloadingError(false)
    };
    fetchMovies(props.onChange).catch(() => {
      setloadingError(false)
      setHttpError(true)
    });
  }, [props]);

  if (loadingError) {
    return <p className={classes.loadingError}>Loading...</p>;
  }

  if (httpError) {
    return (
      <div className={classes.inputError}>
        <div>Couldn't find any movie of this name. </div>
        <div> Please enter a new movie name.</div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className={classes.allMovies}>
      {allMovies.map((movie) => (
        <Display key={Math.random()} movies={movie} />
      ))}
      </div>
      
    </React.Fragment>
  );
};

export default Catchdisplay;
