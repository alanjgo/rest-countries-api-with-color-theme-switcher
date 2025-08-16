import { useState } from 'react'
import './SearchBarAndFilter.css'

const SearchBar = ({ onSearch, onRegionFilter, selectedRegion }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  const handleSearchChange = (event) => {
    const query = event.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  const handleRegionChange = (event) => {
    const region = event.target.value
    onRegionFilter(region === 'All' ? '' : region)
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
      <div className="filter-wrapper">
        <select
          value={selectedRegion || 'All'}
          onChange={handleRegionChange}
          className="region-filter"
          aria-label="Filter by region"
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SearchBar
