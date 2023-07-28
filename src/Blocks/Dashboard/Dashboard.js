import {DDArrowIcon, MenuIconBusiness, MenuIconStudy, MenuIconWork, TagIcon} from "../../SvgSprites";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";

export const Dashboard = (props) => {
  const config = useSelector(state => state);

  return(
    <section className="section sDashboard">
      <div className="section-header">
        <div className="container">
          <h1>Dashboard</h1>
        </div>
      </div>
      <div className="container">
        <div className="sDashboard__dd-items">
          <DashboardDDItem theme="warning" icon={<MenuIconWork/>} name="Work" descr="Work Plan Only">
            {config.menuLinks.work.map((service, index) => {
              return <DashboardCard key={index} img={service.img} name={service.name} href={service.href}/>
            })}
          </DashboardDDItem>
          <DashboardDDItem theme="primary" icon={<MenuIconStudy/>} name="Study" descr="Study Plan Only">
            {config.menuLinks.study.map((service, index) => {
              return <DashboardCard key={index} img={service.img} name={service.name} href={service.href}/>
            })}
          </DashboardDDItem>
          <DashboardDDItem theme="info" icon={<MenuIconBusiness/>} name="Business" descr="Business Plan Only">
            {config.menuLinks.business.map((service, index) => {
              return <DashboardCard key={index} img={service.img} name={service.name} href={service.href}/>
            })}
          </DashboardDDItem>
        </div>
      </div>
    </section>
  )
}

export const DashboardDDItem = (props) => {
  const {theme, icon, name, descr, children} = props;

  const [isDDOpen, setIsDDOpen] = useState(true);

  return(
    <div className={`sDashboard__dd-item ${theme}`}>
      <div className="sDashboard__dd-head" onClick={() => setIsDDOpen(!isDDOpen)}>
        <div className="sDashboard__dd-row row align-items-center">
          <div className="col-auto">
            <div className="sDashboard__dd-icon">
              {icon}
            </div>
          </div>
          <div className="col-auto">
            <div className="sDashboard__dd-name">{name}</div>
          </div>
          <div className="col-auto">
            <div className={`info-tag ${isDDOpen ? "active" : ""}`}>
              <TagIcon/>
              <span>{descr}</span>
            </div>
          </div>
          <div className="col-auto ms-auto">
            <div className={`sDashboard__dd-chevron ${isDDOpen ? "active" : ""}`}>
              <DDArrowIcon/>
            </div>
          </div>
        </div>
      </div>
      <div className={`sDashboard__content ${isDDOpen ? "active" : ""}`}>
        <div className="sDashboard__cards-row row">
          {children}
        </div>
      </div>
    </div>
  )
}

export const DashboardCard = (props) => {
  const {img, name, href} = props;

  return(
    <div className="col-6 col-md-4">
      <Link className="sDashboard__card" to={href}>
        <div className="sDashboard__c-img">
          <img src={img} alt=""/>
        </div>
        <div className="sDashboard__c-name">{name}</div>
      </Link>
    </div>
  )
}