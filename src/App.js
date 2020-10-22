import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/User/Home/Home';
import Login from './pages/Share/Login/Login';
import PageNotFound from './pages/Share/PageNotFound/PageNotFound';
import { AdminTemplate } from './templates/AdminTemplate';
import { UserTemplate } from './templates/UserTemplate';
import Preloader from './components/Share/Preloader/Preloader';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Preloader/>
        <Switch>
          <UserTemplate exact path='/home' Component={Home}></UserTemplate>
          <AdminTemplate exact path='/login' Component={Login}></AdminTemplate>

          <UserTemplate exact path='/' Component={Home}></UserTemplate>
          <Route exact path='*' component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
