import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'swiper/css';

import {App} from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";
import {Provider} from "react-redux";

import stab from "./img/svg/service-cv-generator.svg"
import stab2 from "./img/svg/service-stab2.svg"
import stab3 from "./img/svg/service-stab3.svg"

const defaultState = {
  mobMenuActive: false,
  menuLinks: {
    work: [
      {
        key: "cv-generator",
        img: stab,
        name: "CV Generator",
        href: "/work/cv-generator",
      },
      {
        key: "invest-plan",
        img: stab,
        name: "Invest Plan",
        href: "/work/invest-plan",
      },
    ],
    study: [
      {
        key: "cv-generator",
        img: stab2,
        name: "CV Generator",
        href: "/study/cv-generator",
      },
      {
        key: "invest-plan",
        img: stab2,
        name: "Invest Plan",
        href: "/study/invest-plan",
      },
    ],
    business: [
      {
        key: "cv-generator",
        img: stab3,
        name: "CV Generator",
        href: "/business/cv-generator",
      },
      {
        key: "invest-plan",
        img: stab3,
        name: "Invest Plan",
        href: "/business/invest-plan",
      },
    ],
  }
};

const reducer = (state=defaultState, action) => {
  switch (action.type){
    case "CHANGE_MOBMENUACTIVE":
      return {...state, mobMenuActive: action.payload}
    default:
      return state
  }
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
