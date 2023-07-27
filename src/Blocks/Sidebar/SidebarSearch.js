import {ZoomIcon} from "../../SvgSprites";
import {useState} from "react";

export const SidebarSearch = (props) => {
  const [search, setSearch] = useState('');

  return(
    <div className="sidebar__inp-box">
      <div className="sidebar__ib-icon">
        <ZoomIcon/>
      </div>
      <input
        type="text"
        className="form-control sidebar__input"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}