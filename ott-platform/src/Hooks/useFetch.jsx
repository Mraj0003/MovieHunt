import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  console.log("Fetch", apiPath);
  const [data, setData] = useState([]);
  //const key = import.meta.env.API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=0ef270d44d657155d7c4e1c52770154a&query=${queryTerm}`;
  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setData(jsonData.results));
    }
    fetchMovies();
  }, [url]);
  return { data };
};
