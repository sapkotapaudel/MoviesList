import React, { useState } from "react";
import classes from "./display.module.css";
import unavailablePoster from "./../img/unavailablePoster.jpeg";



const Display = (props) => {
  const [sendLikeStorage, setSendLikeStorage] = useState(false);
  const [sendDislikeStorage, setSendDislikeStorage] = useState(false);

  const posterSrc =
    props.movies.Poster === "N/A" ? unavailablePoster : props.movies.Poster;
  const posterSize = props.movies.Poster === "N/A" ? classes.defaultPoster : "";

  const likeHandler = () => {
    setSendLikeStorage(true);

    const likeConfirmHandler = async () => {
        await fetch("https://mymovielist-7f102-default-rtdb.firebaseio.com/likedmovies.json",{
            method:'POST',
            body:JSON.stringify({user:props.movies})
        })
    }

    likeConfirmHandler()
  };

  const disLikeHandler = () => {
    setSendDislikeStorage(true)
    setSendLikeStorage(false);
    const dislikeConfirmHandler = async () => {
        await fetch("https://mymovielist-7f102-default-rtdb.firebaseio.com/dislikedmovies.json",{
            method:'POST',
            body:JSON.stringify({user:props.movies})
        })
    }

    dislikeConfirmHandler();
    
  }

  const removelikeHandler = () =>{

    setSendLikeStorage(false);
  }

  const removedisLikeHandler = () => {

    setSendDislikeStorage(false)
  }

  return (
    <React.Fragment>
      <div className={classes.moviesList}>
        <div>
          {<img src={posterSrc} alt="poster" className={posterSize} />}
          <div>{props.movies.Title}</div>

          <div className={classes.eachMovBtn}>
            {!sendLikeStorage && <button onClick={likeHandler} className={classes.fav}>Favrouite</button>}
            {sendLikeStorage && <button onClick={removelikeHandler} className={classes.fav}>Remove Favrouite</button>}
            
            {!sendDislikeStorage && <button onClick={disLikeHandler} className={classes.dislike}>Dislike</button>}
            {sendDislikeStorage && <button onClick={removedisLikeHandler} className={classes.dislike}>Remove Disliked</button>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Display;
