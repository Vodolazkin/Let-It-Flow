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

  const { user, cart } = useSelector(state => state)


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
<<<<<<< HEAD
            <li className="nav-item"><Link className="nav-item-link" to="/cart">Корзина</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/order">Заказ(ы)</Link></li>
=======
            <li className="nav-item"><Link className="nav-item-link" to="/cart">Корзина</Link>{cart.cart.length}</li>
>>>>>>> 42cfe37fc8620c215a70c67ad06f92ab81f15483
            {!user ?
            <>
            <li className="nav-item"><Link className="nav-item-link" to="/info">Информация о компании</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/login">Вход в личный кабинет</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/signup">Регистрация</Link></li>
            </>
            :
            <>
            <li className="nav-item"><Link className="nav-item-link" to="/info">Информация о компании</Link></li>
            <li className="nav-item"><Link className="nav-item-link" to="/profile">Профиль</Link></li>
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
