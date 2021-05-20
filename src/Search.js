import React, { useRef, useEffect } from "react";

import { useMyContextApi } from "./context";

const Search = () => {
  const { setQuery, error } = useMyContextApi();
  const focusRef = useRef("");

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <>
      <div className="search-container">
        <div className="label-search">search movie</div>
        <input
          type="text"
          className="input-class"
          placeholder="enter the movie name"
          ref={focusRef}
          onChange={(e) => {
            return setQuery(e.target.value);
          }}
        />
        {error.showError && <h2 className="error-report">{error.msg}</h2>}
      </div>
    </>
  );
};

export default Search;
