import axios from "axios";

const API_KEY = '22469389-b601f8ee0455705c879309776';
const BASE_URL = 'https://pixabay.com/api';


 export const fetchArticlesWithQuery = async searchQuery => {
  const response = axios.get(`/search?query=${searchQuery}`);
  const data = await response;
  const {hits} = data.data;
  
  return hits;
};

export const getImageFromQuery = async (query, page) => {
  const response = axios.get(`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
  const data = await response;
  return data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
fetchArticlesWithQuery
};

