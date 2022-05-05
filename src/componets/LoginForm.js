import {useLazyQuery} from '@apollo/client';
import {login} from '../utils/queries';
import {useContext} from 'react';
import {MainContext} from '../context/MainContext';
import {Button, TextField, Typography} from '@mui/material';

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
      localStorage.setItem('userId', loggedUser.data.login.id);
      setUser(loggedUser.data.login);
      setIsLoggedIn(true);
    } catch (e) {
      console.log('loginError', e.graphQLErrors);
    }
  };

  return (
      <div className="form" style={{display: 'inline-block'}}>
        <Typography variant="h4" sx={{margin: '30px 0 10px 0 '}}>Log
          in</Typography>
        <form onSubmit={loginAction}>
          <TextField
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
          />
          <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
          />
          <Button variant="contained" type="submit" fullWidth>Log in</Button>
        </form>
      </div>
  );
};

export default LoginForm;