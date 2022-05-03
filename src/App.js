import './App.css';
import {useContext} from 'react';
import {MainContext} from './context/MainContext';
import Home from './views/Home';
import Login from './views/Login';
import TopBar from './componets/TopBar';
import Profile from './views/Profile';

const App = () => {
  const {isLoggedIn, profile} = useContext(MainContext);
  return (
      <div className="App">
        <TopBar/>
        {isLoggedIn ? (
            profile ? <Profile/> : <Home/>
        ) : (
            <Login/>
        )}
      </div>
  );
};

export default App;
