import { useContext } from "react";
import { LanguageContext } from "./languageContext";
import { ThemeContext } from "./themeContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const {theme, setTheme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
          {theme == "dark" ? "light theme" : "dark theme"}
        </button>
        <span>
          {/* Show active language here */} 
          {language}
        </span>
      </div>
    </div>
  );
};
