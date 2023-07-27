import {MenuIconBusiness, MenuIconPlans, MenuIconWorkHistory, MenuIconWorkspace} from "../../SvgSprites";
import {SidebarMenuItem} from "./SidebarMenu";

export const SidebarLowerLinks = (props) => {

  return(
    <div className="sidebar__menu sidebar__menu--lower">
      <SidebarMenuItem
        icon={<MenuIconWorkHistory/>}
        href="/"
        itemName={"Business"}
      />
      <SidebarMenuItem
        icon={<MenuIconPlans/>}
        href="/"
        itemName={"Workspace"}
      />
    </div>
  )
}
