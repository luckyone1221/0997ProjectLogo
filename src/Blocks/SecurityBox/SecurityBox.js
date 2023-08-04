import {LoginInput} from "../Login/Login";
import {PasswordIcon} from "../../SvgSprites";
import {useState} from "react";
import {Link} from "react-router-dom";

export const SecurityBox = (props) => {
  const {} = props;

  const [currPassword, setCurrPassword] = useState('');
  const [currPasswordType, setCurrPasswordType] = useState('password');

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordType, setNewPasswordType] = useState('password');

  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatPasswordType, setRepeatPasswordType] = useState('password');

  return(
    <section className="section sSecurity">
      <div className="container">
        <div className="sSecurity__box">
          <div className="sSecurity__header">
            <h1>Change Password</h1>
          </div>
          <div className="sSecurity__content">
            <div className="sSecurity__inputs">
              <LoginInput
                value={currPassword}
                setValue={setCurrPassword}
                type={currPasswordType}
                setType={setCurrPasswordType}
                placeholder={"Current Password"}
                title={"Current Password"}
                icon={<PasswordIcon/>}
              />
              <LoginInput
                value={newPassword}
                setValue={setNewPassword}
                type={newPasswordType}
                setType={setNewPasswordType}
                placeholder={"New Password"}
                title={"New Password"}
                icon={<PasswordIcon/>}
              />
              <LoginInput
                value={repeatPassword}
                setValue={setRepeatPassword}
                type={repeatPasswordType}
                setType={setRepeatPasswordType}
                placeholder={"Repeat Password"}
                title={"Repeat New Password"}
                icon={<PasswordIcon/>}
              />
            </div>
            <div className="sSecurity__btns-row row justify-content-end">
              <div className="col-6 col-sm-auto">
                <Link className="sSecurity__btn sSecurity__btn--outline-secondary" to={"/dashboard"}>Discard</Link>
              </div>
              <div className="col-6 col-sm-auto">
                <div className="sSecurity__btn sSecurity__btn--primary" onClick={() => {

                }}>
                  Change Password
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}