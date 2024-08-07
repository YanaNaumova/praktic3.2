import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  function changeTheme() {
    setIsDark((prev) => !prev);
  }
  return (
    <div className="App">
      <Header isDark={isDark} changeTheme={changeTheme} />
      <MainContent isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
