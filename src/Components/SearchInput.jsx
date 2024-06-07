import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/action';

const SearchInput = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (
        <input 
            type="text"
            placeholder="Search items..."
            onChange={handleSearch}
        />
    );
};

export default SearchInput;