import React, {useState} from "react"
import classes from './likeDisplay.module.css'
import unavailablePoster from "./../img/unavailablePoster.jpeg";

const DislikeDisplay =(props)=>{
  
    const allMovies = JSON.parse(localStorage.getItem(props.movies))
    const [remove, setRemove] = useState(false)
    if (allMovies!==null){
        const posterSrc =
        allMovies.Poster === "N/A" ? unavailablePoster : allMovies.Poster;
        const posterSize = allMovies.Poster === "N/A" ? classes.defaultPoster : "";
    
    
    

  const removedislikeHandler = (imdbID) => {
    localStorage.removeItem(imdbID+"dislike")
   setRemove(true)
    

  }

    return <React.Fragment>
    <div className={classes.moviesList}>
      
    <div className={classes.eachMovie}>
        {<img src={posterSrc} alt="poster" className={posterSize} />}
       
        
        <div className={classes.title}>{allMovies.Title}</div>
      
        
       {!remove && <button onClick={()=>removedislikeHandler(allMovies.imdbID)} className={classes.fav}>Remove</button>}
        {remove && <button className={classes.fav}>REMOVED </button> } 
       
      </div>
    </div>
    <div>
        {/* {console.log(JSON.parse(localStorage.getItem(allMovies)).Title)}
    {localStorage.getItem(allMovies).Title}
    {localStorage.getItem(allMovies.Type)}
    {localStorage.getItem(allMovies.Year)}
    {localStorage.getItem(allMovies.Poster)}
    {localStorage.getItem(allMovies.imdbId)}   */}
    </div>
  </React.Fragment>
 
}  
}

export default DislikeDisplay