import { FC } from "react";
import { MoviesListData } from "../store/services/movies";
import MovieItem from "./MovieItem";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

interface MoviesListProps {
  movies: MoviesListData[];
}

const MoviesList: FC<MoviesListProps> = ({ movies }) => {
  if (!movies) return <span className="error404">Список пуст</span>

  return (
    <ErrorBoundary>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieItem
          key={movie.imdbID}
          movie={movie} />
        ))}
      </ul>
    </ErrorBoundary>
  )
}

export default MoviesList