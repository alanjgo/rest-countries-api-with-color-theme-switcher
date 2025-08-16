import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBarAndFilter'
import CountriesList from './components/CountriesList'
import CountryDetailPage from './pages/CountryDetailPage'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleRegionFilter = (region) => {
    setSelectedRegion(region)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Router basename="/rest-countries-api-with-color-theme-switcher">
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        <main className="main-content">
        <Routes>
          <Route path="/" element={
            <> 
              <SearchBar 
                onSearch={handleSearch} 
                onRegionFilter={handleRegionFilter}
                selectedRegion={selectedRegion}
              />
              <CountriesList 
                searchQuery={searchQuery} 
                selectedRegion={selectedRegion}
              />
            </>  //évite d'avoir à créer un composant wrapper supplémentaire

          } />
          <Route path="/country/:alpha3Code" element={
            <CountryDetailPage 
              isDarkMode={isDarkMode} 
              onToggleTheme={toggleTheme}
            />
          } />
        </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
