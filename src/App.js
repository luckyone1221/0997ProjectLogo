import './sass/main.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MainPage} from "./Pages/MainPage";
import {LoginPage} from "./Pages/LoginPage";
import {ResetPassPage} from "./Pages/ResetPassPage";
import {SignUpPage} from "./Pages/SignUpPage";
import {DashboardPage} from "./Pages/DashboardPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/resetPass-step1" element={<ResetPassPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}