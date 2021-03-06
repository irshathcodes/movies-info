import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../HomePage/Loading";
import { useMyContextApi } from "../../context";
import MovieDetails from "./MovieDetails";

import "./singleMovie.css";

const SingleMovie = () => {
  const [data, setData] = useState([]);
  const { loading, setLoading, setError } = useMyContextApi();

  const { id } = useParams();
  const url = `https://www.omdbapi.com/?apikey=78deb654&i=${id}`;
  const fetchId = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const idData = await response.json();
      if (idData.Response === "True") {
        setData(idData);
      } else {
        setError({ showError: true });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchId();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <MovieDetails {...data} />;
};

export default SingleMovie;
