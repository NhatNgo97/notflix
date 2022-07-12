import { useEffect, useState } from "react";
import { useWidthPartition } from "./useWidthPartition";

export function useSlider(movies) {
  const [sliderPage, setSliderPage] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const { posterNumberInOneView } = useWidthPartition();
  const [distance, setDistance] = useState("0");

  useEffect(() => {
    if (sliderPage <= 0) {
      setHasPrev(false);
    } else {
      setHasPrev(true);
    }
    if (sliderPage >= Math.floor(movies.data.length / posterNumberInOneView)) {
      setHasNext(false);
    } else {
      setHasNext(true);
    }
    setDistance("-" + parseInt(sliderPage * 100) + "%");
  }, [sliderPage, movies, posterNumberInOneView]);

  function handlePaginate(num) {
    setSliderPage(parseInt(sliderPage + num));
  }
  return { sliderPage, hasNext, hasPrev, distance, handlePaginate };
}
