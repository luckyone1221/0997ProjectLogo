import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function useDefineSettingsPage(){
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.location.pathname.indexOf('/settings') > -1 ? setIsActive(true) : setIsActive(false);
  }, [navigate])

  return isActive;
}