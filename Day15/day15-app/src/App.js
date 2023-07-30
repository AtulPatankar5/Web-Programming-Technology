import logo from './logo.svg';
import './App.css';
import ControlledLoginForm from './Form/ControlledLoginForm';
import LoginForm from './Form/LoginForm';
import {useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className='App-header'>
     <h1>This is react</h1>

     {/* <ControlledLoginForm/> */}
      
     {/* <LoginForm/> */}

    <h3>Counter : {counter}</h3>
    {isLogged ? <h3> Some valuable info here</h3> : ''}
    </div>
  );
}

export default App;
