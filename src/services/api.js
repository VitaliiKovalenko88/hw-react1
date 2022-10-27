import axios from "axios";

 export const fetchArticlesWithQuery = async searchQuery => {
  const response = axios.get(`/search?query=${searchQuery}`);
  const data = await response;
  const {hits} = data.data;
  
  return hits;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
fetchArticlesWithQuery
};

