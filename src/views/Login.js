import {useContext} from 'react';
import {MainContext} from '../context/MainContext';
import LoginForm from '../componets/LoginForm';
import RegisterForm from '../componets/RegisterForm';

const Login = () => {
  const {formToggle} = useContext(MainContext);

  return (
      <div>
        {formToggle ? (
            <LoginForm/>
        ) : (
            <RegisterForm/>
        )}
      </div>
  );
};

export default Login;