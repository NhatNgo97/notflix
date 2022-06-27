import { useEffect, useState } from "react";

export function useWidthPartition() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [posterNumberInOneView, setPosterNumberInOneView] = useState(4);
  useEffect(() => {
    function handleResize() {
      setCurrentWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentWidth >= 1600) {
      setPosterNumberInOneView(6);
    } else if (currentWidth >= 1300) {
      setPosterNumberInOneView(5);
    } else if (currentWidth >= 1000) {
      setPosterNumberInOneView(4);
    } else if (currentWidth >= 700) {
      setPosterNumberInOneView(3);
    } else {
      setPosterNumberInOneView(2);
    }
  }, [currentWidth]);

  const posterWidth = parseFloat(100 / posterNumberInOneView) + "%";

  return { posterNumberInOneView, currentWidth, posterWidth };
}
