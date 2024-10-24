import { FC } from "react"

interface SearchProps {
  searchParam: string,
  setSearchParam: CallableFunction,
}

const MySearch: FC<SearchProps> = ({ searchParam, setSearchParam }) => {
  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchParam(e.target.value)
  }

  return (
    <section>
      <input
        className="input"
        placeholder="Поиск фильма по названию"
        aria-label="Поиск фильма по названию"
        value={searchParam}
        onChange={e => handlerSearch(e)} 
      />
    </section>
  )
}

export default MySearch