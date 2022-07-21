import Banner from "../../components/banner/banner";
import MovieRow from "../../components/movieRow/movieRow";
import Footer from "../../components/footer/footer";
import "./home.css";
import { useContext } from "react";
import { GenresContext } from "../../contexts/GenresProvider";
import { useLoadMore } from "../../hooks/useLoadMore";

function Home() {
  const { mediaType, genreList } = useContext(GenresContext);
  const { currentRowList } = useLoadMore(genreList.movieGenres);
  return (
    <div>
      <Banner />
      <div className="main-content">
        <MovieRow mediaType={mediaType} title="Top Rated" />
        <MovieRow mediaType={mediaType} title="Trending" />
        {currentRowList.map((genre) => {
          return (
            <MovieRow
              key={genre.id}
              mediaType={mediaType}
              title={genre.name}
              genreId={genre.id}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
