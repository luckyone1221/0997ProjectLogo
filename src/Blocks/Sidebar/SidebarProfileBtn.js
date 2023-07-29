import img from "../../img/edit-photo.png"
import {ThreeDotsIcon} from "../../SvgSprites";

import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

export const SidebarProfileBtn = (props) => {
  const {currentUser} = useAuth()
  const {} = props;

  return(
    <Link className="sidebar__profile-btn" to={'/profile'}>
      <div className="sidebar__pb-row row align-items-center">
        <div className="col-auto">
          <div className="sidebar__pb-avatar">
            <img src={img} alt=""/>
          </div>
        </div>
        {currentUser &&
            <div className="col">
              <div className="sidebar__pb-name">{currentUser.first_name}</div>
              <div className="sidebar__pb-tag">{currentUser.last_name}</div>
            </div>
        }
        <div className="col-auto">
          <ThreeDotsIcon/>
        </div>
      </div>
    </Link>
  )
}