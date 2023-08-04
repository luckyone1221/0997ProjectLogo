import img from "../../img/edit-photo.png"
import {ThreeDotsIcon} from "../../SvgSprites";

import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

export const SidebarProfileBtn = (props) => {
  const {currentUser} = useAuth();
  const {whithoutDropDown} = props;

  return(
    <div className="sidebar__profile-btn">
      <div className="sidebar__pb-row row align-items-center">
        <div className="col-auto">
          <div className="sidebar__pb-avatar">
            <img src={img} alt=""/>
          </div>
        </div>
        {currentUser &&
          <div className="col">
            <div className="sidebar__pb-name">{currentUser.first_name} {currentUser.last_name}</div>
            <div className="sidebar__pb-tag">@DoWeHaveUserName?</div>
          </div>
        }
        {!whithoutDropDown && (
          <div className="col-auto">
            <ThreeDotsIcon/>
          </div>
        )}
      </div>
    </div>
  )
}