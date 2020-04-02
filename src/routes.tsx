import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home/home';
import { getUserStorage } from './data/storage';

const ProtectedRouter: React.FunctionComponent<{}> = () => {
  const user = getUserStorage();
  const history = useHistory();
  if (!user.id) {
    history.push('/login');
    return null;
  }
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </>
  );
};

const MainRouter: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRouter />
      </Switch>
    </Router>
  );
};

export default MainRouter;
