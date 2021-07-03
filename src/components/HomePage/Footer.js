import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="underline"></div>
      <div className="movie-description">
        <span className="brand">movie info</span> is an online database of
        information related to Films, Television programs, Series, including
        Lead cast, Plot summaries, Ratings, Director, Genre, Released year,
        Available languages.
        <span className="paragraph">
          You can search any movie or series you want.
        </span>
        <div className="reserved">
          <AiOutlineMail className="email" />
          <span>irshath700@gmail.com</span>
          <span className="reserved">
            <AiOutlineCopyright className="copy-icon" />
            {date} All Right Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
