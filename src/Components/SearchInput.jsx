import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/action';

const SearchInput = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (<div className='InputContainer'>
        <input className='input'
            type="text"
            placeholder="Search items..."
            onChange={handleSearch}
        /></div>
    );
};

export default SearchInput;