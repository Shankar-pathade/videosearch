import React, { useState } from 'react';

const Header = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <header>
      <div className="logo"></div>
      <input
        className='search-input'
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </header>
  );
};

export default Header;