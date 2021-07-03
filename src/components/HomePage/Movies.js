import Loading from "./Loading";
import Footer from "./Footer";
import { useMyContextApi } from "../../context";
import Movie from "./Movie";

const Movies = () => {
  const { data, loading } = useMyContextApi();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className="poster-container">
        {data.map((item) => {
          return <Movie key={item.imdbID} {...item} />;
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
