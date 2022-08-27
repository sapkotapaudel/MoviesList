import React, { useState } from "react";
import classes from "./display.module.css";
import unavailablePoster from "./../img/unavailablePoster.jpeg";



const Display = (props) => {
  const [sendLikeStorage, setSendLikeStorage] = useState(false);
  const [sendDislikeStorage, setSendDislikeStorage] = useState(false);

  const posterSrc =
    props.movies.Poster === "N/A" ? unavailablePoster : props.movies.Poster;
  const posterSize = props.movies.Poster === "N/A" ? classes.defaultPoster : "";

  const likeHandler = (imdbID) => {
    setSendLikeStorage(true);


    const likeConfirmHandler = async () => {

      fetch(`https://mymovielist-7f102-default-rtdb.firebaseio.com/dislikedmovies/${imdbID}.json`, {method:"DELETE"}).catch()
       
        await fetch(`https://mymovielist-7f102-default-rtdb.firebaseio.com/likedmovies/${imdbID}.json`,{
            method:'POST',
            body:JSON.stringify({imdbID:props.movies})
        })
    }

    likeConfirmHandler()
  };

  const disLikeHandler = (imdbID) => {
    setSendDislikeStorage(true)
    setSendLikeStorage(false);

   
    const dislikeConfirmHandler = async () => {
      fetch(`https://mymovielist-7f102-default-rtdb.firebaseio.com/likedmovies/${imdbID}.json`,{
        method: 'DELETE'
      }).catch()
      
        await fetch(`https://mymovielist-7f102-default-rtdb.firebaseio.com/dislikedmovies/${imdbID}.json`,{
            method:'POST',
            body:JSON.stringify({imdbID:props.movies})
        })
    }

    dislikeConfirmHandler();
    
  }

  const removelikeHandler = (imdbID) =>{

    setSendLikeStorage(false);
    const remove=()=>{
      fetch(`https://mymovielist-7f102-default-rtdb.firebaseio.com/likedmovies/${imdbID}.json`,{
        method: 'DELETE'
      })

    }
    remove()
  }

  const removedisLikeHandler = (imdbID) => {

    setSendDislikeStorage(false)

    const remove=()=>{
      fetch(`https://mymovielist-7f102-default-rtdb.firebaseio.com/dislikedmovies/${imdbID}.json`,{
        method: 'DELETE'
      })

    }
    remove()
  }

  return (
    <React.Fragment>
      <div className={classes.moviesList}>
        <div>
          {<img src={posterSrc} alt="poster" className={posterSize} />}
          <div>{props.movies.Title}</div>

          <div className={classes.eachMovBtn}>
            {!sendLikeStorage && <button onClick={()=>likeHandler(props.movies.imdbID)} className={classes.fav}>Favrouite</button>}
            {sendLikeStorage && <button onClick={()=>removelikeHandler(props.movies.imdbID)} className={classes.fav}>Remove Favrouite</button>}
            
            {!sendDislikeStorage && <button onClick={()=>disLikeHandler(props.movies.imdbID)} className={classes.dislike}>Dislike</button>}
            {sendDislikeStorage && <button onClick={()=>removedisLikeHandler(props.movies.imdbID)} className={classes.dislike}>Remove Disliked</button>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Display;
