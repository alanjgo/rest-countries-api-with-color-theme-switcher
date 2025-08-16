import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './CountryDetailPage.css'

const CountryDetailPage = ({ isDarkMode, onToggleTheme }) => {
  const { alpha3Code } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)
  const [borderCountries, setBorderCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  

  useEffect(() => {
    fetchCountryDetails()
  }, [alpha3Code])

  const fetchCountryDetails = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`)
      if (!response.ok) {
        throw new Error('Country not found')
      }
      const data = await response.json()
      const countryData = data[0]
      setCountry(countryData)
      
      if (countryData.borders && countryData.borders.length > 0) {
        await fetchBorderCountries(countryData.borders)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchBorderCountries = async (borderCodes) => {
    try {
      const borderNames = borderCodes.join(',')
      const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderNames}`)
      if (response.ok) {
        const data = await response.json()
        setBorderCountries(data)
      }
    } catch (err) {
      console.error('Error fetching border countries:', err)
    }
  }

  const formatPopulation = (pop) => {
    return new Intl.NumberFormat().format(pop)
  }

  const formatCurrencies = (currencies) => {
    if (!currencies) return 'N/A'
    return Object.values(currencies).map(curr => curr.name).join(', ')
  }

  const formatLanguages = (languages) => {
    if (!languages) return 'N/A'
    return Object.values(languages).join(', ')
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading country details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    )
  }

  if (!country) {
    return (
      <div className="error">
        <p>Country not found</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    )
  }

  return (
    <div className="country-detail-page">
      <div className="container">
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Back
        </button>
        
        <div className="country-detail-content">
          <div className="country-flag">
            <img 
              src={country.flags.svg} 
              alt={`Flag of ${country.name.common}`}
            />
          </div>
          
          <div className="country-info">
            <h1 className="country-name">{country.name.common}</h1>
            
            <div className="info-grid">
              <div className="info-column">
                <p className="info-item">
                  <span className="info-label">Native Name: </span>
                  <span className="info-value">
                    {Object.values(country.name.nativeName || {})[0]?.common || country.name.common}
                  </span>
                </p>
                <p className="info-item">
                  <span className="info-label">Population: </span>
                  <span className="info-value">{formatPopulation(country.population)}</span>
                </p>
                <p className="info-item">
                  <span className="info-label">Region: </span>
                  <span className="info-value">{country.region}</span>
                </p>
                <p className="info-item">
                  <span className="info-label">Sub Region: </span>
                  <span className="info-value">{country.subregion || 'N/A'}</span>
                </p>
                <p className="info-item">
                  <span className="info-label">Capital: </span>
                  <span className="info-value">{country.capital?.[0] || 'N/A'}</span>
                </p>
              </div>
              
              <div className="info-column">
                <p className="info-item">
                  <span className="info-label">Top Level Domain: </span>
                  <span className="info-value">{country.tld?.[0] || 'N/A'}</span>
                </p>
                <p className="info-item">
                  <span className="info-label">Currencies: </span>
                  <span className="info-value">{formatCurrencies(country.currencies)}</span>
                </p>
                <p className="info-item">
                  <span className="info-label">Languages: </span>
                  <span className="info-value">{formatLanguages(country.languages)}</span>
                </p>
              </div>
            </div>
            
            {borderCountries.length > 0 && (
              <div className="border-countries">
                <h3 className="border-title">Border Countries: </h3>
                <div className="border-buttons">
                  {borderCountries.map(borderCountry => (
                    <Link
                      key={borderCountry.cca3}
                      to={`/country/${borderCountry.cca3}`}
                      className="border-button"
                    >
                      {borderCountry.name.common}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetailPage

