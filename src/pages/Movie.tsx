import { useParams } from "react-router-dom";
import MyLoader from "../components/MyLoader";
import BtnAddFavorites from "../components/BtnAddFavorites";
import { useGetMovieByIdQuery } from "../store/services/movies";
import { useFavorite } from "../hooks/useFavorite";

const Movie = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieByIdQuery({ movieId: String(id) });
  const { inFavorite, addInFavorite } = useFavorite(id);

  if (isLoading) {
    return <MyLoader />;
  }

  if (!movie) return <span className="error404">Информация отсутствует</span>

  return (
    <section className='section'>
      <div className='movie-container'>
        <div>
          <div className='movie-container_img'>
            {movie.Poster === 'N/A' 
            ? <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/300px-No-Image-Placeholder.svg.png' 
                alt="No images" 
              /> 
            : <img src={movie.Poster} alt={movie.Title} className="movie-img" />}
              <BtnAddFavorites onClick={addInFavorite} active={inFavorite} />
          </div>
        </div>
        <div className='movie-container_content'>
          <div>
            <p className="movie-container_content-title">
              {movie.Title} ({movie.Year})
            </p>
            <p className='movie-container_content-plot'>{movie.Plot}</p>
          </div>
          <div className='movie-container_content-info'>
            <p className="movie-container_content-title">
              Информация о {movie.Type}
            </p>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Genre:</span>
              <span className=''>{movie.Genre}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Released:</span>
              <span className='movie-container_content-infoData'>{movie.Released}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Runtime:</span>
              <span className='movie-container_content-infoData'>{movie.Runtime}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Director:</span>
              <span className='movie-container_content-infoData'>{movie.Director}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Writer:</span>
              <span className='movie-container_content-infoData'>{movie.Writer}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Actors:</span>
              <span className='movie-container_content-infoData'>{movie.Actors}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Language:</span>
              <span className='movie-container_content-infoData'>{movie.Language}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Country:</span>
              <span className='movie-container_content-infoData'>{movie.Country}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Rated:</span>
              <span className='movie-container_content-infoData'>{movie.Rated}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Awards:</span>
              <span className='movie-container_content-infoData'>{movie.Awards}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Ratings:</span>
              <ul className='movie-container_content-infoData'>
                {movie.Ratings.map((rating) => (
                  <li
                    className='movie-container_content-infoItem'
                    key={rating.Value}
                  >
                    <span className='movie-container_content-infoTitle'>{rating.Source}:</span>
                    <span className='movie-container_content-infoData'>{rating.Value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Metascore:</span>
              <span className=''>{movie.Metascore}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>imdbRating:</span>
              <span className='movie-container_content-infoData'>{movie.imdbRating}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>imdbVotes:</span>
              <span className='movie-container_content-infoData'>{movie.imdbVotes}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Type:</span>
              <span className='movie-container_content-infoData'>{movie.Type}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>DVD:</span>
              <span className='movie-container_content-infoData'>{movie.DVD}</span>
            </div>
            <div className='movie-container_content-infoItem'>
              <span className='movie-container_content-infoTitle'>Box Office:</span>
              <span className='movie-container_content-infoData'>{movie.BoxOffice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie