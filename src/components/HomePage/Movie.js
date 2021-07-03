import { Link } from "react-router-dom";

const Movie = ({ imdbID, Title, Poster, Year }) => {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"; // image for unavailable posters

  return (
    <>
      <Link
        to={`/movies/${imdbID}`}
        style={{ textDecoration: "none" }}
        className="all-info"
      >
        <article>
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
};

export default Movie;
