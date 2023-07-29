import {useState} from "react";
import {EditIcon, TrashBtn} from "../../SvgSprites";

export const WorkSpaceText = (props) => {
  const {children} = props;

  const data = {
    key: "cv-generation",
    title: "Generate CV from your text",
    descr: "You only need to enter your ideas and we will create everything for you",
    fields: {
      content: [
        {
          bsCol: "col-md-6",
          type: "text",
          name: "full_name",
          title: "Full Name",
          placeholder: "Vasiliy Petrenko",
        },
        {
          bsCol: "col-md-6",
          type: "text",
          name: "expert_in",
          title: "Expert In",
          placeholder: "UX/UI Design, English Teacher, etc.",
        },
        {
          bsCol: "col-md-6",
          type: "text",
          name: "years_of_experience",
          title: "Years of experience ",
          placeholder: "5+",
        },
        {
          bsCol: "col-md-6",
          type: "text",
          name: "skills",
          title: "Skills",
          placeholder: "Photoshop, Figma, Adobe After Effect, etc.",
        },
        {
          bsCol: "col-12",
          type: "textarea",
          name: "about_you",
          title: "About you",
          placeholder: "Tell us more details about you",
        },
        {
          type: "repeater",
          repeaterData: {
            mainTitle: "Work Experience",
            itemSample: {
              content: [
                {
                  bsCol: "col-md-4",
                  type: "text",
                  value: "",
                  name: "company_name",
                  title: "Company Name",
                  placeholder: "Google Inc.",
                },
                {
                  bsCol: "col-md-4",
                  type: "date-period",
                  name: "work_time_line",
                  title: "Work Timeline(since/till)",
                  placeholder: "Choose Date",
                },
                {
                  bsCol: "col-md-4",
                  type: "text",
                  name: "position",
                  title: "Position",
                  placeholder: "Junior UX/UI Designer",
                },
                {
                  bsCol: "col-12",
                  type: "textarea",
                  name: "details",
                  title: "Tell us about your work",
                  placeholder: "Tell us more details about you",
                },
              ]
            }
          }
        },
      ],
    }
  };

  return(
    <section className="section sWorkSpace">
      <div className="container">
        {children}
        <div className="section-title">
          <h1>Generate CV from your text</h1>
          <p>You only need to enter your ideas and we will create everything for you</p>
        </div>
        <div className="sWorkSpace__inputs">
          <div className="sWorkSpace__i-row row">
            {data.fields.content.map((inputData,index) => {
              if(inputData.type !== "repeater"){
                return <WSTextInput key={index} data={inputData}/>
              }
            })}
          </div>
          {data.fields.content.map((inputData,index) => {
            if(inputData.type === "repeater"){
              return <WSTextRepeater key={index} data={inputData}/>
            }
          })}
        </div>

        {/*.sWorkSpace__*/}
      </div>
    </section>
  )
}

export const WSTextInput = (props) => {
  const {data} = props;

  return(
    <label className={`${data.bsCol}`}>
      <label className="sWorkSpace__input-wrap">
        <div className="sWorkSpace__input-title">
          {data.title}
        </div>
        <input
          type={data.type}
          className="sWorkSpace__input form-control"
          placeholder={data.placeholder}
        />
      </label>
    </label>
  )
}

export const WSTextRepeater = (props) => {
  const {data} = props;

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

  return(
    <div className="sWorkSpace__repeater">
      <div className="sWorkSpace__r-title">
        {data.repeaterData.mainTitle}
      </div>
        {state.items.map((repeaterItem,index) => {
          if (repeaterItem.isClosed){
            return (
              <div className="sWorkSpace__r-box" key={index}>
                <div className="sWorkSpace__rc-row row">
                  <div className="col">
                    <div className="sWorkSpace__rc-period">June 2021 - September 2023</div>
                    <div className="sWorkSpace__rc-name-box">
                      <div className="sWorkSpace__rc-name">Company Name</div>
                      <div className="sWorkSpace__rc-position">Junior UX/UI Designer</div>
                    </div>
                    <div className="sWorkSpace__rc-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                  </div>
                  <div className="col-auto">
                    <div className="sWorkSpace__rc-btn-row row">
                      <div className="col-auto">
                        <div className="sWorkSpace__rc-btn" onClick={() => {}}>
                          <EditIcon/>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="sWorkSpace__rc-btn" onClick={() => {}}>
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
                <div key={index} className="sWorkSpace__r-row row">
                  {repeaterItem.content.map((item, index) => {
                    return(
                      <WSTextInput key={index} data={item} />
                    )
                  })}
                </div>
                <div className="text-end">
                  <button className="sWorkSpace__r-add-btn" onClick={() => {
                    let newState = {...state};
                        newState.items[index].isClosed = true;

                    setState(newState);
                  }}>Add Company</button>
                </div>
              </div>
            )
          }

        })}
    </div>
  )
}