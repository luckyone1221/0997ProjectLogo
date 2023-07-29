import './sass/main.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from "./Pages/MainPage";
import {LoginPage} from "./Pages/LoginPage";
import {ResetPassPage} from "./Pages/ResetPassPage";
import {SignUpPage} from "./Pages/SignUpPage";
import {DashboardPage} from "./Pages/DashboardPage";
import {CategoryPage} from "./Pages/CategoryPage";
import {ServicePage} from "./Pages/ServicePage";
import {TextWorkspacePage} from "./Pages/TextWorkspacePage";
import {AuthProvider} from "./context/AuthContext";

export const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          {/*login series*/}
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/resetPass-step1" element={<ResetPassPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>

          {/**/}
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/work"  element={<CategoryPage name="Work" description="Work Plan Only" configKey="work" theme="warning"/>}/>
          <Route path="/study" element={<CategoryPage name="Study" description="Study Plan Only" configKey="study" theme="primary"/>}/>
          <Route path="/business" element={<CategoryPage name="Business" description="Business Plan Only" configKey="business" theme="info"/>}/>
          {/*!!!!!<Route for Plans: /plans*/}

          {/**/}
          <Route path="/work/:service" element={<ServicePage description="Work Plan Only" theme="warning" configKey="work"/>}/>
          <Route path="/work/:service/workspace" element={<TextWorkspacePage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
