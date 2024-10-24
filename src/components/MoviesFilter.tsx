import { FC } from "react";

interface MoviesFilterProps {
  setTypeParam: CallableFunction,
}

const MoviesFilter: FC<MoviesFilterProps> = ({ setTypeParam }) => {
  return(
    <section>
      <label htmlFor="type">Type:</label>
      <select className='select-types' onChange={e => setTypeParam(e.target.value)} name="type" id="type">
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
        <option value="game">Game</option>
      </select>
    </section>
  );
}

export default MoviesFilter