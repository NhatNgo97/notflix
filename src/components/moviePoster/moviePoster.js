import requests from "../../requests";
import "./moviePoster.css"

function MoviePoster({movie})  {

  return (
    <div 
      className="moviePoster" 
      style={{
        backgroundImage : `url(${requests.baseUrlImg}${movie.poster_path})`
      }}
    >
    </div>
  )
}

export default MoviePoster;