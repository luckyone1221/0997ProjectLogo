import {EmailIcon, PasswordEye, PasswordIcon} from "../../SvgSprites";
import {LoginInput} from "../Login/Login";
import {useState} from "react";

export const ProfileBox = (props) => {
  const {} = props;

  // const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return(
    <section className="section sProfile">
      <div className="container">
        <div className="sProfile__box">
          <div className="sProfile__header">
            <h1>Profile</h1>
          </div>
          <div className="sProfile__content">
            <div className="sProfile__inputs-row row">
              <div className="col-12">
                <LoginInput
                  value={"Nazarverhun"}
                  type={"text"}
                  placeholder={"Nazarverhun"}
                  title={"Username"}
                />
              </div>
              <div className="col-6">
                <LoginInput
                  value={firstName}
                  setValue={setFirstName}
                  type={"text"}
                  placeholder={"Name"}
                  title={"First Name"}
                />
              </div>
              <div className="col-6">
                <LoginInput
                  value={lastName}
                  setValue={setLastName}
                  type={"text"}
                  placeholder={"Surname"}
                  title={"Last Name"}
                />
              </div>
              <div className="col-12">
                <LoginInput
                  icon={<EmailIcon/>}
                  value={"nazar@gmail.com"}
                  type={"readonly"}
                  placeholder={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}