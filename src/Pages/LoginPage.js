import {LoginWrap} from "../Blocks/Login/LoginWrap";
import {Login} from "../Blocks/Login/Login";

export const LoginPage = (props) => {
  const {} = props;

  return(
    <div className="main-wrapper">
      <LoginWrap>
        <Login/>
      </LoginWrap>
    </div>
  )
}