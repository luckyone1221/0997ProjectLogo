import {LoginWrap} from "../Blocks/Login/LoginWrap";
import {SignUp} from "../Blocks/Login/SignUp";

export const SignUpPage = (props) => {
  const {} = props;

  return(
    <div className="main-wrapper">
      <LoginWrap>
        <SignUp/>
      </LoginWrap>
    </div>
  )
}