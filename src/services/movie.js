import { api } from "./api";

const API_KEY = process.env.REACT_APP_API_KEY;
const itemService = {
  getList({ mediaType }) {
    return api.get(`/discover/${mediaType}/?api_key=${API_KEY}`);
  },
};
