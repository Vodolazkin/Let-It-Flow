import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import "./Nav.css";
import axios from 'axios'
import { LOGOUT } from "../../redux/actionType/userActionType";

function Nav() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {

   await axios.post('http://localhost:4000/logout');
    // .then(() => {
		// 	dispatch({
    //     type: LOGOUT,
    //   })
		// 	navigate('/');
    window.location.reload();
		// })
    // .catch(console.error());
  };

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
            <li className="nav-item"><Link className="nav-item-link" to="/login">Вход в личный кабинет</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/signup">Регистрация</Link></li>
            <li className="nav-item" onClick={logout}></li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
