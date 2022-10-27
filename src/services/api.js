import axios from "axios";

 export const fetchArticlesWithQuery = async searchQuery => {
  const response = axios.get(`/search?query=${searchQuery}`);
  const data = await response;
  console.log(data)
  return data.hits;
};

export default {
fetchArticlesWithQuery
};

