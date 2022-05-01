import {useMutation} from '@apollo/client';
import {registerUser} from '../utils/queries';
import {useContext} from 'react';
import {MainContext} from '../context/MainContext';
import {Button, TextField} from '@mui/material';

const RegisterForm = () => {
  const {setUser, setIsLoggedIn} = useContext(MainContext);

  const [doRegistering] = useMutation(registerUser);

  const registerAction = async (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const username = elements.username.value;
    const password = elements.password.value;
    const fullName = elements.fullName.value;
    try {
      const loggedUser = await doRegistering(
          {variables: {username, password, fullName}});
      console.log('Registered user', loggedUser);
    } catch (e) {
      console.log('registeringError', e.graphQLErrors);
    }
  };

  return (
      <div className="form" style={{display: 'inline-block'}}>
        <form onSubmit={registerAction}>
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
          <TextField
              margin="dense"
              id="fullName"
              label="Full name"
              type="text"
              fullWidth
              variant="outlined"
          />
          <Button variant="contained" type="submit" fullWidth>Register</Button>
        </form>
      </div>
  );
};

export default RegisterForm;