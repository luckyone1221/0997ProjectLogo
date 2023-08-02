import {MenuIconAll, MenuIconBusiness, MenuIconStudy, MenuIconWork, StarIcon} from "../../SvgSprites";
import {useState} from "react";
import {useSelector} from "react-redux";

export const Plans = (props) => {
  const {} = props;
  const [billForPeriod, setBillForPeriod] = useState("year");

  return(
    <section className="sPlans section">
      <div className="container">
        <div className="sPlans__box">
          <div className="sPlans__header">
            <div className="sPlans__h-row row">
              <div className="col-sm">
                <div className="section-title">
                  <h1>Choose a plan</h1>
                  <p>Select the offer tha best suits your need</p>
                </div>
              </div>
              <div className="col-sm-auto">
                <div className="sPlans__h-chb" onClick={() => {
                  billForPeriod === "year" ? setBillForPeriod("month") : setBillForPeriod("year");
                }}>
                  <div className={`sPlans__h-txt ${billForPeriod === "year" ? "" : "active"}`}>Billed monthly</div>
                  <div className={`sPlans__h-ball ${billForPeriod === "year" ? "active" : ""}`}></div>
                  <div className={`sPlans__h-txt ${billForPeriod === "year" ? "active" : ""}`}>Billed yearly</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sPlans__body">
            <div className="sPlans__main-row row">
              <PlansCard
                icon={<MenuIconWork/>}
                theme="warning"
                name="Work"
                price="$60"
                configKey="work"
                btnTxt="7 Days Free Trial"
                onClick={() => {
                  //make smth
                }}
              />
              <PlansCard
                icon={<MenuIconStudy/>}
                theme="primary"
                name="Study"
                price="$80"
                configKey="study"
                btnTxt="7 Days Free Trial"
                onClick={() => {
                  //make smth
                }}
              />
              <PlansCard
                icon={<MenuIconBusiness/>}
                theme="info"
                name="Business"
                price="$159"
                configKey="business"
                btnTxt="7 Days Free Trial"
                onClick={() => {
                  //make smth
                }}
              />
              <PlansCard
                icon={<MenuIconAll/>}
                theme="purple"
                name="Open all AI"
                price="$259"
                btnTxt="Buy Now"
                onClick={() => {
                  //make smth
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const PlansCard = (props) => {
  const {icon, theme, name, price, configKey, btnTxt, onClick} = props;

  const config = useSelector(state => state);

  return(
    <div className="col-xxl-3 col-sm-6" onClick={() => {onClick()}}>
      <div className="sPlans__card">
        <div className="sPlans__c-head-row row">
          <div className="col-auto">
            <div className={`sPlans__c-logo sPlans__c-logo--${theme}`}>
              {icon}
            </div>
          </div>
          <div className="col">
            <div className="sPlans__c-name">{name}</div>
            <div className="sPlans__c-price-box">
              <div className="sPlans__c-price">{price}</div>
              <div className="sPlans__c-gray">/month</div>
            </div>
          </div>
        </div>
        {configKey && (
          <div className="sPlans__c-services">
            {config.menuLinks[configKey].map((item,index) => {
              return (
                <div className="sPlans__c-item">
                  <div className="sPlans__c-item-row row">
                    <div className="col-auto">
                      <StarIcon/>
                    </div>
                    <div className="col">
                      <div className="sPlans__c-service-name">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
        {!configKey && (
          <div className="sPlans__c-descr">Unlock access to all AI tools at our platform</div>
        )}
        <div className="sPlans__c-btn">{btnTxt}</div>
      </div>
    </div>
  )
}