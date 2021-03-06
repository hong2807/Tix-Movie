import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/User/Home/Home';
import PageNotFound from './pages/Share/PageNotFound/PageNotFound';
import { AdminTemplate } from './templates/AdminTemplate';
import { UserTemplate } from './templates/UserTemplate';
import { LoginTemplate } from './templates/LoginTemplate';
import Preloader from './components/Share/Preloader/Preloader';
import './App.scss';
import SignIn from './pages/Share/SignIn/SignIn';
import SignUp from './pages/Share/SignUp/SignUp';
import DetailFilm from './pages/User/DetailFilm/DetailFilm';
import DetailCinema from './pages/User/DetailCinema/DetailCinema';
import Booking from './pages/User/Booking/Booking';
import MovieManagement from './pages/Admin/MovieManagement/MovieManagement';
import UserManagement from './pages/Admin/UserManagement/UserManagement';
import DetailUser from './pages/User/DetailUser/DetailUser';
import ScrollToTop from './components/Share/ScrollToTop/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Preloader/>
        <ScrollToTop/>
          <Switch>
            <UserTemplate exact path='/' Component={Home}></UserTemplate>
            <UserTemplate exact path='/phim/:maphim' Component={DetailFilm}></UserTemplate>
            <UserTemplate exact path='/rapphim/:marapphim/:chitietrapphim' Component={DetailCinema}></UserTemplate>
            <UserTemplate exact path='/nguoidung' Component={DetailUser}></UserTemplate>
            <UserTemplate exact path='/datve/:maLichChieu' Component={Booking}></UserTemplate>

            <AdminTemplate exact path='/quanlyphim' Component={MovieManagement}></AdminTemplate>
            <AdminTemplate exact path='/quanlynguoidung' Component={UserManagement}></AdminTemplate>

            <LoginTemplate exact path='/dangnhap' Component={SignIn}></LoginTemplate>
            <LoginTemplate exact path='/dangky' Component={SignUp}></LoginTemplate>
          

            <UserTemplate exact path='/' Component={Home}></UserTemplate>
            <Route exact path='*' component={PageNotFound}></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
