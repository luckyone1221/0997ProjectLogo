import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from "swiper";

export const Breadcrumbs = (props) => {
  const navigate = useNavigate();
  const config = useSelector(state => state);
  const [bcArray, setBcArray] = useState([]);

  useEffect(() => {
    let pathname = window.location.pathname;
    let pathArray = getCleanArr(pathname.split('/'));
    let linksArr = [];

    for (let [index, item] of Object.entries(pathArray)){
      let link = "";

      let i = 0;
      while (i <= index){
        link += `/${pathArray[i]}`;
        i++;
      }

      linksArr.push({
        href: link,
        particle: item,
      })
    }


    setBcArray(linksArr);
  }, [navigate])

  return(
    <div className="breadcrumbs">
      <Swiper
        className="breadcrumbs__slider"
        slidesPerView={'auto'}
        spaceBetween={24}
        freeMode={true}
        modules={[FreeMode]}
      >
        {bcArray.map((item, index) => {
          let txt;

          if (index === 1){
            txt = item.particle;
          }
          else {
            txt = item.particle.replace('/', '').replace('-', ' ');
          }

          return(
            <SwiperSlide key={index}>
              {index !== bcArray.length-1 && (
                <>
                  <Link to={item.href} className="breadcrumbs__item">
                    {txt}
                  </Link>
                </>
              )}
              {index === bcArray.length - 1 && (
                <div className="breadcrumbs__item breadcrumbs__item--current">
                  {txt}
                </div>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}


const getCleanArr = (arr) => {
  let result = [];

  for (let item of arr){
    if(item !== ""){
      result.push(item);
    }
  }

  return result
}