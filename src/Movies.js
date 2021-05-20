import React from "react";
import Loading from "./Loading";
import Footer from "./Footer";
import { useMyContextApi } from "./context";
import { Link } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { data, loading } = useMyContextApi();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className="poster-container">
        {data.map((item) => {
          const { imdbID, Title, Poster, Year } = item;
          return (
            <>
              <Link
                to={`/movies/${imdbID}`}
                key={imdbID}
                style={{ textDecoration: "none" }}
                className="all-info"
              >
                <article key={imdbID}>
                  <img
                    src={Poster === "N/A" ? url : Poster}
                    alt={Title}
                    className="poster-img"
                  />
                  <div className="movie-info">
                    <h2>{Title}</h2>
                    <p>{Year}</p>
                  </div>
                </article>
              </Link>
            </>
          );
        })}
      </section>
      <div className="end">End of Search</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Movies;
