import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/User/Home/Home';
import Login from './pages/Share/Login/Login';
import PageNotFound from './pages/Share/PageNotFound/PageNotFound';
import { AdminTemplate } from './templates/AdminTemplate';
import { UserTemplate } from './templates/UserTemplate';
import { LoginTemplate } from './templates/LoginTemplate';
// import Preloader from './components/Share/Preloader/Preloader';
import './App.scss';
import SignIn from './pages/Share/SignIn/SignIn';
import SignUp from './pages/Share/SignUp/SignUp';
import DetailFilm from './pages/User/DetailFilm/DetailFilm';
import DetailCinema from './pages/User/DetailCinema/DetailCinema';
import Booking from './pages/User/Booking/Booking';
import QuanLy from './pages/Admin/QuanLy/QuanLy';

function App() {
  return (
    <BrowserRouter>
      {/* <Preloader/> */}
        <Switch>
          <UserTemplate exact path='/home' Component={Home}></UserTemplate>
          <UserTemplate exact path='/phim' Component={DetailFilm}></UserTemplate>
          <UserTemplate exact path='/rapphim' Component={DetailCinema}></UserTemplate>
          <UserTemplate exact path='/datve' Component={Booking}></UserTemplate>


          <AdminTemplate exact path='/login' Component={Login}></AdminTemplate>
          <AdminTemplate exact path='/quanly' Component={QuanLy}></AdminTemplate>

          <LoginTemplate exact path='/dangnhap' Component={SignIn}></LoginTemplate>
          <LoginTemplate exact path='/dangky' Component={SignUp}></LoginTemplate>
        

          <UserTemplate exact path='/' Component={Home}></UserTemplate>
          <Route exact path='*' component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
