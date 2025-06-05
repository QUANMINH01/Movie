import { useEffect, useState } from "react";
import { Header } from "./components/Header.jsx";
import { Banner } from "./components/Banner.jsx";
import { MovieList } from "./components/MovieList.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieRate, setMovierate] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSeach = async (searchVal) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Hàm để reset searchResults khi nhấn Home
  const handleClearSearch = () => {
    setSearchResults([]);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovies(data1.results);
      setMovierate(data2.results);
    };

    fetchMovie();
  }, []);

  return (
    <div className="bg-black pb-8">
      <Header onSearch={handleSeach} onClearSearch={handleClearSearch} />
      <Banner />
      {searchResults && searchResults.length > 0 ? (
        <MovieList title={"Kết Quả Tìm Kiếm"} data={searchResults} />
      ) : (
        <>
          <MovieList title={"Phim Hot"} data={movies} />
          <MovieList title={"Phim Đề Cử"} data={movieRate} />
        </>
      )}
    </div>
  );
}

export default App;
