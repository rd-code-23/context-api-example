import React, {useContext} from 'react'
import { MovieContext} from './MovieContext.jsx'
import Movie from './Movie.jsx'
const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
        
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}
        </div>
    )
}

export default MovieList
