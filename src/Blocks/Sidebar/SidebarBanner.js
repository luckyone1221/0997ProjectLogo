import {Link} from "react-router-dom";

export const SidebarBanner = (props) => {
  const {img, title, descr, href, btnTxt} = props;

  return(
    <Link className="sidebar__banner" to={href}>
      <div className="sidebar__b-img">
        <img src={img} alt=""/>
      </div>
      <div className="sidebar__b-title">{title}</div>
      <div className="sidebar__b-descr">{descr}</div>
      <div className="sidebar__b-btn">{btnTxt}</div>
    </Link>
  )
}