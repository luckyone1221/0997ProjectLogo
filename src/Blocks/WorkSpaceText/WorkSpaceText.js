import {useEffect, useState} from "react";
import {EditIcon, TrashBtn} from "../../SvgSprites";
import {WSTextRepeater} from "./WSTextRepeater"
import {getInputsKeys,} from "../../HooksAndFuncs/WorkspaceFuncs";
import {useSelector} from "react-redux";
import {generateCV} from "../../HooksAndFuncs/API/ApiFuncs";
import {useParams} from "react-router-dom";

export const WorkSpaceText = (props) => {
  const {children} = props;
  const config = useSelector(state => state);

  const params = useParams();
  const [pageData, setPageData] = useState(config.servicesData[params.service].workSpace);
  const [data,setData] = useState(config.servicesData[params.service].workSpace.data);
  const [inputValues, setInputValues] = useState();
  //Html, css, js, pug(jade), handlebars, reactJs(Redux), sass/scss, jQuery, bootstrap, npm, baisc php, baisc nodeJs, Photoshop, Figma, AdobeXD

  useEffect(() => {
    setInputValues(getInputsKeys(data));
  }, [data])

  if(data && inputValues){
    return(
      <section className="section sWorkSpace">
        <div className="container">
          {children}
          <div className="section-title">
            <h1>{pageData.title}</h1>
            <p>{pageData.subtitle}</p>
          </div>
          <div className="sWorkSpace__inputs">
            <div className="sWorkSpace__i-row row">
              {data.fields.content.map((inputData,index) => {
                if(inputData.type !== "repeater"){
                  return <WSTextInput key={index} data={inputData} inputValues={inputValues} setInputValues={setInputValues}/>
                }
              })}
            </div>
            {data.fields.content.map((inputData,index) => {
              if(inputData.type === "repeater"){
                return <WSTextRepeater key={index} data={inputData} inputValues={inputValues} setInputValues={setInputValues}/>
              }
            })}
          </div>
          <div className="sWorkSpace__go-btn" onClick={() => {
            generateCV(data);
          }}>{pageData.btnTxt}</div>
        </div>
      </section>
    )
  }
}

export const WSTextInput = (props) => {
  const {data, inputValues, setInputValues} = props;

  return(
    <label className={`${data.bsCol}`}>
      <label className="sWorkSpace__input-wrap">
        <div className="sWorkSpace__input-title">
          {data.title}
        </div>
        {data.type === "text" && (
          <input
            value={inputValues[data.name]}
            onChange={(e) => {
              let newInpValues = {...inputValues};
                  newInpValues[data.name] = e.target.value;

              setInputValues(newInpValues);
            }}
            type={data.type}
            className="sWorkSpace__input form-control"
            placeholder={data.placeholder}
          />
        )}
        {data.type === "textarea" && (
          <textarea
            value={inputValues[data.name]}
            onChange={(e) => {
              let newInpValues = {...inputValues};
              newInpValues[data.name] = e.target.value;

              setInputValues(newInpValues);
            }}
            className="sWorkSpace__input form-control"
            placeholder={data.placeholder}
          />
        )}
        {data.type === "date-period" && (
          <div className="input-group">
            <input type="date" className="form-control" name={"from"}/>
            <input type="date" className="form-control" name={"to"}/>
          </div>
        )}
      </label>
    </label>
  )
}

