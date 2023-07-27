import bannerImg from "../../img/svg/bannerImg.svg"

import {Link} from "react-router-dom";
import logo from "../../img/svg/logo.svg"
import {SidebarBanner} from "./SidebarBanner";
import {SidebarMenu} from "./SidebarMenu";
import {SidebarSearch} from "./SidebarSearch";
import {SidebarLowerLinks} from "./SidebarLowerLinks";
import {SidebarProfileBtn} from "./SidebarProfileBtn";

export const Sidebar = (props) => {
  const {} = props;

  return(
    <aside className="sidebar">
      <Link to="/" className="sidebar__logo">
        <img src={logo} alt=""/>
      </Link>
      <SidebarSearch/>
      <SidebarMenu/>
      <SidebarBanner
        img={bannerImg}
        title='Need some experts help?'
        descr='We provide a premium and professional service where our expert will improve everything you need, from your CV to your website, for $5000 per month.'
        href="/dashboard"
        btnTxt="Hire Expert"
      />
      <SidebarLowerLinks/>
      <SidebarProfileBtn/>
    </aside>
  )
}

