import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import ScrollToTop from "./components/ScrollToTop";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
      <Provider store={store}>
          <ScrollToTop />
          <App />
      </Provider>
  </HashRouter>
);

