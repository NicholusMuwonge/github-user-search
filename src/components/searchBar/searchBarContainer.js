import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBarComponent from './searchBar';
import searchService from './searchService';

const SearchBarContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e, query) => {
    if (e.key === 'Enter') {
      dispatch(searchService(query.trim()));
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };
  return (
    <SearchBarComponent
      handleChange={(e) => handleChange(e)}
      handleSubmit={(e) => handleSubmit(e, searchQuery)}
    />
  );
};

export default SearchBarContainer;
