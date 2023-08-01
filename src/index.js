import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'swiper/css';
import servicesData from "./servicesData.json"

import {App} from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";
import {Provider} from "react-redux";

import stab from "./img/svg/service-cv-generator.svg"
import stab2 from "./img/svg/service-stab2.svg"
import stab3 from "./img/svg/service-stab3.svg"


const defaultState = {
  mobMenuActive: false,
  servicesData: servicesData,
  menuLinks: {
    work: [
      {
        key: "cv-generator",
        img: stab,
        name: "CV Generator",
        href: "/work/cv-generator",
      },
      {
        key: "content-plan",
        img: stab,
        name: "Content Plan",
        href: "/work/content-plan",
      },
      {
        key: "marketing-plan",
        img: stab,
        name: "Marketing Plan",
        href: "/work/marketing-plan",
      },
      {
        key: "invest-plan",
        img: stab,
        name: "Invest Plan",
        href: "/work/invest-plan",
      },
      {
        key: "post-generator",
        img: stab,
        name: "Post Generator",
        href: "/work/post-generator",
      },
    ],
    study: [
      {
        key: "cv-generator",
        img: stab2,
        name: "CV Generator",
        href: "/study/cv-generator",
      },
    ],
    business: [
      {
        key: "cv-generator",
        img: stab3,
        name: "CV Generator",
        href: "/business/cv-generator",
      },
    ],
  },
  txtEditorContent: `
      <h4>Tailored to Your Profile</h4>
      <p>The CV Generator is an advanced AI tool designed to revolutionize the way you create and refine your curriculum vitae (CV) or resume. With its powerful features and intuitive interface, it empowers job seekers, professionals, and students to effortlessly generate impressive resumes tailored to their unique skills and experiences.</p>
      <p>Intelligent Resume Creation: The CV Generator harnesses the power of artificial intelligence to assist you in creating a compelling and professional resume. Through its smart algorithms, it analyzes your input and suggests appropriate sections, formats, and designs to ensure your resume stands out in a competitive job market.</p>
      <h4>Tailored to Your Profile</h4>
      <p>Tailored to Your Profile: This AI tool recognizes that every individual has distinct qualifications and career objectives. By leveraging machine learning capabilities, it customizes your resume based on your specific skills, work history, education, and industry. It offers a personalized approach, ensuring that your CV accurately represents your unique professional profile.</p>
      <ol>
        <li>Dynamic Templates and Formatting:</li>
        <li>CV Generator offers an extensive collection of visually appealing and modern resume templates. From classic to contemporary designs, it provides a range of options to suit different industries and roles.</li>
        <li>Additionally, it offers flexible formatting features, allowing you to easily adjust font styles, colors, and layouts to create a polished and eye-catching document.</li>
        <li>Keyword Optimization: In today's digital age, many companies utilize applicant tracking systems (ATS) to filter resumes based on specific keywords. The CV Generator optimizes your resume by suggesting relevant keywords and phrases commonly sought after by recruiters and employers. This ensures that your CV aligns with the requirements of the desired job, increasing your chances of getting noticed.</li>
      </ol>      
      <h4>Tailored to Your Profile</h4>
      <p>Tailored to Your Profile: This AI tool recognizes that every individual has distinct qualifications and career objectives. By leveraging machine learning capabilities, it customizes your resume based on your specific skills, work history, education, and industry. It offers a personalized approach, ensuring that your CV accurately represents your unique professional profile.</p>
    `,
};

const reducer = (state=defaultState, action) => {
  switch (action.type){
    case "CHANGE_TXTEDITORCONTENT":
      return {...state, txtEditorContent: action.payload}
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
