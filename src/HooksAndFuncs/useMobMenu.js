import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export function useMobMenu(){
  const navigate = useNavigate();
  const [mobMenuActive, setMobMenuActive] = useState(false);
  const dispatch = useDispatch();

  const mobMenuMissclick = (event) => {
    if(!event.target.closest('.mobMenu-inner-js, .header-js')){
      setMobMenuActive(false);
      document.body.classList.remove('fixed');
    }
  }
  const closeMenuOnLg = () => {
    if (window.matchMedia("(min-width: 992px)").matches){
      setMobMenuActive(false);
      document.body.classList.remove('fixed');
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', mobMenuMissclick);
    window.addEventListener('resize', closeMenuOnLg);
    return () => {
      document.body.removeEventListener('click', mobMenuMissclick);
      window.removeEventListener('resize', closeMenuOnLg);
    };
  }, [])

  useEffect(() => {
    setMobMenuActive(false);
    document.body.classList.remove('fixed');
  }, [navigate])

  useEffect(() => {
    dispatch({type: "CHANGE_MOBMENUACTIVE", payload: mobMenuActive});
  }, [mobMenuActive])

  return [mobMenuActive, setMobMenuActive]
}