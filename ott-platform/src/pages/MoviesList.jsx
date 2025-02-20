import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../Hooks/useFetch";

export const MoviesList = ({ title, apiPath }) => {
  console.log("movieList", apiPath);
  const location = useLocation();
  const navigator = useNavigate();
  const { data: movies = [] } = useFetch(apiPath);
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <main className="container">
        {location.pathname === "/" && (
          <div className="bg-body-tertiary p-4 border mb-4">
            <h3 className="text-danger py-2 border-bottom">
              Welcome to MovieHunt
            </h3>
            <p className="text-danger">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button
              className="btn btn-danger"
              onClick={() => navigator("/movies/upcoming")}
            >
              Explore Now
            </button>
          </div>
        )}
        <h5 className="text-danger py-2 border-bottom">{title}</h5>
        {movies.length === 0 ? (
          <p className="text-center text-bg-danger">No Data Found</p>
        ) : (
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-3 py-2">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
