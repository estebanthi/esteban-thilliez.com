import React from 'react';
import Layout from "./components/Layout/Layout";

import './styles/App.css';

function App() {
    const getInitialTheme = () => {
        if (typeof window !== "undefined" && window.localStorage) {
            const storedPrefs = window.localStorage.getItem("color-theme")
            if (typeof storedPrefs === "string") {
                return storedPrefs
            }

            const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
            if (userMedia.matches) {
                return "dark"
            }
        }

        return "dark"
    }
    const [darkMode, setDarkMode] = React.useState<boolean>(getInitialTheme() === "dark");


  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
