import { useAppSelector } from "../store/hooks";
import { useGetFavoritesByIdQuery } from "../store/services/movies";
import MovieItem from "../components/MovieItem"
import MyLoader from "../components/MyLoader";

const Favorites = () => {
  const { user } = useAppSelector((state) => state.auth);
  const favorites = user && user?.favorites.length ? user?.favorites : [];
  const {data, isLoading} = useGetFavoritesByIdQuery({ids:  favorites})

  if (isLoading) return <MyLoader />
  if (favorites.length < 1) return <span className="error404">Список пуст</span>

  return (
    <>
      <ul className="movies-list">
        {data?.map((favorite) => (
          <MovieItem
          key={favorite.imdbID}
          movie={favorite} />
        ))}
      </ul>
    </>
  )
}

export default Favorites