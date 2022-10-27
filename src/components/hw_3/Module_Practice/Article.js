import React, { Component } from "react";
import axios from "axios";
import api from "../../../services/api"

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class Article extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    
    try {
      const articles = await api.fetchArticlesWithQuery('react');
      
    this.setState({ articles });
    } catch (error) {
     
      this.setState({error})
    } finally {
      this.setState({isLoading: false}) 
    }
    
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 ? <ArticleList articles={articles} /> : null}
      </div>
    );
  }
}

export default Article;