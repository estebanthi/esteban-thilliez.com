import React from 'react';
import Layout from "./components/Layout";

import './styles/App.css';

function App() {
    const [darkMode, setDarkMode] = React.useState<boolean>(false);


  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
