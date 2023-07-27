import {LoginWrap} from "../Blocks/Login/LoginWrap";
import {Login} from "../Blocks/Login/Login";
import {ResetPass1} from "../Blocks/Login/ResetPass1";

export const ResetPassPage = (props) => {
  const {} = props;

  return(
    <div className="main-wrapper">
      <main>
        <LoginWrap>
          <ResetPass1/>
        </LoginWrap>
      </main>
    </div>
  )
}