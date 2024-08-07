function MainContent({ isDark }) {
  const containerStyle = {
    backgroundColor: isDark ? "#25697a" : "#cbeef7",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "60px 100px",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
  };

  const blockContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    color: isDark ? "white" : "black",
  };

  return (
    <div style={containerStyle}>
      <div style={blockContainerStyle}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, a quam! Illo earum exercitationem nam error corporis!
          Saepe sit rerum et aspernatur eligendi magnam rem neque. Animi, dicta
          itaque! Aspernatur, consectetur at omnis dicta et, blanditiis iste
          ullam illum hic vero commodi eum quam voluptatibus!
        </p>
      </div>
      <div style={blockContainerStyle}>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam a
          nulla distinctio incidunt veniam? Consectetur nihil illo quia porro
          pariatur.
        </p>
      </div>
    </div>
  );
}

export default MainContent;
