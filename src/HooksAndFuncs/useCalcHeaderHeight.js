import {useEffect, useState} from "react";

export function useCalcHeaderHeight(header){
  const [headerAddClasses, setHeaderAddClass] = useState('');

  const calcHeaderHeight = () => {
    if(header.current){
      document.documentElement.style.setProperty('--header-h', header.current.offsetHeight + 'px');
    }

    if (window.pageYOffset > 0) {
      setHeaderAddClass('fixed');
    } else {
      setHeaderAddClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', calcHeaderHeight, {passive: true});
    window.addEventListener('resize', calcHeaderHeight, {passive: true});

    calcHeaderHeight();
    window.setTimeout(calcHeaderHeight, 0);
    window.setTimeout(calcHeaderHeight, 100);

    return () => {
      window.removeEventListener('scroll', calcHeaderHeight);
      window.removeEventListener('resize', calcHeaderHeight);
    };
  }, [])

  return headerAddClasses;
}