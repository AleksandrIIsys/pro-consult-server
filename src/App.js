import logo from './logo.svg';
import './App.css';
import "./css/fonts.css";
import "./css/media.css";
import "./css/style.css";
import "./css/normalize.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
function App() {
  return (
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
  );
}

export default App;
