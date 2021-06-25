import React from 'react';

const SearchBar = ({setSearchTerm}) => {
    return (
        <div className="ui fluid icon input">
            <input type="text" onChange={ e => setSearchTerm(e.target.value)} placeholder="Type ISBN or author email to search..." />
            <i className="search icon"></i>
        </div>
    );
}

export default SearchBar;