import React, { Component } from "react"
import { SearchForm, SearchFormButton, SearchFormInput, StyledSearchbar } from "./SearchBar.styled";
import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {
  state = {
    name:''
  }

  hundleChangeName = (e) => {
    const { value } = e.currentTarget;
    this.setState({ name: value })
  }

  hundleSubmitName = (e) => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      alert('Write the name in the search!!!');
      return;
    }

    this.props.onSubmit(this.state.name);
    this.setState({name:''})
  }

  render() {
    return (
      <StyledSearchbar>
        <SearchForm onSubmit={this.hundleSubmitName} >
          <SearchFormButton type="submit">
            <ImSearch/>
          </SearchFormButton>
          <SearchFormInput
            onChange={this.hundleChangeName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
          />
        </SearchForm>
      </StyledSearchbar>)
  };
  
}