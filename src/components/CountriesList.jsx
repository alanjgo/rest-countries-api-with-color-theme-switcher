import { useState, useEffect } from 'react'
import './CountriesList.css'

const CountriesList = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données')
        }
        const data = await response.json()
        
        // Extraire uniquement les champs demandés : flag, name, population, region, capital
        const formattedCountries = data.map(country => ({
          flag: country.flags.svg,
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital?.[0] || 'N/A'
        }))
        
        setCountries(formattedCountries)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  if (loading) return <div>Chargement...</div>
  if (error) return <div>Erreur: {error}</div>

  return (
    <div className="countries-grid">
      {countries.map((country, index) => (
        <div key={index} className="country-card">
          <img src={country.flag} alt={`Drapeau de ${country.name}`} className="country-flag" />
          <div className="country-info">
            <h3>{country.name}</h3>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CountriesList