import { Routes, Route } from "react-router-dom";
import { MoviesDetails, MoviesList, PagesNotFound, Search } from "../pages";
const AllRouters = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<MoviesList title="MovieHunt" apiPath="movie/now_playing" />}
        />
        <Route
          path="/movies/popular"
          element={
            <MoviesList title="Popular Movies" apiPath="movie/popular" />
          }
        />
        <Route
          path="/movies/top"
          element={
            <MoviesList title="Top Rated Movies" apiPath="movie/top_rated" />
          }
        />
        <Route
          path="/movies/upcoming"
          element={
            <MoviesList title="Upcoming Movies" apiPath="movie/upcoming" />
          }
        />
        <Route
          path="movie/:id"
          element={<MoviesDetails title="" apiPath="movie/upcoming" />}
        />
        <Route
          path="search"
          element={<Search title="" apiPath="search/movie" />}
        />
        <Route path="*" element={<PagesNotFound title="Page Not Found" />} />
      </Routes>
    </div>
  );
};

export default AllRouters;
