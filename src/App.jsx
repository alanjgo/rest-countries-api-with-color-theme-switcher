import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CountriesList from './components/CountriesList'
import CountryDetailPage from './pages/CountryDetailPage'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CountriesList searchQuery={searchQuery} />} />
            <Route path="/country/:alpha3Code" element={<CountryDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
