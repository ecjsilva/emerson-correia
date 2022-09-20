import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          EMERSON CORREIA <br /> <span>DESENVOLVEDOR FRONT-END</span>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/sobre">QUEM SOU EU?</Link>
            </li>
            <li>
              <Link to="/especialidades">ESPECIALIDADES</Link>
            </li>
            <li>
              <Link to="/projetos">PROJETOS</Link>
            </li>
            <li>
              <Link to="/contato">CONTATO</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
