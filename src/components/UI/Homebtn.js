import classes from "./Homebtn.module.css";
import React, { useState } from "react";
import Catchdisplay from "../moviesList/catchDisplay";

const Homebtn = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [choosenMovieName, setChoosenMovieName] = useState("");
  const [choosenMovie, setChosenMovie] = useState(false);
  const [inputError, setInputError] = useState('valid')

  const searchBarHandler = () => {
    setSearchBar(true);
    setChosenMovie(false)
  };
 
  const userInputHandler = (event) => {
    setChoosenMovieName(event.target.value);
    setChosenMovie(false);
    setInputError('valid')
  };

  const formSubmitHandler= (event) => {
    event.preventDefault();
   
      if (choosenMovieName.trim().length>2)
      {
        setInputError('valid')
        setChosenMovie(true);
      }
      
    else
    {setInputError('problemInput')
      setChosenMovie(false);}

    

  };

  console.log(inputError)

  const searchCancelHandler = () => {
    setSearchBar(false);
    setChoosenMovieName('');
    setChosenMovie(false)
    setInputError('valid')
  }

  return (
    <React.Fragment>
      <div className={classes.topic}>Your Movies List!</div>
    
      <div className={classes.btngroup}>
      <button className={classes.fav}> Favrouite Movies</button>
        <button className={classes.dislike}> Disliked Movies</button>
        {!searchBar && (
          <button className={classes.search} 
            onClick={searchBarHandler}>
            Search Movies
          </button>
        )}
       
       
      </div>

      {searchBar && (
          <form onSubmit={formSubmitHandler} className={classes.form}>
            <input
              type="text"
              placeholder="What movie are you looking for?"
              onChange={userInputHandler}
              value={choosenMovieName}
              className={classes.input}
            />
            
            <button type="submit" className={classes.inputSearch}>Search</button>
            <button type="button" onClick={searchCancelHandler} className={classes.cancel}>Cancel</button>
            
          </form>
          
          
        )}
      {inputError==='problemInput' && <p className={classes.inputError}>Please enter more than 2 alphabets/letters.</p>}
      {choosenMovie && (
        <div>
          <Catchdisplay onChange={choosenMovieName} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Homebtn;
