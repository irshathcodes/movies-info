import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <p>
      Sorry, Page not found
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="classofbtn">
          <button className="btn">Back Home</button>
        </div>
      </Link>
    </p>
  );
};

export default Error;
