import ThemeToggle from '../components/ThemeToggle';

function Header() {
  return (
    <>
      <div><span className='keyword'>public enum</span> <span className='function'>THEME_TOGGLE</span>()</div>
      {`{`}
        <ThemeToggle onThemeChanged={(theme) => console.log('Theme changed to:', theme)} />
      {`}`}
    </>
  );
}

export default Header;