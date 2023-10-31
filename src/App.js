// src/App.js
import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter";
import { MyContext } from "./MyContext";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };
  4

  const [user, setUser] = useState({
    id: 1,
    userName: "John Doe",
    email: "johndoe@gmail.com",
  });

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <div className={`app ${isDarkTheme ? "dark" : ""}`}>
        {isDarkTheme ? (
          <button type="button" class="btn btn-light" onClick={toggleTheme}>
            Light
          </button>
        ) : (
          <button type="button" class="btn btn-dark" onClick={toggleTheme}>
            Dark
          </button>
        )}

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-1">
              <Sidebar />
            </div>
            <div className="col-sm-11">
              <div className="content">
                <Header />
                <div className="main-content">
                  <AppRouter />
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
