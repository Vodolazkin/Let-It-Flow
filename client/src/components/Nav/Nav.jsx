import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <>
      <nav className="nav-container">
        <div className="container">
          <div className="nav-wrapper">
          <div className="nav-logo-wrapper">
            <Link to="/" className="nav-logo">Let It Flow</Link>
            <div>доставка приятных впечатлений*</div>
          </div>
          <ul className="nav-list">
          <li className="nav-item"><Link className="nav-item-link" to="/info">Информация о компании</Link></li>
          <li className="nav-item"><Link className="nav-item-link" to="/logout">Выход</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/login">Вход в личный кабинет</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/signup">Регистрация</Link></li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
