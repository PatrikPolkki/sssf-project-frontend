import './App.css';
import {useContext} from 'react';
import {MainContext} from './context/MainContext';
import Home from './views/Home';
import Login from './views/Login';
import TopBar from './componets/TopBar';

const App = () => {
  const {isLoggedIn} = useContext(MainContext);
  return (
      <div className="App">
        <TopBar/>
        {isLoggedIn ? (
            <Home/>
        ) : (
            <Login/>
        )}
      </div>
  );
};

export default App;
