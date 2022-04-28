import {useLazyQuery} from '@apollo/client';
import {login} from '../utils/queries';
import {useContext} from 'react';
import {MainContext} from '../context/MainContext';

const LoginForm = () => {
  const {setUser, setIsLoggedIn} = useContext(MainContext);

  const [doLogin] = useLazyQuery(login);

  const loginAction = async (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const username = elements.username.value;
    const password = elements.password.value;
    try {
      const loggedUser = await doLogin({variables: {username, password}});
      console.log(loggedUser);
      localStorage.setItem('token', loggedUser.data.login.token);
      localStorage.setItem('username', loggedUser.data.login.username);
      setUser(loggedUser.data.login);
      setIsLoggedIn(true);
    } catch (e) {
      console.log('loginError', e.graphQLErrors);
    }
  };

  return (
      <div className="form">
        <form onSubmit={loginAction}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="username" required/>
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" required/>
          </div>
          <div className="button-container">
            <input type="submit"/>
          </div>
        </form>
      </div>
  );
};

export default LoginForm;