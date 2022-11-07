import React, { Component } from "react";
import { getImageFromQuery } from "services/api";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
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
      
   
      if (nextName !== prevName || nextPage!==prevPage) {
        this.createGallery();
        this.setState({ isLoading: false });
        console.log("render");
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
    this.setState({ isLoading: true });
    const { imgName, page } = this.state;
    const { hits } = await getImageFromQuery(imgName, page);

    if (hits.length === 0) {
      this.setState({
        gallery: []
      });
    };

    this.setState(prevState => ({
      gallery: [...prevState.gallery, ...hits]
    }));
    
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page+1
    }))
  };

  render() {
    const {gallery} = this.state;
   return <>
     <Searchbar onSubmit={this.hundleFormSubmite} />
     <ImageGallery gallery={gallery} />
     {gallery.length > 0 ? <Button  onLoadMore={this.loadMore} /> : null}  
  </>
  };
};