import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsStore from "./store/newsStore";
import reportWebVitals from './reportWebVitals';
import PartnersStore from "./store/partnersStore";
import ClientsStore from "./store/clientsStore";
import TestimonialsStore from "./store/testimonialsStore";
import LocaleStore from "./store/localeStore";
export const Context = createContext(null);
ReactDOM.render(

  <Context.Provider value={{
      news: new NewsStore(),
      partners: new PartnersStore(),
      clients: new ClientsStore(),
      testimonials: new TestimonialsStore(),
      locale: new LocaleStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
reportWebVitals();
