import {EmailIcon, PasswordIcon} from "../../SvgSprites";
import {LoginInput} from "./Login";
import {useState} from "react";
import {Link} from "react-router-dom";

export const ResetPass1 = (props) => {
  const [email, setEmail] = useState('');

  return(
    <div className="sLogin__inner">
      <div className="section-title">
        <h1>Forgot Password?</h1>
        <p>No worries, we’ll send you verification code to reset password</p>
      </div>
      <div className="sLogin__inputs">
        <LoginInput
          value={email}
          setValue={setEmail}
          type={"email"}
          placeholder={"Email Address"}
          title={"Email Address"}
          icon={<EmailIcon/>}
        />
      </div>
      <div className="sLogin__btn-box">
        <div className="sLogin__btn-row row gy-3 gx-3">
          <div className="col-6 col-sm-auto">
            <Link className="sLogin__btn sLogin__btn--gray" to="/login">Back to Log In</Link>
          </div>
          <div className="col-6 col-sm-auto ms-auto">
            <button className="sLogin__btn sLogin__btn--green">Reset password</button>
          </div>
        </div>
      </div>
    </div>
  )
}