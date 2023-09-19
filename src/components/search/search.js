import React, { useRef } from 'react';

const SearchBox = (props) => {
  const { placeholder, onChangeHandler } = props;
  const inputRef = useRef(null);

  const handleChange = (event) => {
    // access to event.target.value
    const inputValue = event.target.value;
    // Call the provided onChangeHandler function
    onChangeHandler(inputValue);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      //clear the input fiels when Enter is pressed
      inputRef.current.value = "";
    }
  }

  return (
    <input
    ref={inputRef}
    className="searchBox"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    onKeyPress={handleKeyPress}
    />
  )
}

export default SearchBox;
