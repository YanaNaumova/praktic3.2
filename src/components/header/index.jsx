import ThemeSwitcher from "../themeSwitcher";

function Header({ isDark, changeTheme }) {
  const containerStyle = {
    borderBottom: isDark ? " 2px solid white" : "2px solid black",
    padding: "20px",
    backgroundColor: isDark ? "#15362e" : "#03f4fc",
    height: "100%",
  };
  return (
    <div style={containerStyle}>
      <ThemeSwitcher isDark={isDark} changeTheme={changeTheme} />
    </div>
  );
}

export default Header;
