import {DDArrowIcon, MenuIconBusiness, MenuIconDashboard, MenuIconStudy, MenuIconWork, MenuIconWorkspace} from "../../SvgSprites";
import {Link} from "react-router-dom";

export const SidebarMenu = (props) => {
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
      />
      <SidebarMenuItem
        icon={<MenuIconStudy/>}
        href="/study"
        itemName={"Study"}
      />
      <SidebarMenuItem
        icon={<MenuIconBusiness/>}
        href="/business"
        itemName={"Business"}
      />
      <SidebarMenuItem
        icon={<MenuIconWorkspace/>}
        href="/workspace"
        itemName={"Workspace"}
      />
    </div>
  )
}

export const SidebarMenuItem = (props) => {
  const {icon, itemName, href, subMenu} = props;

  return(
    <div className="sidebar__menu-item">
      <div className="sidebar__plate">

        <div className="sidebar__icon">
          {icon}
        </div>
        <div className="sidebar__name">
          {itemName}
        </div>
        {subMenu && (
          <div className="sidebar__dd-arrow">
            <DDArrowIcon/>
          </div>
        )}
      </div>

      {subMenu && (
        <div className="sidebar__submenu">
          {subMenu.map((subMenuItem, index) => {
            return(
              <Link className={`sidebar__submenu-item`} to={subMenuItem.link}>
                {subMenuItem.txt}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}