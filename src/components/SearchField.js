import React from 'react';
import { Component } from 'react';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }
    handleChange = (event) => {
        this.props.searchMovies(event.target.value)
        this.setState({searchValue: event.target.value});
    }
    render() {
        return (
            <section className="movie-search">
                <p>Search:</p>
                <input
                    type="text"
                    placeholder="space odyssey"
                    defaultValue={this.state.searchValue}
                    onChange={event => this.handleChange(event)}
                />
            </section>
        )
    }
}

export default SearchField