import {EmailIcon, PasswordIcon} from "../../SvgSprites";
import {LoginInput} from "./Login";
import {useState} from "react";
import {Link} from "react-router-dom";
import arrowR from "../../img/svg/arrow-r.svg";
import UserService from "../../services/AxiosService"
import { useNavigate } from "react-router-dom";

export const SignUp = (props) => {

    const navigate = useNavigate();
    const {} = props;

    //
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [email, setEmail] = useState('');
    const [policy, setPolicy] = useState(true);

    //pass
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');

    //passRepeat
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [passwordRepeatType, setPasswordRepeatType] = useState('password');


    const handleUserRegister = async () => {
        const data = {
            first_name: userName,
            last_name: userSurname,
            email: email,
            password: password,
            confirm_password: passwordRepeat
        }
        try {
            await UserService.registerUser(data)
            navigate("/login")
        } catch (error) {
            // TODO Add normal error handling here in the future
            alert(error.response.data.detail)
        }
    }

    return (<div className="sLogin__inner">
            <div className="section-title">
                <h1>Set up your Account</h1>
                <p>You have been invited to join Businex. Fill out your details below.</p>
            </div>
            <div className="sLogin__inputs">
                <div className="sLogin__top-inputs-row row">
                    <div className="col-sm-6">
                        <LoginInput
                            value={userName}
                            setValue={setUserName}
                            type={"text"}
                            placeholder={"First Name"}
                        />
                    </div>
                    <div className="col-sm-6">
                        <LoginInput
                            value={userSurname}
                            setValue={setUserSurname}
                            type={"text"}
                            placeholder={"Last Name"}
                        />
                    </div>
                </div>
                <LoginInput
                    value={email}
                    setValue={setEmail}
                    type={"email"}
                    placeholder={"Email"}
                    icon={<EmailIcon/>}
                />
                <LoginInput
                    value={password}
                    setValue={setPassword}
                    type={passwordType}
                    setType={setPasswordType}
                    placeholder={"Password"}
                    addLinkTxt={"Forgot Password?"}
                    addLinkHref={"/resetPass-step1"}
                    icon={<PasswordIcon/>}
                    message={"Password should be at least 8 characters long."}
                />
                <LoginInput
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    type={passwordRepeatType}
                    setType={setPasswordRepeatType}
                    placeholder={"Repeat Password"}
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
                        checked={policy}
                        onChange={(e) => {
                            setPolicy(!policy);
                        }}
                    />
                    <span className="chb-square"></span>
                    <span className="chb-txt">I agree with Businex <Link to="/">Terms and Policy</Link>.</span>
                </label>
            </div>
            <div className="sLogin__btn-box">
                <div className="sLogin__btn-row row">
                    <div className="col-12">
                        <button
                            className="sLogin__btn sLogin__btn--green"
                            onClick={handleUserRegister}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <div className="sLogin__footer">
                <div className="sLogin__f-txt">
                    <span>Already have an account?</span>
                    <Link to='/login'>
                        Log In
                        <img src={arrowR} alt=""/>
                    </Link>
                </div>
            </div>
        </div>)
}