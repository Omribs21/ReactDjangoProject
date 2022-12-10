import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Register from './app/Components/Register';
import ProductsCards from './app/Components/ProductsCards';
import LoginPage from './app/Components/LoginPage';
import MyProfile from './app/Components/MyProfile';
import FinalBuy from './app/Components/FinalBuy';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="register" element={<Register/>}></Route>
            <Route path="products" element={<ProductsCards/>}></Route>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="myprofile" element={<MyProfile/>}></Route>
            <Route path='final_buy' element={<FinalBuy/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);