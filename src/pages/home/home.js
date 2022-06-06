import { useNavigate } from "react-router";
import Banner from "../../components/banner/banner";
import MovieRow from "../../components/movieRow/movieRow";
import Footer from "../../components/footer/footer";


function Home() {

  return (
    <div>
      <Banner />
      <div>
        <MovieRow title="Top Rated" fetchUrl="popular" />
        <MovieRow title="ABCD" fetchUrl="popular" />
      </div>
      <Footer />

    </div>
  );
}

export default Home;