import {TagIcon} from "../../SvgSprites";
import {DashboardCard} from "../Dashboard/Dashboard";
import {useSelector} from "react-redux";

export const ServiceBoard = (props) => {
  const config = useSelector(state => state);
  const {name, description, configKey, theme} = props;

  return(
    <section className={`section sSBoard ${theme}`}>
      <div className="section-header">
        <div className="container">
          <div className="section-header__row row align-items-center">
            <div className="col-auto">
              <h1>{name}</h1>
            </div>
            <div className="col-auto">
              <div className="info-tag">
                <TagIcon/>
                <span>{description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sSBoard__row row">
          {config.menuLinks[configKey].map((service, index) => {
            return <DashboardCard key={index} img={service.img} name={service.name} href={service.href}/>
          })}
        </div>
      </div>
    </section>
  )
}