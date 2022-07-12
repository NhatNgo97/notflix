import { api } from "./api";

const API_KEY = process.env.REACT_APP_API_KEY;
const genreSevices = {
  async getTvGenres() {
    try {
      const response = await api.get(
        `genre/tv/list?api_key=${API_KEY}&language=en-US`
      );
      return response.data.genres;
    } catch (err) {
      console.log(err);
    }
  },
  async getMovieGenres() {
    try {
      const response = await api.get(
        `genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      return response.data.genres;
    } catch (err) {
      console.log(err);
    }
  },
};
export default genreSevices;
