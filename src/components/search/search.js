import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./search.styles.css";

const SearchBox = (props) => {
  const { placeholder, onChangeHandler } = props;
  const inputRef = useRef(null);
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    onChangeHandler(inputValue);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      inputRef.current.value = "";
    }
  }

  // Add an event listener to handle clicks on the document body
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputVisible(false); // Clicked outside the input, hide it
      }
    };

    // Attach the event listener when the input is visible
    if (isInputVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove the event listener when the input is not visible
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isInputVisible]);

  return (
    <div className="search-container">
      {isInputVisible ? (
        <input
          ref={inputRef}
          className="search-box"
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <div className="search-icon" onClick={toggleInput}>
          <FontAwesomeIcon icon={faSearch} style={{ color: "#A0ECFB" }} />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
