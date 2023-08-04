import {DDArrowIcon, MenuIconBusiness, MenuIconDashboard, MenuIconStudy, MenuIconWork, MenuIconWorkspace} from "../../SvgSprites";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDefineLinkActive} from "../../HooksAndFuncs/useDefineLinkActive"
import {useSelector} from "react-redux";


export const SidebarMenu = (props) => {
  const config = useSelector(state => state);
  const {} = props;

  return(
    <div className="sidebar__menu">
      <SidebarMenuItem
        icon={<MenuIconDashboard/>}
        href="/dashboard"
        itemName={"Dashboard"}
      />
      <SidebarMenuItem
        icon={<MenuIconWork/>}
        href="/work"
        itemName={"Work"}
        subMenu={config.menuLinks.work}
      />
      <SidebarMenuItem
        icon={<MenuIconStudy/>}
        href="/study"
        itemName={"Study"}
        subMenu={config.menuLinks.study}
      />
      <SidebarMenuItem
        icon={<MenuIconBusiness/>}
        href="/business"
        itemName={"Business"}
        subMenu={config.menuLinks.business}
      />
    </div>
  )
}

export const SidebarMenuItem = (props) => {
  const {icon, itemName, href, subMenu} = props;

  //define if link is active
  const isActive = useDefineLinkActive(href);
  const [ddMenuIsActive,setDDMenuIsActive] = useState(false);

  return(
    <div className="sidebar__menu-item">
      <div className={`sidebar__plate ${isActive ? "active" : ""}`}>
        <Link to={href} className="sidebar__link">
          {icon && (
            <div className="sidebar__icon">
              {icon}
            </div>
          )}
          <div className="sidebar__name">
            {itemName}
          </div>
        </Link>
        {subMenu && (
          <div className="sidebar__dd-arrow" onClick={() => setDDMenuIsActive(!ddMenuIsActive)}>
            <DDArrowIcon/>
          </div>
        )}
      </div>

      {subMenu && (
        <div className={`sidebar__submenu ${ddMenuIsActive || isActive ? "active" : ""}`}>
          {subMenu.map((subMenuItem, index) => {
            return(
              <SidebarMenuSubItem key={index} href={subMenuItem.href} name={subMenuItem.name}/>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const SidebarMenuSubItem = (props) => {
  const {href, name} = props;
  const isActive = useDefineLinkActive(href);

  return(
    <Link className={`sidebar__submenu-item ${isActive ? "active" : ""}`} to={href}>
      {name}
    </Link>
  )
}