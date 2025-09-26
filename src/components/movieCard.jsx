import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function MovieCard({ movie, getMovie, favourite }) {
  // const moviePoster = movie.poster_path;

  const [desc, setDesc] = useState(false);
  const shortDesc = movie.overview.slice(0, 100);
  return (
    <div className="max-w-xs mx-auto mt-10  bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-fit object-cover"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Avenger Poster"
      />

      <div className="p-4">
        <div className="flex w-full justify-between items-center ">
          <h2 className="text-lg font-semibold text-gray-800">{movie.title}</h2>
          <span onClick={() => getMovie(movie.title)}>
            <MdFavoriteBorder className="text-xl hover:text-red-400 cursor-pointer" />

            {/* {favourite ? (
              <MdFavorite className="text-xl text-red-500" />
            ) : (
              <MdFavoriteBorder className="text-xl hover:text-red-400" />
            )} */}
          </span>
        </div>

        <p className="text-yellow-500 text-sm font-medium mb-2">
          ⭐ {Math.round(movie.popularity.toFixed(2))} /10
        </p>

        <p className="text-sm text-gray-600">
          {(desc ? movie.overview : shortDesc) + "...."}
        </p>
        <span
          onClick={() => setDesc((desc) => !desc)}
          className="text-sm font-semibold cursor-pointer"
        >
          see more
        </span>
      </div>
    </div>
  );
}
