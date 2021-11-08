import React from 'react';
import { Component } from 'react';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  render() {
    return (
      <section className="movie-search">
        <p>Search:</p>
        <input
          type="text"
          placeholder="space odyssey"
          defaultValue={this.state.searchValue}
          onChange={event => this.props.handleChange(event)}
        />
      </section>
    )
  }
}

export default SearchField;
