import { NavLink } from 'react-router-dom';
import { MoviesListData } from '../store/services/movies';
import { FC } from 'react';

interface MovieProps {
	movie: MoviesListData;
}

const MovieItem: FC<MovieProps> = ({movie}: MovieProps) => {
  return (
		<NavLink to={`/movie/${movie.imdbID}`}>
			<li className="movie">
				{movie.Poster === 'N/A' 
				? <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/300px-No-Image-Placeholder.svg.png' alt='No images' /> 
				: <img src={movie.Poster} alt={movie.Title} className="movie-img" />}
				<h3 className="movie-title">{movie.Title}</h3>
        <span className="movie-content">Год выпуска: {movie.Year}</span>
        <span className="movie-content">Категория: {movie.Type}</span>
			</li>
		</NavLink>
  )
}

export default MovieItem