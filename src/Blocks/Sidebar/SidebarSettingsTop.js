import {Link} from "react-router-dom";
import {BackArrowSettings} from "../../SvgSprites";

export const SidebarSettingsTop = (props) => {
  const {} = props;

  return(
    <div className="sidebar__top">
      <div className="sidebar__top-row row align-items-center">
        <div className="col-auto">
          <Link className="sidebar__t-btn" to={"/dashboard"}>
            <BackArrowSettings/>
          </Link>
        </div>
        <div className="col">
          <h2 className="sidebar__t-title">Settings</h2>
        </div>
      </div>
    </div>
  )
}