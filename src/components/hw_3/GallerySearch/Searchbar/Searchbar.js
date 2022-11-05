import React, { Component } from "react"

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
      <header>
        <form onSubmit={this.hundleSubmitName} >
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            onChange={this.hundleChangeName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
          />
        </form>
      </header>)
  };
  
}