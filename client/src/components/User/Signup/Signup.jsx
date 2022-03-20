import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { signup } from '../../../redux/actionCreate/userActionCreate'

function Signup() {

  const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const payload = {
			first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      phone: event.target.phone.value,
			email: event.target.email.value,
			password: event.target.password.value,
		};

		axios
			.post('http://localhost:4000/signup', payload)
			.then(({ data }) => {
				dispatch(signup(data));
				navigate('/');
			})
			.catch(console.error());
	};


  return (
    <div className="container divider">
    <div className="form-wrapper">
    <h2>Зарегистрируйте свой аккаунт</h2>
    <form onSubmit={handleSubmit}>
      <div className="card-input">
        <label for="first_name" className="card-input__label">Имя</label>
        <input type="text" name="first_name" id="first_name" className="card-input__input"  />
      </div>
      <div className="card-input">
        <label for="last_name" className="card-input__label">Фамилия</label>
        <input type="text" name="last_name" id="last_name" className="card-input__input" />
      </div>
      <div className="card-input">
          <label for="email" class="card-input__label">Email</label>
          <input type="email" id="email" class="card-input__input" />
        </div>
      <div className="card-input">
        <label for="password" className="card-input__label">Пароль</label>
        <input type="password" id="password" className="card-input__input" />
      </div>
      <div className="card-input">
        <label for="phone" className="card-input__label">Телефон</label>
        <input type="tel" name="phone" id="phone" className="card-input__input" required />
      </div>
      <button className="btn">Зарегистрироваться</button>
    </form>
    <p>Уже есть аккаунт?</p>
    <Link className="nav-item-link" to="/login">Войти</Link>
  </div>
  </div>
  );
}

export default Signup;