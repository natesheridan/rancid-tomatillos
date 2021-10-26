import React from 'react';
import { Component } from 'react';

const SearchField = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         searchValue: ''
    //     }
    // }
    // handleChange = (event) => {
    //     this.props.searchMovies(event.target.value)
    //     this.setState({searchValue: event.target.value});
    // }
    React.useEffect(() => {
        const results = people.filter(person =>
          person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);
      
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

export default SearchField