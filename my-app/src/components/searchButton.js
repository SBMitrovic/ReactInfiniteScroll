import React, { useState } from 'react';
import "./searchButton.css"
function SearchButton({ originalImages, setFilteredImages }) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    const filtered = originalImages.filter((img) => {
        const nameParts = img.author.toLowerCase().split(' ');
        return nameParts.some((part) => part.includes(inputValue.toLowerCase()));
      });

    window.alert(`Found ${filtered.length} result(s) for: ${inputValue}`);
    setFilteredImages(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by author"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchButton;