
import React from "react";
import DislikeDisplay from "./DislikeDisplay";
import classes from './like.module.css'

const Dislike = () => {
  const allKeys = Object.keys(localStorage);
  
  

  return (
    <React.Fragment>
         <div className={classes.title}> Your "NOT SO" Favrouites!!</div>

        <div className={classes.allMovies}>
        {allKeys.filter((key)=>
         key.substring(key.length - 7)=== "dislike"
     ).map(filteredKey => (
        <DislikeDisplay key={Math.random()} movies={filteredKey}/>
      ))}
        </div>
    
    
    </React.Fragment>
  );
};

export default Dislike;