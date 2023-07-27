import img from "../../img/edit-photo.png"
import {ThreeDotsIcon} from "../../SvgSprites";

export const SidebarProfileBtn = (props) => {
  const {} = props;

  return(
    <div className="sidebar__profile-btn">
      <div className="sidebar__pb-row row">
        <div className="col-auto">
          <div className="sidebar__pb-avatar">
            <img src={img} alt=""/>
          </div>
          <div className="col">
            <div className="sidebar__pb-name">Kianna Press</div>
            <div className="sidebar__pb-tag">@kianna</div>
          </div>
          <div className="col-auto">
            <ThreeDotsIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}