import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//setup redux
import store from './redux/configStore'
import { Provider } from 'react-redux';
// Ant Design
import 'antd/dist/antd.css'; 
// Slick Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Popup video
import 'react-modal-video/scss/modal-video.scss';
// Main Scss
import './scss/main.scss';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
