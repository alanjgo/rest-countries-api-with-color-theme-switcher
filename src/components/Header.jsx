import './Header.css'

const Header = ({ isDarkMode, onToggleTheme }) => {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Where in the world?</h1>
          <button className="theme-toggle" onClick={onToggleTheme}>
            <svg className="theme-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              {isDarkMode ? (
                // Icône soleil pour le mode clair
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m6.01-6.01l.707.707m12.728 12.728l-.707.707m0-13.728l.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M12 5a7 7 0 11-7 7 7 7 0 017-7z"/>
              ) : (
                // Icône lune pour le mode sombre
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              )}
            </svg>
            <span className="theme-text">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
