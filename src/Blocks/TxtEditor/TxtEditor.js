import {DownloadResultIcon, ImproveResultIcon} from "../../SvgSprites";
import {useState} from "react";
import {useSelector} from "react-redux";
import {DraftJs} from "./DraftJs";
// import {MegaDraft} from "./MegaDraft";

export const TxtEditor = (props) => {
  const [editActive, setEditActive] = useState(false);
  const config = useSelector(state => state);

  return(
    <section className="sEdit section">
      {!editActive && (
        <div className="sEdit__head">
          <div className="container">
            <div className="sEdit__h-row row align-items-center">
              <div className="col-sm">
                <h1 className="sEdit__h-title">Result</h1>
              </div>
              <div className="col-sm-auto">
                <div className="sEdit__h-btn sEdit__h-btn--download">
                  <DownloadResultIcon/>
                  <span>Download PDF</span>
                </div>
              </div>
              <div className="col-sm-auto">
                <div className="sEdit__h-btn sEdit__h-btn--improve">
                  <ImproveResultIcon/>
                  <span>Improve Result</span>
                </div>
              </div>
              <div className="col-sm-auto">
                <div className="sEdit__h-btn sEdit__h-btn--edit" onClick={() => {setEditActive(true)}}>
                  Edit CV
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {editActive && (
        <div className="sEdit__head">
          <div className="container">
            <div className="sEdit__h-row row align-items-center">
              <div className="col-sm">
                <h1 className="sEdit__h-title">Edit your CV</h1>
              </div>
              {/*<div className="col-sm-auto">*/}
              {/*  <div className="sEdit__h-btn sEdit__h-btn--download">*/}
              {/*    <DownloadResultIcon/>*/}
              {/*    <span>Download PDF</span>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="col-sm-auto">
                <div className="sEdit__h-btn sEdit__h-btn--improve">
                  <span>Discard</span>
                </div>
              </div>
              <div className="col-sm-auto">
                <div className="sEdit__h-btn sEdit__h-btn--edit" onClick={() => {setEditActive(true)}}>
                  Save Changes
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        {!editActive && (
          <div className="sEdit__content-box" dangerouslySetInnerHTML={{__html: config.txtEditorContent}}>

          </div>
        )}
        {editActive && (
          <DraftJs/>
        )}
      </div>
    </section>
  )
}