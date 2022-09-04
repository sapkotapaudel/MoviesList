import React, {useState} from "react"
import classes from './likeDisplay.module.css'
import unavailablePoster from "./../img/unavailablePoster.jpeg";

const LikeDisplay =(props)=>{
  
    const allMovies = JSON.parse(localStorage.getItem(props.movies))
    const [remove, setRemove] = useState(false)
    if (allMovies!==null){
        const posterSrc =
        allMovies.Poster === "N/A" ? unavailablePoster : allMovies.Poster;
        const posterSize = allMovies.Poster === "N/A" ? classes.defaultPoster : "";
    
    
    

  const removelikeHandler = (imdbID) => {
    localStorage.removeItem(imdbID+"like")
   setRemove(true)
    

  }

    return <React.Fragment>
      
    <div className={classes.moviesList}>
      
    <div className={classes.eachMovie}>
        {<img src={posterSrc} alt="poster" className={posterSize} />}
       
        
        <div className={classes.title}>{allMovies.Title}</div>
      
        
       {!remove && <button onClick={()=>removelikeHandler(allMovies.imdbID)} className={classes.fav}>Remove Favrouite</button>}
        {remove && <button className={classes.fav}>REMOVED Favrouite</button> } 
       
      </div>
    </div>
    <div>
       
    </div>
  </React.Fragment>
 
}  
}

export default LikeDisplay