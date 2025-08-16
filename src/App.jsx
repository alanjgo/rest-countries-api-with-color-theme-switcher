import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBarAndFilter'
import CountriesList from './components/CountriesList'
import CountryDetailPage from './pages/CountryDetailPage'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleRegionFilter = (region) => {
    setSelectedRegion(region)
  }

  return (
    <Router>
      <div className="App">
        <Header />
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
            </> 
            //évite d'avoir à créer un composant wrapper supplémentaire

          } />
          <Route path="/country/:alpha3Code" element={<CountryDetailPage />} />
        </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
