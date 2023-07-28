import logo from "../../img/svg/logo.svg";
import {Link} from "react-router-dom";
import {useMobMenu} from "../../HooksAndFuncs/useMobMenu"
import {useCalcHeaderHeight} from "../../HooksAndFuncs/useCalcHeaderHeight"
import {useRef} from "react";

export const Header = (props) => {
  const header = useRef(null);
  const [mobMenuActive, setMobMenuActive] = useMobMenu();
  useCalcHeaderHeight(header);

  return (
    <header className="header header-js d-lg-none" ref={header}>
      <div className="container-fluid">
        <div className="header__row row align-items-center">
          <div className="col">
            <Link to="/" className="header__logo">
              <img src={logo} alt=""/>
            </Link>
          </div>
          <div className="col-auto">
            <div className={`header__burger ${mobMenuActive ? "active" : ''}`} onClick={() => {
              document.body.classList.toggle('fixed');
              setMobMenuActive(!mobMenuActive);
            }}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}