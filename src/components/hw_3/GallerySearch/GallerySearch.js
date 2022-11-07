import React, { Component } from "react";
import { getImageFromQuery } from "services/api";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";

export default class GallerySearch extends Component {
  state = {
    imgName: '',
    gallery: [],
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    
    try {
      const nextName = this.state.imgName;
      const prevName = prevState.imgName;
      const nextPage = this.state.page;
      const prevPage = prevState.page;
      
   
      if (nextName !== prevName || nextPage !== prevPage) {
        this.setState({ isLoading: true }); 
        this.createGallery();
               
      };
    }
    catch(error) {
      console.log(error.message)
      this.setState({ isLoading: false });
      
    }
   
  };
  
  hundleFormSubmite = (imgName) => {
    this.setState({
      imgName,
      gallery: [],
      page: 1,
    })
  };
  
  createGallery = async () => {
    const { imgName, page } = this.state;
    const { hits } = await getImageFromQuery(imgName, page);

    if (hits.length === 0) {
      this.setState({
        gallery: []
      });
      return;
    };

    this.setState(prevState => ({
      gallery: [...prevState.gallery, ...hits]
    }));
    this.setState({ isLoading: false });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, gallery } = this.state;
    const isGallery = gallery.length;
   return <>
     <Searchbar onSubmit={this.hundleFormSubmite} />
     {isGallery ? <ImageGallery gallery={gallery}/> : null}
     {isLoading ? <Loader /> : null }
     {isGallery ? <Button onLoadMore={this.loadMore} /> : null}
     
  </>
  };
};