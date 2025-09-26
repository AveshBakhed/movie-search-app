import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="w-full flex justify-between p-4 text-center items-center  shadow-md">
        <Link className="font-bold text-3xl text-gray-600" to="/">
          <b>Movies</b>App.
        </Link>
        <Link
          className="font-semibold text-md text-red-400 px-2 border-x-8 border-y-1 rounded-2xl"
          to="/favorite-page"
        >
          Favorites
        </Link>
      </header>
    </>
  );
}
