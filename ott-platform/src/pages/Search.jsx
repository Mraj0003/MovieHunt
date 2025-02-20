import { useSearchParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { useEffect } from "react";
import { Card } from "../components/Card";

export const Search = ({ apiPath }) => {
  const [searchParm] = useSearchParams();
  const queryTerm = searchParm.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search Result for ${queryTerm}`;
  });

  return (
    <main>
      <h5>
        <p className="text-center text-danger">
          {" "}
          {movies.length === 0
            ? `No result Found ${queryTerm}`
            : `Your Results`}
        </p>
      </h5>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-3 py-2">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
};
