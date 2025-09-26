import MovieCard from "../components/movieCard";
import { useState } from "react";
import { searchResultsApiData } from "../services/api";

export default function HomePage({ moviesData, getMovie, setMoviesData }) {
  const [query, setQuery] = useState("");

  const filteredData = moviesData.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(query.toLowerCase()) &&
      movie.poster_path
    );
  });

  const handlSumbit = async (e) => {
    e.preventDefault();
    try {
      const data = await searchResultsApiData(query);

      setMoviesData(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="max-w-[full]   mx-auto">
      <form
        onSubmit={handlSumbit}
        className="flex text-center justify-center items-center my-10 gap-2 "
      >
        <input
          type="text"
          className=" border focus:outline-0 border-gray-500 px-3 py-2 rounded"
          placeholder="search for movie "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className=" bg-gray-700 text-white text-sm font-medium p-3 hover:bg-gray-600 focus:bg-gray-600  rounded-xl"
        >
          Search
        </button>
      </form>
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {filteredData.length > 0
          ? filteredData.map((movie) => (
              <MovieCard key={movie.id} movie={movie} getMovie={getMovie} />
            ))
          : null}
      </div>
    </section>
  );
}
