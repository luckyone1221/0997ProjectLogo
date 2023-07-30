import {useEffect, useState} from "react";
import {
  addRepeaterItem,
  getInputsKeys, getPeriodTimeLine,
  toggleRepeaterItem,
  trashRepeaterItem
} from "../../HooksAndFuncs/WorkspaceFuncs";
import {EditIcon, TrashBtn} from "../../SvgSprites";

export const WSTextRepeater = (props) => {
  const {data, inputValues, setInputValues} = props;

  const [state, setState] = useState({
    items: [
      {
        isClosed: false,
        content: [...data.repeaterData.itemSample.content],
      },
    ],
    sample: {
      isClosed: false,
      content : [...data.repeaterData.itemSample.content]
    },
  });

  useEffect(() => {
    let thisRepeaterValues = [];

    for (let item of state.items){
      if(item.isClosed){
        let localResult = {};

        for (let input of item.content){
          localResult[input.name] = input.value;
        }

        thisRepeaterValues.push(localResult);
      }
    }

    let newInputValues = JSON.parse(JSON.stringify(inputValues));
        newInputValues[data.name] = thisRepeaterValues;

    setInputValues(newInputValues);
  }, [state])

  return(
    <div className="sWorkSpace__repeater">
      <div className="sWorkSpace__r-title">
        {data.repeaterData.mainTitle}
      </div>
      {state.items.map((repeaterItem,repeaterIndex) => {
        if (repeaterItem.isClosed){
          return (
            <div className="sWorkSpace__r-box" key={repeaterIndex}>
              <div className="sWorkSpace__rc-row row">
                <div className="col-sm">
                  <div className="sWorkSpace__rc-period">{repeaterItem.content[1].value}</div>
                  <div className="sWorkSpace__rc-name-box">
                    <div className="sWorkSpace__rc-name">{repeaterItem.content[0].value}</div>
                    <div className="sWorkSpace__rc-position">{repeaterItem.content[2].value}</div>
                  </div>
                  <div className="sWorkSpace__rc-descr">{repeaterItem.content[3].value}</div>
                </div>
                <div className="col-sm-auto">
                  <div className="sWorkSpace__rc-btn-row row">
                    <div className="col-auto">
                      <div className="sWorkSpace__rc-btn" onClick={() => {
                        toggleRepeaterItem(state, setState, repeaterIndex)
                      }}>
                        <EditIcon/>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="sWorkSpace__rc-btn" onClick={() => {
                        trashRepeaterItem(state, setState, repeaterIndex)
                      }}>
                        <TrashBtn/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        else {
          return (
            <div className="sWorkSpace__r-box">
              <div key={repeaterIndex} className="sWorkSpace__r-row row">
                {repeaterItem.content.map((item, index) => {
                  return(
                    <WSTextInputRepeator key={index} data={item} state={state} setState={setState} repeaterIndex={repeaterIndex} inputIndex={index}/>
                  )
                })}
              </div>
              <div className="text-end">
                <button className="sWorkSpace__r-add-btn" onClick={() => {
                  toggleRepeaterItem(state,setState, repeaterIndex);
                  if (repeaterIndex === state.items.length - 1){
                    addRepeaterItem(state,setState);
                  }
                }}>
                  {repeaterIndex === state.items.length - 1 ? "Add Company" : "Save Changes"}
                </button>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export const WSTextInputRepeator = (props) => {
  const {data, state, setState, repeaterIndex, inputIndex} = props;

  const [fromDate, setFromDate] = useState();
  const [tillDate, setTillDate] = useState();
  useEffect(() => {
    if(data.type === "date-period") {
      let newState = JSON.parse(JSON.stringify(state));
      newState.items[repeaterIndex].content[inputIndex].value = getPeriodTimeLine(fromDate,tillDate);

      setState(newState);
    }
  }, [fromDate, tillDate])

  return(
    <label className={`${data.bsCol}`}>
      <label className="sWorkSpace__input-wrap">
        <div className="sWorkSpace__input-title">
          {data.title}
        </div>
        {data.type === "text" && (
          <input
            value={state.items[repeaterIndex].content[inputIndex].value}
            onChange={(e) => {
              let newState = JSON.parse(JSON.stringify(state));
                  newState.items[repeaterIndex].content[inputIndex].value = e.target.value;

              setState(newState);
            }}
            type={data.type}
            className="sWorkSpace__input form-control"
            placeholder={data.placeholder}
          />
        )}
        {data.type === "textarea" && (
          <textarea
            value={state.items[repeaterIndex].content[inputIndex].value}
            onChange={(e) => {
              let newState = JSON.parse(JSON.stringify(state));
                  newState.items[repeaterIndex].content[inputIndex].value = e.target.value;

              setState(newState);
            }}
            className="sWorkSpace__input form-control"
            placeholder={data.placeholder}
          />
        )}
        {/*not yet*/}
        {data.type === "date-period" && (
          <div className="input-group">
            <input
              type="date"
              className="form-control"
              name={"from"}
              value={fromDate}
              onChange={(e) => {
                setFromDate(e.target.value);
              }}
            />
            <input
              type="date"
              className="form-control"
              name={"to"}
              value={tillDate}
              onChange={(e) => {
                setTillDate(e.target.value);
              }}
            />
          </div>
        )}
      </label>
    </label>
  )
}