import React, { useRef, useState, useEffect } from 'react';
import "./search.styles.css";
import Xmark from "../../img/xmark.svg";

const SearchBox = ({ placeholder, onSearch }) => {
  const inputRef = useRef(null);
  const [isInputVisible, setInputVisible] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    onSearch(inputValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      inputRef.current.value = '';
    }
  };

  const handleClickOutside = (event) => {
    if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        !event.target.classList.contains("X-close")
    ) {
      setInputVisible(false);
    }
  };

  useEffect(() => {
    if (isInputVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

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
            <input
                ref={inputRef}
                className="search-box"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        )}
      </div>
  );
};

export default SearchBox;
