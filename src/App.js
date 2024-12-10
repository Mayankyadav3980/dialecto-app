import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";

// get theme and language contexts here
import { ThemeContext } from "./themeContext";
import { LanguageContext } from "./languageContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <div className={`App ${theme}`}>
      {/* Add context provider here */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Navbar />
          <Home />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
