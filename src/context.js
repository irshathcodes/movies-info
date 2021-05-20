import React, { useState, useEffect, useContext } from "react";

const myContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("avengers");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ showError: false, msg: "" });

  const url = `http://www.omdbapi.com/?apikey=78deb654&s=${query}`;
  const MyFetch = () => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const allData = await response.json();

        if (allData.Response === "True") {
          setData(allData.Search);
          setError({ showError: false, msg: "" });
        } else if (query.length === 0) {
          setQuery("avengers");
        } else {
          setError({ showError: true, msg: allData.Error });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchApi();
    }, [query]);
  };
  MyFetch();
  return (
    <myContext.Provider
      value={{
        query,
        setQuery,
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export const useMyContextApi = () => {
  return useContext(myContext);
};

export { myContext, AppProvider };
