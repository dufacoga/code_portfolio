import ThemeToggle from '../components/ThemeToggle';

function Header({ subtitle }) {
  return (
    <>
      <div className="headertitle">
        <h3>Theme</h3>
        <span>{subtitle}</span>
      </div>
      <div className="headerdropdown">
        <ThemeToggle onThemeChanged={(theme) => console.log('Theme changed to:', theme)} />
      </div>
    </>
  );
}

export default Header;