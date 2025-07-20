import { useState, useEffect } from 'react';

function ThemeToggle({ onThemeChanged }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }

    onThemeChanged?.(theme);
    setIsOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} id="themeDropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <i className="fas fa-sliders-h"></i>
        <span className="dropdown-text">Change Theme</span>
        <i className="fas fa-chevron-down"></i>
      </button>

      <div className="dropdown-menu">
        <div className="dropdown-item" onClick={() => handleThemeChange('default')}>Default</div>
        <div className="dropdown-item" onClick={() => handleThemeChange('dark')}>Dark</div>
        <div className="dropdown-item" onClick={() => handleThemeChange('light')}>Light</div>
      </div>
    </div>
  );
}

export default ThemeToggle;