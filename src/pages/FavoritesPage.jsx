import MovieCard from "../components/movieCard";

export default function FavoritesPage({ FavoriteData, getMovie }) {
  return (
    <section>
      <div className="w-full flex justify-center items-center mt-3">
        <h1 className="">
          <i>Favourites (0{FavoriteData.length})</i>
        </h1>
      </div>
      <div>
        {FavoriteData.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} getMovie={getMovie} />;
        })}
      </div>
    </section>
  );
}
