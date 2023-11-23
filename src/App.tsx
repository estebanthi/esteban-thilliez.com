import React from 'react';
import Layout from "./components/Layout/Layout";
import DotRing from "./components/Cursors/DotRing";

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

    const [cursorColorChange, setCursorColorChange] = React.useState<boolean>(false);


  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
        <DotRing cursorColorChange={cursorColorChange}/>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode} setCursorColorChange={setCursorColorChange}/>
    </div>
  );
}

export default App;
