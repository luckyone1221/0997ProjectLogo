import {ChekcIcon} from "../../SvgSprites";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const PlanBox = (props) => {
  const {data} = props;
  const config = useSelector(state => state);

  return(
    <Link className="sDescr__plan" to="/plans">
      <div className="sDescr__p-title">
        {data.title}
      </div>
      <div className="sDescr__p-price-box">
        <div className="sDescr__p-price">
          {data.price}
        </div>
        <div className="sDescr__p-gray">/mo</div>
      </div>
      <div className="sDescr__p-items">
        {config.menuLinks[data.configKey].map((service, index) => {
          return <PlanBoxItem key={index} txt={service.name}/>
        })}
      </div>
      <div className="sDescr__btn">{data.btnTxt}</div>
    </Link>
  )
}

export const PlanBoxItem = (props) => {
  const {txt} = props;

  return(
    <div className="sDescr__p-item">
      <div className="sDescr__pi-row row align-items-center">
        <div className="col-auto">
          <div className="sDescr__pi-ball">
            <ChekcIcon/>
          </div>
        </div>
        <div className="col">
          <div className="sDescr__pi-txt">
            {txt}
          </div>
        </div>
      </div>
    </div>
  )
}