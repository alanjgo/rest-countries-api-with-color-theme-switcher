import { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event) => {
    const query = event.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <div className="search-filter-bar-container">
      <div className="search-input-wrapper">
        <img className="search-icon" src="./src/assets/magnifying-glass-solid-full.svg"></img>
        <input
          type="text"
          placeholder="Search a country..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
          aria-label="Search a country..."
          role="search"
        />
      </div>
    </div>
  )
}

export default SearchBar
