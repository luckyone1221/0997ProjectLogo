import {EmailIcon, PasswordEye, PasswordIcon} from "../../SvgSprites";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext"

import UserService from "../../services/AxiosService"
import arrowR from "../../img/svg/arrow-r.svg"

export const Login = (props) => {
  const {} = props;
  const navigate = useNavigate();
  const {logIn} = useAuth()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember30d, setRemember30d] = useState(true);

  const [passwordType, setPasswordType] = useState('password');

    const handleUserLogin = async () => {
        const data = {
            email: email,
            password: password,
        }
        try {
            const response = await UserService.loginUser(data)
            await logIn(response.access_token)
            navigate("/dashboard")
        } catch (error) {
            // TODO Add normal error handling here in the future
            alert(error.response.data.detail)
        }
    }

  return(
    <div className="sLogin__inner">
      <div className="section-title">
        <h1>Welcome Back!</h1>
        <p>We are glad to see you again at Businex. Log in to continue.</p>
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
        <LoginInput
          value={password}
          setValue={setPassword}
          type={passwordType}
          setType={setPasswordType}
          placeholder={"Password"}
          title={"Password"}
          addLinkTxt={"Forgot Password?"}
          addLinkHref={"/resetPass-step1"}
          icon={<PasswordIcon/>}
        />
      </div>
      <div className="sLogin__chb-box">
        <label className="custom-chb">
          <input
            className="invisible"
            type="checkbox"
            value={"saveLogFor30days"}
            checked={remember30d}
            onChange={(e) => {
              setRemember30d(!remember30d);
            }}
          />
          <span className="chb-square"></span>
          <span className="chb-txt">Remember password for 30 days</span>
        </label>
      </div>
      <div className="sLogin__btn-box">
        <div className="sLogin__btn-row row">
          <div className="col-12">
            <button
                className="sLogin__btn sLogin__btn--green"
                onClick={handleUserLogin}
            >Log In
            </button>
          </div>
        </div>
      </div>
      <div className="sLogin__footer">
        <div className="sLogin__f-txt">
          <span>Don’t have account yet?</span>
          <Link to='/sign-up'>
            Create Account
            <img src={arrowR} alt=""/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const LoginInput = (props) => {
 const {value, setValue, type, placeholder, addLinkTxt, addLinkHref, message, title, icon, setType} = props;

  return (
    <label className="sLogin__inp-wrap">
      {title && (
        <span className="sLogin__i-row row align-items-center gy-2 gx-3">
          <span className="col">
            <span className="sLogin__input-title">{title}</span>
          </span>
          {addLinkTxt && (
            <span className="col-auto">
              <Link className="sLogin__it-link" to={addLinkHref}>{addLinkTxt}</Link>
            </span>
          )}
        </span>
      )}
      <span className="sLogin__inp-box">
        <span className="sLogin__icon">
          {icon}
        </span>
        <input
          type={type}
          className={`sLogin__input form-control ${icon && setType ? 'sLogin__input--spaced-x' : (icon ? 'sLogin__input--spaced-l' : '')} `}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {setType && (
          <div className="sLogin__eye" onClick={() => {type === "password" ? setType("text") : setType("password")}}>
            {type === "password" && (
              <PasswordEye color={'var(--color, #828387)'}/>
            )}
            {type === "text" && (
              <PasswordEye color={'var(--color, red)'}/>
            )}
          </div>
        )}
      </span>
      {message && (
        <span className="sLogin__message">{message}</span>
      )}
    </label>
  )
}