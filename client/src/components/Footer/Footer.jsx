import './Footer.css'
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <nav className="footer-container">
        <div className="container">
          <div className="nav-wrapper">
            <div className="nav-logo-wrapper">
              <Link to="/" className="nav-logo white">Let It Flow</Link>
            </div>
            <ul className="nav-list">
            <li className="nav-item"><Link className="nav-item-link white" to="/info">Информация о компании</Link></li>
          <li className="nav-item"><Link className="nav-item-link white" to="/logout">Контакты</Link></li>
          <li className="nav-item"><Link className="nav-item-link white" to="/about">О магазине</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Footer;
