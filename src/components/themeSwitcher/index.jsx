function ThemeSwitcher({ isDark, changeTheme }) {
  const headerStyle = {
    color: isDark ? "white" : "blue",
  };

  const buttonStyle = {
    color: isDark ? "white" : "black",
    border: isDark ? " 2px solid white" : "2px solid blue",
    borderRadius: "6px",
    width: "60px",
    height: "60px",
    backgroundColor: isDark ? "blue" : "#03f4fc",
  };

  const containerStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>ThemeSwitcher :</h1>
      <button style={buttonStyle} onClick={changeTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
