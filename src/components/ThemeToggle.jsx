function ThemeToggle({ onThemeChanged }) {

  const handleThemeChange = (theme) => {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }

    onThemeChanged?.(theme);
  };

  return (
    <>
      <div className="dropdown-item" onClick={() => handleThemeChange('default')}>Default,</div>
      <div className="dropdown-item" onClick={() => handleThemeChange('dark')}>Dark,</div>
      <div className="dropdown-item" onClick={() => handleThemeChange('light')}>Light</div>
    </>
  );
}

export default ThemeToggle;