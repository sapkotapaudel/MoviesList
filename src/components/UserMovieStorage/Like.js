import React from "react";
import LikeDisplay from "./likeDisplay";
import classes from './like.module.css'

const Like = () => {
  const allKeys = Object.keys(localStorage);
 
  
  

  return (
    <React.Fragment>
      <div className={classes.title}> Your Favrouites!!</div>
      <button className={classes.clear}>Clear All</button>
        <div className={classes.allMovies}>
        {allKeys.filter((key)=>
         key.substring(key.length - 7)!== "dislike"
     ).map(filteredKey => (
        <LikeDisplay key={Math.random()} movies={filteredKey}/>
      ))}
        </div>
    
    
    </React.Fragment>
  );
};

export default Like;
