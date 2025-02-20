import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import images from "../assets/Galery icon.jpeg";
import { Timezone } from "../utils/utils";

export const MoviesDetails = () => {
  const [movies, setMovies] = useState([]);
  const prams = useParams();
  const url = `https://api.themoviedb.org/3/movie/${prams.id}?api_key=0ef270d44d657155d7c4e1c52770154a`;
  const {
    poster_path,
    genres,
    runtime,
    vote_average,
    vote_count,
    title,
    overview,
    budget,
    revenue,
    release_date,
    imdb_id,
  } = movies;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jasonData) => setMovies(jasonData));
    }
    fetchMovies();
  });
  useEffect(() => {
    document.title = `${movies.title}`;
  });
  const image = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : images;

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movies.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} alt="" className="card-img-top" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{title}</h3>
          <p className="mt-3">{overview}</p>{" "}
          {genres ? (
            <p className="d-flex gap-3">
              {genres.map((genre) => (
                <span key={genre.id} className="badge bg-danger gap-3">
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}
          <p>
            <i className="bi bi-star-fill text-warning" /> {vote_average} |{" "}
            <i className="bi bi-people-fill text-success" /> {vote_count}{" "}
            reviews
          </p>
          <table className="table table-bordered w-50 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td> {Timezone(runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td> {budget}</td>
              </tr>
              <tr>
                <th>Runtime</th>
                <td> {runtime}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td> {revenue}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td> {release_date}</td>
              </tr>
            </tbody>
          </table>
          <Link
            type="btn"
            to={`https://www.imdb.com/title/${imdb_id}/`}
            className="btn btn-warning"
          >
            {" "}
            View in IMDB
          </Link>
        </div>
      </div>
    </main>
  );
};
