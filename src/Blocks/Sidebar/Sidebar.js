import bannerImg from "../../img/svg/bannerImg.svg"

import {Link, useNavigate} from "react-router-dom";
import logo from "../../img/svg/logo.svg"
import {SidebarBanner} from "./SidebarBanner";
import {SidebarMenu} from "./SidebarMenu";
import {SidebarSearch} from "./SidebarSearch";
import {SidebarLowerLinks} from "./SidebarLowerLinks";
import {SidebarProfileBtn} from "./SidebarProfileBtn";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useDefineSettingsPage} from "../../HooksAndFuncs/useDefineSettingsPage";
import {SidebarSettingsMenu} from "./SidebarSettingsMenu";
import {SidebarSettingsTop} from "./SidebarSettingsTop";

export const Sidebar = (props) => {
  const {} = props;
  const config = useSelector(state => state);

  const isSettingsPage = useDefineSettingsPage();

  return(
    <aside className={`sidebar mobMenu-inner-js ${config.mobMenuActive ? "active" : ""}`}>
      {isSettingsPage && (
        <>
          <SidebarSettingsTop/>
          <SidebarProfileBtn whithoutDropDown={true}/>
          <SidebarSettingsMenu/>
        </>
      )}
      {!isSettingsPage && (
        <>
          <Link to="/" className="sidebar__logo d-none d-lg-block">
            <img src={logo} alt=""/>
          </Link>
          <SidebarSearch/>
          <SidebarMenu/>
          {/*<SidebarBanner*/}
          {/*  img={bannerImg}*/}
          {/*  title='Need some experts help?'*/}
          {/*  descr='We provide a premium and professional service where our expert will improve everything you need, from your CV to your website, for $5000 per month.'*/}
          {/*  href="/dashboard"*/}
          {/*  btnTxt="Hire Expert"*/}
          {/*/>*/}
          <SidebarLowerLinks/>
          <SidebarProfileBtn/>
        </>
      )}
    </aside>
  )
}

