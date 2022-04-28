import { useNavigate } from "react-router";
import Banner from "../../components/banner/banner";
import MovieRow from "../../components/movieRow/movieRow";

function Home() {

  return (
    <div>
      <Banner />
      <MovieRow title="Top Rated" fetchUrl="popular" />
      <MovieRow title="ABCD" fetchUrl="popular" />
    </div>
  );
}

export default Home;