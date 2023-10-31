// Header.js
import React from "react";
import "./Header.css";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

function Header() {
  const { user } = useContext(MyContext);

  return (
    <header className="header">
      <h1>Welcome {user.userName}</h1>
    </header>
  );
}

export default Header;
