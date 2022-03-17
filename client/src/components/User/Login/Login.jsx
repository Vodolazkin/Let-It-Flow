import './Login.css'
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { login } from '../../../redux/actionCreate/userActionCreate';


export default function Login(props) {
  // const dispatch = useDispatch();
	// const navigate = useNavigate();

  const handleSubmit = (event) => {
		event.preventDefault();

		const payload = {
			email: event.target.email.value,
			password: event.target.password.value
		};

		// axios.post('http://localhost:3000/login', payload).then(({ data }) => {
		// 	dispatch(login(data))
		// 	navigate('/');
		// })
    // .catch(console.error());
	};


  return (
    <div className="container">
      <div className="form-wrapper">
      <h1>Войти</h1>
      <form onSubmit={handleSubmit}>
        <div className="card-input">
          <label for="name" className="card-input__label">Логин</label>
          <input type="text" id="name" className="card-input__input" autocomplete="off" />
        </div>
        <div className="card-input">
          <label for="password" className="card-input__label">Пароль</label>
          <input type="password" id="password" className="card-input__input" />
        </div>
        <button className="btn">Войти</button>
      </form>
      <p>Забыли пароль?</p>
      <Link className="nav-item-link" to="/remind">Восстановить пароль</Link>
    </div>
    </div>
  );
}
