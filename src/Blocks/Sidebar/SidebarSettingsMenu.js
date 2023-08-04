import {useSelector} from "react-redux";
import {SidebarMenuItem} from "./SidebarMenu";


export const SidebarSettingsMenu = (props) => {
  const config = useSelector(state => state);
  const {} = props;

  return(
    <div className="sidebar__menu">
      <SidebarMenuItem
        href="/settings/profile"
        itemName={"Profile"}
      />
      <SidebarMenuItem
        href="/settings/security"
        itemName={"Security"}
      />
      <SidebarMenuItem
        href="/settings/history"
        itemName={"History"}
      />
    </div>
  )
}

