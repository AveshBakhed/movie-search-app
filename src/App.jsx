import Header from "./components/header";
import HomePage from "./pages/homepage";
import { getDataApi } from "./services/api";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [FavoriteData, setFavoriteData] = useState([]);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDataApi();
        setMoviesData(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("secuess");
      }
    };
    getData();
  }, []);

  // function for getting movie
  const getMovie = (title) => {
    const found = moviesData.find((movie) => movie.title === title);

    if (found) {
      setFavoriteData((prev) => {
        const exists = prev.some((item) => item.title === found.title);
        if (exists) {
          return FavoriteData.filter((item) => item.title !== found.title);
        } else {
          return [...prev, found];
        }
      });
    }
  };

  return (
    <main>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              moviesData={moviesData}
              setMoviesData={setMoviesData}
              getMovie={getMovie}
            />
          }
        />
        <Route
          path="/favorite-page"
          element={
            <FavoritesPage FavoriteData={FavoriteData} getMovie={getMovie} />
          }
        />
      </Routes>
    </main>
  );
}
