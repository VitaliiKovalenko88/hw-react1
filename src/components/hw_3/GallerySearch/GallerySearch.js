import React, { Component } from "react";
import { getImageFromQuery } from "services/api";
import { Searchbar } from "./Searchbar/Searchbar";

export default class GallerySearch extends Component {
  state = {
    imgName: '',
    gallery: [],
    page:1,
  }

 async componentDidUpdate(prevProps, prevState) {
   const nextName = this.state.imgName;
   const prevName = prevState.imgName;
   
   if (nextName !== prevName) {
     this.createGallery();
   }
  }
  
  hundleFormSubmite = (imgName) => {
    this.setState({
      imgName,
      gallery:[],
      page:1, 
    })
  }
  
  createGallery = async () => {
    const { imgName, page } = this.state;

    const { hits } = await getImageFromQuery(imgName, page);
    if (hits.length === 0) {
      this.setState({
        gallery: []
      });
    }

    this.setState(prevState => ({
      gallery:[...prevState.gallery, ...hits]
    }))
  }

  render() {
   return <>
    <Searchbar onSubmit={this.hundleFormSubmite} />
  </>
}
};