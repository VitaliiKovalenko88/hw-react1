import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export default class GallerySearch extends Component {
  state = {
    imgName: '',
    gallery: [],
}
  
  render() {
   return <>
    <Searchbar/>
  </>
}
};