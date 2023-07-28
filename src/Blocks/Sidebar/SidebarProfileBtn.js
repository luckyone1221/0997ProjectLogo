import img from "../../img/edit-photo.png"
import {ThreeDotsIcon} from "../../SvgSprites";

import {Link} from "react-router-dom";

export const SidebarProfileBtn = (props) => {
  const {} = props;

  return(
    <Link className="sidebar__profile-btn" to={'/profile'}>
      <div className="sidebar__pb-row row align-items-center">
        <div className="col-auto">
          <div className="sidebar__pb-avatar">
            <img src={img} alt=""/>
          </div>
        </div>
        <div className="col">
          <div className="sidebar__pb-name">Kianna Press</div>
          <div className="sidebar__pb-tag">@kianna</div>
        </div>
        <div className="col-auto">
          <ThreeDotsIcon/>
        </div>
      </div>
    </Link>
  )
}