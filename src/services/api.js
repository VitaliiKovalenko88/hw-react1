import axios from "axios";

 export const fetchArticlesWithQuery = async searchQuery => {
  const response = axios.get(`/search?query=${searchQuery}`);
  const data = await response;
  const {hits} = data.data;
  console.log(hits)
  return data.data.hits;
};

export default {
fetchArticlesWithQuery
};

