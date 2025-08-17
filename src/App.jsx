import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBarAndFilter'
import CountriesList from './pages/CountriesList'
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
    <BrowserRouter >
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
    </BrowserRouter>
  )
}

export default App
