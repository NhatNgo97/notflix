import { api } from "./api";

const API_KEY = process.env.REACT_APP_API_KEY;
const itemService = {
  async getList({ mediaType, genreId }) {
    const response = await api.get(`/discover/${mediaType}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        with_genres: genreId,
      },
    });
    return response.data;
  },
  async getBanner({ mediaType }) {
    const responseList = await api.get(`/trending/${mediaType}/day`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    const id =
      responseList.data.results[
        Math.floor(Math.random() * (responseList.data.results.length - 1))
      ].id;
    const responseDetail = await api.get(`/${mediaType}/${id}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        append_to_response: "videos",
      },
    });
    return responseDetail.data;
  },
  async getTrendingList({ mediaType }) {
    const response = await api.get(`/trending/${mediaType}/day`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return response.data;
  },

  async getTopRatedList({ mediaType }) {
    const response = await api.get(`/${mediaType}/top_rated`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return response.data;
  },
  async getRecommend({ mediaType, id }) {
    const response = await api.get(`/${mediaType}/${id}/recommendations`, {
      params: {
        api_key: API_KEY,
        language: "eu-US",
      },
    });
    return response.data;
  },
};

export default itemService;
