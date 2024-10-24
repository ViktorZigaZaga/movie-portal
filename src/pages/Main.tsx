import { useState } from "react";
import MoviesList from "../components/MoviesList";
import MySearch from "../components/MySearch";
import MyLoader from "../components/MyLoader";
import { useGetListMoviesQuery } from "../store/services/movies";
import useDebounce from "../hooks/useDebounce";
import MyPagination from "../components/MyPagination";
import MoviesFilter from "../components/MoviesFilter";

const Main = () => {
	const [searchParam, setSearchParam] = useState('')
	const [page, setPage] = useState(1);
	const [type, setType] = useState('');

	let debouncedValue = useDebounce(searchParam, 800);

 	const { data, isLoading } = useGetListMoviesQuery({ 
		searchParam: debouncedValue, 
		page, 
		type, 
	});

	const handleChangePage = (async (page: number) => {
		setPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	if (isLoading) return <MyLoader />

  return (
		<main className="section">
			<section className="container">
				<MySearch 
					searchParam={searchParam} 
					setSearchParam={setSearchParam} 
				/>
				{ data &&
					<><MoviesFilter setTypeParam={setType} />
					<MoviesList movies={data?.Search}/>
					<MyPagination 
						total={Number(data?.totalResults)} 
						current={page} 
						onChangePage={handleChangePage}
					/></>
				}
			</section>
		</main>
	);
}

export default Main;