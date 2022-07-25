import { useContext, useEffect, useState } from "react";
import { GenresContext } from "../../contexts/GenresProvider";
import itemService from "../../services/item";
import RecommendItem from "./RecommendItem";

function RecommendItems({ id }) {
  const { mediaType } = useContext(GenresContext);
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    async function fetchRecommendList() {
      const reponseList = await itemService.getRecommend({
        mediaType: mediaType,
        id: id,
      });
      setRecommendList(reponseList.results);
    }
    fetchRecommendList();
  }, []);
  console.log(recommendList[0]);

  if (recommendList.length === 0) return <div>a</div>;
  return (
    <div className="modal__morelikethis">
      <h2>More Like This</h2>
      <div className="recommendation__list">
        {recommendList.slice(0, 12).map((item) => {
          return (
            <RecommendItem
              key={item.id}
              backdrop={item.backdrop_path}
              rate={item.vote_average}
              year={item.release_date}
              description={item.overview}
              name={item.original_title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecommendItems;
