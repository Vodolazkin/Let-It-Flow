import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import "./Nav.css";
import axios from 'axios'
import { LOGOUT } from "../../redux/actionType/userActionType";

function Nav() {

  const transport = axios.create({
    withCredentials: true
  })
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, cart: {cart} } = useSelector(state => state)


  const logout = async () => {    
    await transport('http://localhost:4000/logout')
    dispatch({
        type: LOGOUT,
    })
  }

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
            {!user ?
            <>
            <li className="nav-item"><Link className="nav-item-link" to="/info">Информация о компании</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/login">Вход в личный кабинет</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/signup">Регистрация</Link></li>
            </>
            :
            <>
            <li className="nav-item"><Link className="nav-item-link" to="/order">Заказ(ы)</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/info">Информация о компании</Link></li>
            <li className="nav-item">
              <Link className="nav-item-link" to="/profile">
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9759 17.8387C19.6848 19.2017 17.8655 20.0584 15.8408 20.0584C13.8161 20.0584 11.9968 19.2017 10.7155 17.8484C7.51709 19.6398 5.35547 23.0473 5.35547 26.9611V27H26.3555V26.9611C26.3555 23.0278 24.1841 19.6203 20.9759 17.8387Z" stroke="#292929" stroke-miterlimit="10"/>
                <path d="M15.849 20.0487C17.8737 20.0487 19.693 19.1919 20.9841 17.8289C22.1676 16.573 22.9012 14.8887 22.9012 13.0195C22.9012 9.14465 19.7419 6 15.849 6C11.9562 6 8.79688 9.15438 8.79688 13.0292C8.79688 14.8985 9.53046 16.5828 10.7237 17.8387C12.0051 19.2017 13.8244 20.0487 15.849 20.0487Z" stroke="#292929" stroke-miterlimit="10"/>
              </svg>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item-link" to="/cart">
                <div className="nav-item-count-cart">{cart[0].count}</div>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.73828 11.4968L8.50621 27H23.8623L27.6708 11.4968H4.73828Z" stroke="#292929" stroke-miterlimit="10"/>
                <path d="M10.5859 11.8779V10.6384C10.5859 7.51951 13.1148 5 16.2226 5C19.3304 5 21.8592 7.52967 21.8592 10.6384V11.8779" stroke="#292929" stroke-miterlimit="10"/>
              </svg>
              </Link>
            </li>
            <li className="nav-item"><Link className="nav-item-link" to="/" onClick={logout}>Выход</Link></li>
            </>
            }
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
