export function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
}

export function countRuntime(n) {
  return `${Math.floor(n / 60)}h ${n % 60}m`;
}

export function getMovieTrailerPath(movie) {
  const trailerPath = movie.videos?.results.find(
    (item) => item.type === "Trailer"
  )?.key;
  const TrailerUrl =
    "https://www.youtube.com/watch?v=" + trailerPath + "?autoplay=0";
  return TrailerUrl;
}

export function creditsListing(list, limit) {
  const nameList = list.slice(0, limit ? limit : list.length).map((item) => {
    return item["name"];
  });
}
