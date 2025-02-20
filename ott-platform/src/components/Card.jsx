import "../sass/Card.scss";
import { Link } from "react-router-dom";
import images from "../assets/Galery icon.jpeg";
export const Card = ({ movie }) => {
  const { poster_path, id, vote_average, vote_count, title, overview } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : images;
  return (
    <div className="col">
      <div className="card shadow-sm " title={title}>
        <span className="Card_img">
          {" "}
          <img src={image} alt="" className="card-img-top" />
        </span>

        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-text overview_Text">{overview}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link
              to={`/movie/${id}`}
              className="btn btn-sm btn-outline-primary"
            >
              Read More
            </Link>
            <small>
              <i className="bi bi-star-fill text-warning"> </i>
              {vote_average} | {vote_count} review
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
