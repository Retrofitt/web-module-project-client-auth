import axios from 'axios'
import './App.css';

import {Switch, Link, Route} from 'react-router-dom'

import Login from './components/Login'
import FriendsList from './components/Friendslist';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (<div className="App">

    <Link to='/login'>Login</Link>
    <Link to='/logout'>Logout</Link>
    
    

    <Switch>
      <ProtectedRoute exact path='/protected' component={FriendsList}/>
      <Route path='/logout' component={Logout} />
      <Route path='/login' component={Login} />
      <Route path='/' component={Login}/>
    </Switch>
    
  </div>);
}

export default App;
