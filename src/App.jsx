import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CountriesList from './components/CountriesList'
import CountryDetailPage from './pages/CountryDetailPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CountriesList />} />
            <Route path="/country/:alpha3Code" element={<CountryDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
