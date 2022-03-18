import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../../../redux/actionCreate/userActionCreate';


export default function Login(props) {
  // const dispatch = useDispatch();
	const navigate = useNavigate();

  const handleSubmit = (event) => {
		event.preventDefault();

		const payload = {
			email: event.target.email.value,
			password: event.target.password.value
		};

    axios.post('http://localhost:4000/login', payload)
    .then(({ data }) => {
      console.log(data)
			// dispatch(login(data))
			navigate('/');
		})
    .catch(console.error());
	};


  return (
    <div className="container divider">
      <div className="form-wrapper">
      <h2>Войти</h2>
      <form onSubmit={handleSubmit}>
        <div className="card-input">
          <label for="email" class="card-input__label">Email</label>
          <input type="email" id="email" class="card-input__input" />
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
