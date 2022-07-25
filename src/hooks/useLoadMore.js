import { useState, useEffect } from "react";

export function useLoadMore(list) {
  const [currentIndexRow, setCurrentIndexRow] = useState(0);
  const [currentRowList, setCurrentRowList] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY >
          document.body.offsetHeight - window.innerHeight - 400 &&
        !isLoadingMore
      ) {
        setCurrentIndexRow((currentIndexRow) => currentIndexRow + 2);
        setIsLoadingMore((isLoadingMore) => !isLoadingMore);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (currentIndexRow < list.length) {
      const currentList = list.slice(currentIndexRow, currentIndexRow + 2);
      setCurrentRowList([...currentRowList, ...currentList]);
      setIsLoadingMore((isLoadingMore) => !isLoadingMore);
    }
  }, [currentIndexRow]);

  return {
    currentIndexRow,
    currentRowList,
    setCurrentRowList,
    isLoadingMore,
  };
}
