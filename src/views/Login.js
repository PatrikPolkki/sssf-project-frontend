import {useContext, useState} from 'react';
import {MainContext} from '../context/MainContext';
import LoginForm from '../componets/LoginForm';

const Login = () => {
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const [formToggle, setFormToggle] = useState(true);

  const formToggleAction = () => setFormToggle(!formToggle);

  return (
      <div>
        <LoginForm formToggle={formToggleAction}/>
      </div>
  );
};

export default Login;