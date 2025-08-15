import './Header.css'
import { useState } from 'react'

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    onSearch('')
  }

  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Where in the world?</h1>
          <div className="search-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search a country..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
                aria-label="Rechercher un pays"
                role="search"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
