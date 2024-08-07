function Footer({ isDark }) {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: isDark ? "#15362e" : "#03f4fc",
    height: "100%",
    padding: "30px",
    color: isDark ? "white" : "blue",
    borderTop: isDark ? "2px solid white" : "2px solid black",
  };

  const linkStyle = {
    textDecoration: "none",
    color: isDark ? "white" : "blue",
  };

  return (
    <div style={containerStyle}>
      <p>&copy; CopyRigths</p>
      <a style={linkStyle} href="http://www.google.com">
        Links
      </a>
    </div>
  );
}

export default Footer;
