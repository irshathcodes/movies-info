import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieDetails = ({
  Title,
  Year,
  Runtime,
  Genre,
  Director,
  Actors,
  Plot,
  Language,
  Poster,
  Ratings,
  Type,
}) => {
  return (
    <>
      <div className="mobile-poster">
        <img src={Poster} alt="" className="single-img" />
      </div>
      <section className="singleMovie-container">
        <div className="title-year">
          <h1 className="title">{Title}</h1>
          <p className="year">
            {Year} {Type}
          </p>
        </div>

        <div className="plot">{Plot}</div>
        <div className="div">
          Duration: <span>{Runtime}</span>
        </div>
        <div className="div">
          Genre:<span>{Genre}</span>
        </div>
        <div className="div">
          Ratings:
          <span>IMDb {Ratings[0] && Ratings[0].Value} </span>
        </div>
        <div className="div">
          Director: <span>{Director}</span>
        </div>
        <div className="div">
          Language: <span>{Language}</span>
        </div>
        <div className="div">
          Lead Actors: <span>{Actors}</span>
        </div>
      </section>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="classofbtn">
          <button className="btn">Back Home</button>
        </div>
      </Link>
    </>
  );
};

MovieDetails.propTypes = {
  Ratings: PropTypes.array,
};
MovieDetails.defaultProps = {
  Ratings: [{ Source: "None", Value: "not found" }],
};

export default MovieDetails;
