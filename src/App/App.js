import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Theme/Theme";
import { GlobalStyles } from "../Theme/Global";

// The function that toggles between themes
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle theme</button>
        <h1>It's a {theme} theme!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
