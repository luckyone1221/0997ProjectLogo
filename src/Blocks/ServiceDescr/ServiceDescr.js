import stab from "../../img/svg/service-cv-generator.svg"
import {Link, useParams} from "react-router-dom";
import {TagIcon} from "../../SvgSprites";
import {PlanBox} from "./PlanBox";
import {useState} from "react";
import {useSelector} from "react-redux";

export const ServiceDescr = (props) => {
  const {children} = props;

  const config = useSelector(state => state);
  const params = useParams();
  const [pageData, setPageData] = useState(config.servicesData[params.service].info);

  return(
    <section className={`section sDescr ${pageData.theme}`}>
      <div className="container">
        {children}
        <div className="sDescr__top-row row align-items-center">
          <div className="col-lg">
            <div className="sDescr__name-row row align-items-center">
              <div className="col-auto">
                <div className="sDescr__img">
                  <img src={stab} alt=""/>
                </div>
              </div>
              <div className="col-auto">
                <h1 className="sDescr__name">{pageData.title}</h1>
              </div>
              <div className="col-auto">
                <div className="info-tag">
                  <TagIcon/>
                  <span>{pageData.tagTxt}</span>
                </div>
              </div>
              <div className="col-12">
                <div className="sDescr__descr">
                  {pageData.subtitle}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-auto">
            <Link className="sDescr__generate-btn" to={`${window.location.pathname}/workspace`}>
              {pageData.btnTxt}
            </Link>
          </div>
        </div>
        <div className="sDescr__main-row row">
          <div className="col-lg-8">
            <div className="sDescr__content-box" dangerouslySetInnerHTML={{__html: pageData.htmlContent}}></div>
          </div>
          <div className="col-lg-4 order-first order-lg-0">
            <PlanBox data={pageData.plan}/>
          </div>
        </div>
      </div>
    </section>
  )
}