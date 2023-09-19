import React from 'react';

const SearchBox = (props) => {
  const { placeholder, onChangeHandler } = props;

  const handleChange = (event) => {
    // access to event.target.value
    const inputValue = event.target.value;
    // Call the provided onChangeHandler function
    onChangeHandler(inputValue);
  }

  return (
    <input
      className="searchBox"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default SearchBox;
