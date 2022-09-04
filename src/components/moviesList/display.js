import React, { useEffect, useState } from "react";
import classes from "./display.module.css";
import unavailablePoster from "./../img/unavailablePoster.jpeg";

const Display = (props) => {
  const [sendLikeStorage, setSendLikeStorage] = useState(false);
  const [sendDislikeStorage, setSendDislikeStorage] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem(props.movies.imdbID+"like")!==null)
  {
    setSendLikeStorage(true)
  }

  if (localStorage.getItem(props.movies.imdbID+"dislike")!==null)
  {
    setSendDislikeStorage(true)
  }

  }, [props.movies])
  

  const createUserLike = async () => {
    setSendLikeStorage(true);
    setSendDislikeStorage(false)
    localStorage.setItem(props.movies.imdbID+"like", JSON.stringify(props.movies))
    if (localStorage.getItem(props.movies.imdbID+"dislike")!==null)
  {
    localStorage.removeItem(props.movies.imdbID+"like")
  }
   
  }

  const createUserDislike = async () => {
    setSendDislikeStorage(true)
    setSendLikeStorage(false);
    // localStorage.getItem("dislike", props.movies)
    localStorage.setItem(props.movies.imdbID+"dislike", JSON.stringify(props.movies))
    if (localStorage.getItem(props.movies.imdbID+"like")!==null)
    {
      localStorage.removeItem(props.movies.imdbID+"like")
    }
  }

  const posterSrc =
    props.movies.Poster === "N/A" ? unavailablePoster : props.movies.Poster;
  const posterSize = props.movies.Poster === "N/A" ? classes.defaultPoster : "";

  const removelikeHandler = (imdbID) =>{

    setSendLikeStorage(false);
    localStorage.removeItem(imdbID+"like")
   
  }

 
  const removedisLikeHandler = async (imdbID) => {

    setSendDislikeStorage(false)
    localStorage.removeItem(imdbID+"like")
   
  }


  return (
    <React.Fragment>
      <div className={classes.moviesList}>
        <div>
          {<img src={posterSrc} alt="poster" className={posterSize} />}
          <div>{props.movies.Title}</div>
        
          <div className={classes.eachMovBtn}>
            {!sendLikeStorage && <button onClick={createUserLike} className={classes.fav}>Favrouite</button>}
            {sendLikeStorage && <button onClick={()=>removelikeHandler(props.movies.imdbID)} className={classes.fav}>Remove Favrouite</button>}
            
            {!sendDislikeStorage && <button onClick={createUserDislike} className={classes.dislike}>Dislike</button>}
            {sendDislikeStorage && <button onClick={()=>removedisLikeHandler(props.movies.imdbID)} className={classes.dislike}>Remove Disliked</button>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Display;
