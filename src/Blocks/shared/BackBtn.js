import {BackArrow} from "../../SvgSprites";

export const BackBtn = (props) => {

  return(
    <div className="bb">
      <div className="bb__btn" onClick={() => {
        window.history.back()
      }}>
        <BackArrow/>
        <span>Back</span>
      </div>
    </div>
  )
}