import logo from './logo.svg';
import './App.css';
import "./css/fonts.css";
import "./css/media.css";
import "./css/style.css";
import "./css/normalize.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useContext, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {LOCALES} from "./i18n/Locale";
import {IntlProvider} from "react-intl";
import {messages} from "./i18n/Message";
import {Context} from "./index";
function App() {
    const {locale} = useContext(Context)
    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale');
        locale.setLocale(savedLocale)
        return savedLocale || LOCALES.ENGLISH
    }
    const [currentLocale, setCurrentLocale] = useState(getInitialLocale())
    const handleChange = ({ target: { value } }) => {
        setCurrentLocale(value)
        localStorage.setItem('locale', value)
        locale.setLocale(value)
    }
  return (
      <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
          <BrowserRouter>
            <AppRouter currentLocale={currentLocale} handleChangeLocale={handleChange}/>
          </BrowserRouter>
      </IntlProvider>
  );
}

export default App;
