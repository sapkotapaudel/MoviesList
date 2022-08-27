import MovielistProvider from "../store/movielistProvider"
import {useContext} from 'react';
import MoviesContext from "../store/movielist-context";

const Dislike = (props) => 
{
    const moviesList = useContext(MoviesContext)
   return(
    <MovielistProvider>
            
    </MovielistProvider>
   )

}

export default Dislike