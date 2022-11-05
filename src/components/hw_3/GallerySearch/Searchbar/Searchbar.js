import React, { Component } from "react"

export class Searchbar extends Component {
  render() {
    return (
      <header>
        <form>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos" />
        </form>
      </header>)
  };
  
}