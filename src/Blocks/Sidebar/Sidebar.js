import bannerImg from "../../img/svg/bannerImg.svg"

import {Link} from "react-router-dom";
import logo from "../../img/svg/logo.svg"
import {SidebarBanner} from "./SidebarBanner";
import {SidebarMenu} from "./SidebarMenu";
import {SidebarSearch} from "./SidebarSearch";
import {SidebarLowerLinks} from "./SidebarLowerLinks";
import {SidebarProfileBtn} from "./SidebarProfileBtn";
import {useSelector} from "react-redux";

export const Sidebar = (props) => {
  const {} = props;
  const config = useSelector(state => state);

  return(
    <aside className={`sidebar mobMenu-inner-js ${config.mobMenuActive ? "active" : ""}`}>
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
    </aside>
  )
}

