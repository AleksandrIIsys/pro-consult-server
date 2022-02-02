import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsStore from "./store/newsStore";
import reportWebVitals from './reportWebVitals';
import PartnersStore from "./store/partnersStore";
import ClientsStore from "./store/clientsStore";
import TestimonialsStore from "./store/testimonialsStore";
export const Context = createContext(null);
ReactDOM.render(

  <Context.Provider value={{
      news: new NewsStore(),
      partners: new PartnersStore(),
      clients: new ClientsStore(),
      testimonials: new TestimonialsStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
reportWebVitals();
