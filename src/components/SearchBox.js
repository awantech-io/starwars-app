import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input type='search'
            placeholder='search people'
            onChange={searchChange}
        />
        </div>
    ) 
   
}
export default SearchBox;